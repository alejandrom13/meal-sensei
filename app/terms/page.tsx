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
            


            <h1>Términos y Condiciones de MealSensei</h1>
    <p><em>Última actualización: [5 de Noviembre del año 2023]</em></p>

    <p>Por favor, lee estos Términos y Condiciones de uso cuidadosamente antes de utilizar MealSensei, una aplicación que utiliza la inteligencia artificial para crear planes nutricionales personalizados. Al utilizar MealSensei, aceptas y te comprometes a cumplir con estos Términos. Si no estás de acuerdo con estos Términos, por favor, no utilices MealSensei.</p>

    <h2>1. Uso de MealSensei</h2>
    <p>MealSensei se proporciona con el propósito de ayudarte a crear planes nutricionales personalizados y brindar recomendaciones de alimentos. No debes utilizar MealSensei con fines ilegales o no autorizados.</p>

    <h2>2. Información y Contenido</h2>
    <p>MealSensei genera información y contenido basado en la información que proporcionas. No garantizamos la exactitud, integridad o idoneidad de la información generada y no asumimos responsabilidad por las decisiones que tomes basadas en dicha información. Consulta a un profesional de la salud antes de realizar cambios significativos en tu dieta o plan nutricional.</p>

    <h2>3. Cuentas de Usuario</h2>
    <p>Para utilizar ciertas características de MealSensei, puedes ser requerido/a registrar una cuenta de usuario. Es tu responsabilidad mantener la confidencialidad de tu información de inicio de sesión y notificarnos de cualquier uso no autorizado de tu cuenta.</p>

    <h2>4. Privacidad</h2>
    <p>Nuestra Política de Privacidad describe cómo recopilamos, utilizamos y protegemos tus datos personales. Al utilizar MealSensei, aceptas nuestras prácticas de privacidad. Consulta la Política de Privacidad para obtener más información.</p>

    <h2>5. Cambios en los Términos y Condiciones</h2>
    <p>Nos reservamos el derecho de actualizar o modificar estos Términos en cualquier momento. Te notificaremos de cualquier cambio significativo en estos Términos por correo electrónico o mediante una notificación en la aplicación. El uso continuado de MealSensei después de la notificación de los cambios constituirá tu aceptación de los nuevos Términos.</p>

    <h2>6. Rescisión</h2>
    <p>Podemos rescindir o suspender tu acceso a MealSensei en cualquier momento, sin previo aviso, por cualquier motivo, incluyendo si violas estos Términos. Tú también puedes rescindir tu cuenta en cualquier momento.</p>

    <h2>7. Limitación de Responsabilidad</h2>
    <p>MealSensei se proporciona &quot; tal cual &quot; y no asumimos responsabilidad por cualquier daño directo, indirecto, incidental, especial, consecuente o punitivo derivado de tu uso de la aplicación. Tu único recurso ante cualquier insatisfacción con MealSensei es dejar de utilizar la aplicación.</p>

    <h2>8. Contacto</h2>
    <p>Si tienes alguna pregunta sobre estos Términos, por favor contáctanos a través de [diet@mealsensei.app].</p>
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