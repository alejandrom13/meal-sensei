import OutlinedCard from "@/res/components/outlined-card";
import { Card, CardActionArea, Chip, Grid, Typography } from "@mui/material";
import animation from "@/res/lottie/landing/pay-per-click.json"
import step1 from "./step1.svg"
import step2 from "./step2.svg"
import step3 from "./step3.svg"
import { Icon } from "@iconify/react/dist/iconify.js";

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
<div style={{
  paddingTop: '25px',
}}>
<CardActionArea sx={{
  borderRadius: '20px',
}}>
  
<Card variant="outlined" sx={{
            p: 2.5,
            backgroundColor: 'transparent',
            borderRadius: '20px',

        }}
        onClick={()=>{
            const amazonUrl = "https://www.amazon.com/b?_encoding=UTF8&tag=amc0e8-20&linkCode=ur2&linkId=61c1e515c322d2761b5236d4c37b8624&camp=1789&creative=9325&node=23675621011"
            window.open(amazonUrl, '_blank')
        }}
        >

            <div style={{
                
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                cursor: 'pointer',

        }}>
                    <Chip label="NUEVO" color="warning"  sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        fontWeight: '500',
                    }}/>
                    <br />
        <Icon icon={'ri:amazon-fill'} fontSize={45}></Icon>
         <Typography align="center" sx={{
                fontWeight: '300',
                fontSize: '1.2rem',
                mb: 1,
                mt: 1,
             
          
         }}>Aprovecha nuestra lista elaborada de <span style={{
            fontWeight: '500',
         }}>suplementos y vitaminas</span> para reforzar tu dieta!</Typography>

         <div style={{
          
          paddingRight: 20,
          paddingLeft: 20,
          backgroundColor: 'transparent',
          border: '1px solid #E0E0E0',
          borderRadius: '100px',
         }}>
         <Typography align="center" sx={{
                fontWeight: '500',
                fontSize: '1rem',
                mb: 1,
                mt: 1,
                color: 'grey',
          
         }}>Haz click aqui.</Typography>
         </div>

        </div>



        </Card>
        </CardActionArea>

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

      </div>
    )
}