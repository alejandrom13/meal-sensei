import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

import { Resend } from 'resend';

import { EmailTemplate } from '@/app/emailtemplate';

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
// const resend = new Resend('re_WACAjuPT_EUBqE5w6tC8r94fPbbXAcmar');

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  const { prompt } = await req.json();

  var textResponse: any;

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
          cena: [],
        },
        recomendaciones: []`
      },
        {
          "role": "user",
         "content": `Generame un plan nutricional de 3 días segun el siguiente perfil y agrega recomendaciones.\n
                        ${prompt.age} años, género: ${prompt.gender} peso: ${prompt.weight} libras, meta: ${prompt.weight_goal} libras
                        `},
    ]
  });

  const stringRes = response.data.choices[0].message?.content;

  const jsonRes = JSON.parse(stringRes!);
  console.log(jsonRes);

  // }).then((response) => {
  //   console.log(response.text());
  //   textResponse = response.text();
  // })

  // Convert the response into a friendly text-stream
    // const text = response.data.choices[0].text;
    // console.log(response);
     
    // // Resend the response to the user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: `${prompt.email}`,
      subject: '🍏 Tu plan de nutrición por 7 días',
      text: '',
      react: EmailTemplate({ plan: jsonRes, userProfile: prompt })
      
    });

  // Respond with the stream
  return NextResponse.json(
    response.data.choices[0].message?.content
)
}