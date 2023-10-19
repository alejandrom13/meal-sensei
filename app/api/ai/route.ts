import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

import { Resend } from 'resend';

import { EmailTemplate } from '@/app/emailtemplate';

import { PrismaClient } from '@prisma/client';

export interface IDiet {
  name: string;
  email: string;
  age: number;
  gender: string;
  termsAndConditions: boolean;
  receiveUpdates: boolean;
  dietGoal: string;
  heightFeet: string;
  heightInches: string;
  weight: number;
  weightGoal: string;
  weightType: string;
  heightType: string;
  dietPreferences: [
    {
      name: string;
      checked: boolean;
    }
  ];
}

const isFreeUser= async (email: string) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
      where: {
          email: email
      }
  });

  if(user?.plan === 'free'){
      return true;
  } else {
      return false;
  }
}


const convertStringToHTML = (htmlString: any) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, 'text/html');

  return html.body;
}

    // Create an OpenAI API client (that's edge friendly!)
    const openAIConfig = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(openAIConfig);
       
      // Set the runtime to edge for best performance
      // export const runtime = 'edge';



//** SAVE ALL */
const saveAll = async (payment: any, createdDiet:any, diet: IDiet) => {
    const prisma = new PrismaClient();
    //save diet
    await prisma.diet.create({
        data:{
            diet: createdDiet,
            email: diet?.email
        }
    });

    //get diet id
    const dietId = await prisma.diet.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: 1,
      }).catch((err) => {
          console.log(err);
      })

      if(payment !== null){
        await prisma.payment.create({
            data: {
                email: diet?.email,
                paypalId: payment?.id,
                dietId: dietId?.[0].id
            }
    
        });

      }


}

//sb-njjun23946067@personal.example.com
// 2l=t*D99

//** CREATE DIET PLAN */
export async function POST(req: Request) {
  const data = await req.json();
  console.log("THIS IS THE BODY:!!!!",data)
  const diet: IDiet = data.diet;
  const payment = await data.payment;
  const days = data.dietDays;

  const isFree = await isFreeUser(diet?.email);


  if (isFree && payment === null){
    console.log("free userrrrrrrrr")
    return NextResponse.json(
      'free_user'
    )
  }
  
const dietPreferencesString = diet?.dietPreferences.filter(item => item.checked === true)
                                                   .map(item => item.name)
                                                   .join(', ');


  const prisma = new PrismaClient();
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log(resend)

    // Ask OpenAI for a streaming completion given the prompt
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
       temperature: 0.6,
      messages: [
        {
          "role": "system",
          "content": `Eres un nutricionista profesional que crea planes nustricionales y da recomendaciones en formato json(asegurate que el formato esté correcto para parsear y evitar errores). \n
          Usa la siguiente estructura:
          {
            dia-#:{
              desayuno: [],
              almuerzo: [],
              merienda: [],
              cena: []
            },
            recomendaciones: []
          }`
        },
          {
            "role": "user",
           "content": `Generame un plan nutricional de ${days} días segun el siguiente perfil y agrega recomendaciones.\n
                          ${diet?.age} años, género: ${diet?.gender} peso: ${diet?.weight} libras, meta: ${diet?.weightGoal} libras y mis preferencias son: ${dietPreferencesString}
                          `},
      ]
    });
  
    const stringRes = response.data.choices[0].message?.content;
    console.log(stringRes);
  
    const jsonRes = JSON.parse(stringRes!);
    // console.log(jsonRes);

    // // Resend the response to the user
    await resend.emails.send({
      from: 'diet@mealsensei.app',
      to: `${diet?.email}`,
      subject: `🥕 Meal Sensei - Plan nutricional de ${days} días`,
      text: '',
      react: EmailTemplate({ plan: jsonRes, days: days })
      
    });
      
  
    //here we insert everything in the database
    if (await prisma.user.findUnique({
      where: {
          email: diet?.email
      }
    })){
      console.log("user exists....")


      //if user exists we update it
      await prisma.user.update({
        where: {
          email: diet?.email
        },
        data:{
            plan: (days === '7' ? 'weekly' : 'free'),
        }
      })
      await saveAll(payment!, jsonRes, diet!);
  
    } 
    //else we create it
    else {
      console.log("user not exists....")

        await prisma.user.create({
          data: {
              email: diet?.email,
              name: diet?.name,
              gender: diet?.gender,
              age: diet?.age,
              weight: diet?.weight,
              weightGoal: diet?.weightGoal.toString(),
              height: diet?.heightFeet + "ft " + diet.heightInches + "in",
              goal: diet?.dietGoal,
              plan: (days === '7' ? 'weekly' : 'free'),
              termsAndConditions: diet?.termsAndConditions,
              receiveUpdates: diet?.receiveUpdates,
          }
        });
        await saveAll(payment!, jsonRes!, diet!);
    }
  

    // Respond with the stream
    return NextResponse.json(
      //response.data.choices[0].message?.content
      jsonRes
  )
  }