"use client"
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
  import Logo from '@/res/svg/logo.svg'

  import { Button } from '@react-email/button';

  
  import * as React from 'react';
  
  interface SlackConfirmEmailProps {
    validationCode?: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';
  
  export const SlackConfirmEmail = ({
    validationCode = 'DJZ-TLX',
  }: SlackConfirmEmailProps) => (
    <Html>
      <Head />
      <Preview>Confirm your email address</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`https://firebasestorage.googleapis.com/v0/b/jobswipe-d1e46.appspot.com/o/logo%20png%20meal%20sensei.png?alt=media&token=1d4a5273-76eb-4262-b971-747d66d63f55`}
              height="40"
              alt="Slack"
            />
          </Section>
          <Heading style={h1}>Gracias por tu compra!</Heading>
          <Text style={heroText}>
            Tu plan nutricional de <strong>7 días</strong> está listo.
          </Text>
  

          <Row>
            <Column style={codeBox}>
              <Text style={{fontSize:'20px', textAlign:'center', fontWeight:'bold'}}>DIA</Text>
              <Text style={{fontSize:'30px', textAlign:'center', fontWeight:'bold'}}>1</Text>
            </Column>
            <Column style={{paddingLeft: '20px'}}>
            <Text style={text}>
                <strong style={{fontWeight: '600'}}>Desayuno:</strong> 2 huevos revueltos, 1 taza de avena con frutas, 1 vaso de jugo de naranja
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Almuerzo:</strong> 1 filete de pollo a la plancha, 1 taza de arroz integral, 1 porción de ensalada mixta
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Merienda:</strong> 1 yogur griego con nueces, 1 fruta
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Cena:</strong> 1 porción de salmón al horno, 1 taza de quinoa, 1 porción de verduras asadas
              </Text>
            </Column>

          </Row>
    <br />
          <Row>
            <Column style={codeBox}>
              <Text style={{fontSize:'20px', textAlign:'center', fontWeight:'bold'}}>DIA</Text>
              <Text style={{fontSize:'30px', textAlign:'center', fontWeight:'bold'}}>1</Text>
            </Column>
            <Column style={{paddingLeft: '20px'}}>
            <Text style={text}>
                <strong style={{fontWeight: '600'}}>Desayuno:</strong> 2 huevos revueltos, 1 taza de avena con frutas, 1 vaso de jugo de naranja
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Almuerzo:</strong> 1 filete de pollo a la plancha, 1 taza de arroz integral, 1 porción de ensalada mixta
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Merienda:</strong> 1 yogur griego con nueces, 1 fruta
              </Text>
              <Text style={text}>
                <strong  style={{fontWeight: '600'}}>Cena:</strong> 1 porción de salmón al horno, 1 taza de quinoa, 1 porción de verduras asadas
              </Text>
            </Column>

          </Row>
  

  
        </Container>
      </Body>
    </Html>
  );
  
  export default SlackConfirmEmail;
  
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