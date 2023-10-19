import {Body} from '@react-email/body';
import {Column} from '@react-email/column';
import {Container} from '@react-email/container';
import {Head} from '@react-email/head';
import {Heading} from '@react-email/heading';
import {Html} from '@react-email/html';
import {Img} from '@react-email/img';
import {Link} from '@react-email/link';
import {Preview} from '@react-email/preview';
import {Row} from '@react-email/row';
import {Section} from '@react-email/section';
import {Text} from '@react-email/text';
import logo from '@/res/png/logo-meal-sensei.png'

import { Button } from '@react-email/button';


import * as React from 'react';

interface EmailTemplateProps {
  //userProfile: any;
  body?: any;
  plan: any;
  days: string;
}

export const EmailTemplate = ({ body, plan, days}: EmailTemplateProps) => {
  return (

    <Html>
      <Head />
      <Preview>Tu plan nutricional de {days} días está listo.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src='https://firebasestorage.googleapis.com/v0/b/jobswipe-d1e46.appspot.com/o/logo_for_email.png?alt=media&token=fd37a3a2-d095-4680-aa5f-b2b8951c8b70&_gl=1*lkxqzw*_ga*MTY3NzYwMTUyNy4xNjg3MDI1NTI0*_ga_CW55HF8NVT*MTY5NzcyNTY1OS41My4xLjE2OTc3MjU2OTEuMjguMC4w'
              height="40"
              alt="meal-sensei"
            />
          </Section>
          <Heading style={h1}>Gracias por tu compra!</Heading>
          <Text style={heroText}>
            Tu plan nutricional de <strong>{days} días</strong> está listo.
          </Text>
  
          {Object.keys(plan).map((day, index) => {
        if (day !== 'recomendaciones') {
          const meals = plan[day];
          return (
            <div key={index}>
            <Row>
            <Column style={codeBox}>
              <Text style={{fontSize:'20px', textAlign:'center', fontWeight:'bold'}}>DÍA</Text>
              <Text style={{fontSize:'30px', textAlign:'center', fontWeight:'bold'}}>{index + 1}</Text>
            </Column>
            <Column style={{paddingLeft: '20px'}}>
            <Text style={text}>
                <strong style={{fontWeight: '600'}}>Desayuno:</strong> {meals.desayuno.join(', ')}
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Almuerzo:</strong> {meals.almuerzo.join(', ')}
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Merienda:</strong> {meals.merienda.join(', ')}
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Cena:</strong> {meals.cena.join(', ')}
              </Text>
            </Column>
            </Row>
            <br />
            </div>




          );
        } if (day === 'recomendaciones') {
          return (
            <div key={index}>
              <h1>Recomendaciones</h1>
              {plan.recomendaciones.map((recomendacion: any, index: number) => {
                  return (
                    <div key={index}>
                      <ul>
                        <li>{recomendacion}</li>
                      </ul>
                    </div>
                  );
                })}
            </div>
          );
        }
        // add recomendaciones
        
      })}




            {/* <div>
                <strong>Desayuno:</strong> asdasdasdasdas
              </div>
              <div>
                <strong>Almuerzo:</strong> asdasdasdasd
              </div>
              <div>
                <strong>Merienda:</strong> asdadasdasda
              </div>
              <div>
                <strong>Cena:</strong> asdadsasdasda
              </div>
               */}
               
               
      
        </Container>
      </Body>
    </Html>
  );

}
  export default EmailTemplate;
  
const footerText = {
    fontSize: '12px',
    color: '#b7b7b7',
    lineHeight: '15px',
    textAlign: 'left' as const,
    marginBottom: '50px',
  };
  
  const footerLink = {
    color: '#b7b7b7',
    textDecoration: 'underline',
  };
  
  const footerLogos = {
    marginBottom: '32px',
    paddingLeft: '8px',
    paddingRight: '8px',
    width: '100%',
  };
  
  const socialMediaIcon = {
    display: 'inline',
    marginLeft: '32px',
  };
  
  const main = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    
  };
  
  const logoContainer = {
    marginTop: '32px',
  };
  
  const h1 = {
    color: '#1d1c1d',
    fontSize: '36px',
    fontWeight: '700',
    margin: '30px 0',
    padding: '0',
    lineHeight: '42px',
  };
  
  const heroText = {
    fontSize: '20px',
    lineHeight: '28px',
    marginBottom: '30px',
  };
  
  const codeBox = {
    background: '#FFF',
    borderRadius: '10px',
    border: '5px solid #FB8A4D',

    padding: '0px 20px',
  };

  const codeBox2 = {
    background: '#fff',
    width: '10px',


    borderRadius: '0px',
    marginRight: '50px',
    marginBottom: '30px',
    padding: '20px 23px',
  };
  
  const confirmationCodeText = {
    fontSize: '30px',
    textAlign: 'center' as const,
    verticalAlign: 'middle',
  };
  
  const text = {
    color: '#000',
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '18px',
  };

