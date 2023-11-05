"use client";
import { LandingButton } from "@/res/components/landing-button";
import { Box, Card, Container } from "@mui/material";

const TermsAndConditions = () => {
    return(
        <div style={{
            backgroundColor: 'transparent',
            color: 'black',
            padding: '5px',

            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            
        }}>
<Container maxWidth="md"  >

        <Card variant="outlined" sx={{
            padding: '16px',
            borderRadius: '20px',
        }}>
            


<h1>Política de Privacidad de MealSensei</h1>
    <p><em>Última actualización: [5 de Noviembre del año 2023]</em></p>

    <p>Gracias por utilizar MealSensei, una aplicación que utiliza la inteligencia artificial para crear planes nutricionales personalizados. Valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información que recopilamos de los usuarios de MealSensei.</p>

    <h2>1. Información que Recopilamos</h2>

    <h3>1.1 Información de Registro</h3>
    <p>Cuando te registras en MealSensei, podemos recopilar la siguiente información:</p>
    <ul>
        <li>Nombre y apellidos</li>
        <li>Dirección de correo electrónico</li>
        <li>Datos de tus medidas del cuerpo</li>
        <li>Informaciones referentes a la dieta que buscas</li>

    </ul>

    <h3>1.2 Información de Perfil</h3>
    <p>Puedes proporcionar información adicional en tu perfil, como edad, género, altura, peso y objetivos de salud. Esta información se utiliza para personalizar tus planes nutricionales.</p>

    <h3>1.3 Información Generada por MealSensei</h3>
    <p>MealSensei utiliza inteligencia artificial para generar planes nutricionales personalizados. Esta información incluye recomendaciones de alimentos y dietas basadas en tus preferencias y objetivos de salud.</p>

    <h3>1.4 Información de Uso</h3>
    <p>Registramos automáticamente información sobre tu interacción con MealSensei, como las páginas visitadas, la duración de la sesión, la ubicación geográfica y el dispositivo utilizado. Utilizamos cookies y tecnologías similares para recopilar esta información.</p>

    <h2>2. Uso de la Información</h2>
    <p>Utilizamos la información que recopilamos para los siguientes fines:</p>
    <ul>
        <li>Personalizar planes nutricionales y recomendaciones de alimentos.</li>
        <li>Proporcionar contenido relevante y mejoras en la aplicación.</li>
        <li>Mantener y mejorar la calidad de nuestros servicios.</li>
        <li>Comunicarnos contigo en relación con tu cuenta y notificaciones de la aplicación.</li>
    </ul>

    <h2>3. Compartir Información</h2>
    <p>No compartimos tu información personal con terceros sin tu consentimiento, a menos que sea necesario para cumplir con las leyes aplicables o para proteger nuestros derechos, privacidad, seguridad o propiedad, o los de nuestros usuarios.</p>

    <h2>4. Seguridad de los Datos</h2>
    <p>Tomamos medidas razonables para proteger tu información de acceso no autorizado, pérdida, robo o divulgación. Utilizamos cifrado y otras medidas de seguridad para garantizar la confidencialidad de tus datos.</p>

    <h2>5. Acceso y Control de la Información</h2>
    <p>Puedes acceder y actualizar tu información de perfil en cualquier momento. Si deseas eliminar tu cuenta, contáctanos a través de [diet@mealsensei.app].</p>

    <h2>6. Cambios en la Política de Privacidad</h2>
    <p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te notificaremos de cualquier cambio significativo por correo electrónico o mediante una notificación en la aplicación.</p>

    <h2>7. Contacto</h2>
    <p>Si tienes alguna pregunta sobre esta Política de Privacidad o sobre tus datos personales, contáctanos a través de [diet@mealsensei.app].</p>
     
    </Card>
    <br />
    <br />
    <br />
    <Box sx={{
        left: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        position: 'fixed',
        paddingBottom: '20px',
        paddingLeft: '30px',
        
    }}>
            <LandingButton onClick={()=>{
            
            window.open('/', '_self')
        }}>Volver</LandingButton>
    </Box>

    </Container>
        </div>
    )
}

export default TermsAndConditions;