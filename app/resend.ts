import { Resend } from "resend";
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(body:any) {

    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: `${body.email}`,
        subject: 'Hello world',
        html: `${body.message}`,
      });
        console.log(data);
        return data;
}