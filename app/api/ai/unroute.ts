import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

import { Resend } from 'resend';

import { EmailTemplate } from '@/app/emailtemplate';

import { PrismaClient } from '@prisma/client';

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
const resend = new Resend(process.env.RESEND_API_KEY);



const saveAll = async (payment: any, createdDiet:any, diet: any) => {

    const prisma = new PrismaClient();

    //save diet
    await prisma.diet.create({
        data:{
            diet: createdDiet,
            email: diet.email
        }
    });

    //get diet id
    const dietId = await prisma.diet.findFirst({
        where: {
            email: diet.email
        }
    })

    //save payment
    await prisma.payment.create({
        data: {
            email: payment.email,
            paypalId: payment.id,
            diet: createdDiet,
            dietId: dietId?.id
        }

    });

}

export async function GetDiet(diet: any, payment: any) {
    const prisma = new PrismaClient();
  
//   const resend = new Resend(process.env.RESEND_API_KEY);


  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
     temperature: 0.6,
    //  messages: [
    //     {"role": "user",
    //       "content": `Genera 3 chistes relacionados con el siguiente tema: ${prompt.topic}, responde en html`},
    //  ]
    // })
    messages: [
      {
        "role": "system",
        "content": `Eres un nutricionista profesional que crea planes nustricionales y da recomendaciones en formato json. \n
        Usas la siguiente estructura: \n
        dia-#:{
          desayuno: [],
          almuerzo: [],
          merienda: [],
          cena: []
        },
        recomendaciones: []`
      },
        {
          "role": "user",
         "content": `Generame un plan nutricional de 3 días segun el siguiente perfil y agrega recomendaciones.\n
                        ${diet.age} años, género: ${diet.gender} peso: ${diet.weight} libras, meta: ${diet.weightGoal} libras
                        `},
    ]
  });

  const stringRes = response.data.choices[0].message?.content;

  const jsonRes = JSON.parse(stringRes!);
  console.log(jsonRes);

  //here we insert everything in the database
  if (await prisma.user.findUnique({
    where: {
        email: diet.email
    }
  })){
    await saveAll(payment, jsonRes, diet);

  } else {
      await prisma.user.create({
        data: {
            email: diet.email,
            name: diet.name,
            gender: diet.gender,
            age: diet.age,
            weight: diet.weight,
            weightGoal: diet.weightGoal,
            height: diet.height,
            goal: diet.goal,
            termsAndConditions: diet.termsAndConditions,
            receiveUpdates: diet.receiveUpdates,
        }
      });
      await saveAll(payment, jsonRes, diet);
  }

     
    // // Resend the response to the user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: `${diet.email}`,
      subject: '🍏 Tu plan de nutrición por 7 días',
      text: '',
      react: EmailTemplate({ plan: jsonRes, userProfile: prompt })
      
    });

  // Respond with the stream
  return NextResponse.json(
    //response.data.choices[0].message?.content
    jsonRes
)
}