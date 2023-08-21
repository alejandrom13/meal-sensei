import OutlinedCard from "@/res/components/outlined-card";
import { Grid } from "@mui/material";
import animation from "@/res/lottie/landing/pay-per-click.json"
import step1 from "./step1.svg"
import step2 from "./step2.svg"
import step3 from "./step3.svg"

const cardsData = [
    {
      imageSrc: step1, // Replace with actual image path
      title: 'Llena tu perfil',
      subtitle: 'Completa nuestro formulario con información sobre tus necesidades y objetivos alimenticios.',
    },
    {
      imageSrc: step2, // Replace with actual image path
      title: 'Paga tu plan',
      subtitle: 'Una vez que hayas completado el formulario con tus datos, puedes realizar el pago por nuestro servicio.',
    },
    {
      imageSrc: step3, // Replace with actual image path
      title: 'Recibe tu plan alimenticio',
      subtitle: 'Finalmente, recibirás tu plan alimenticio personalizado directamente en tu correo electrónico. ',
    },
  ];

export const LandingSteps = () => {
    return (

        <Grid container spacing={2.5} sx={{
            paddingTop: '50px',
        }}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <OutlinedCard
              image={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    )
}