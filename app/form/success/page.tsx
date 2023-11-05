"use client"
import SharingCenter from "@/res/components/SharingCenter"
import { FormButton } from "@/res/components/button"
import { FormLayout } from "@/res/components/form-layout"
import { LoadingAnimation } from "@/res/components/loading-animation"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Box, Card, CardActionArea, Chip, Typography } from "@mui/material"
import router from "next/router"

const SucessPage = () => {
    return (
        <div>
            <FormLayout>
            <Box display={"flex"} alignItems={"center"} width={"100%"} height={"100%"} paddingLeft={7}>
                
                <LoadingAnimation/>
           
                </Box>
                <Box textAlign={"center"}>
                    <h1>¡Gracias por tu compra!</h1>
                    <p>En breve recibirás un correo con tu plan nutricional.</p>

                </Box>
                <br />
                <CardActionArea>
<Card variant="outlined" sx={{
            p: 2.5,
            backgroundColor: 'transparent',

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

        <br />
        <Card variant="outlined" sx={{
            p: 2.5,
            backgroundColor: 'transparent',
       
        }}>
        <SharingCenter/>
        </Card>


                <FormButton onClick={()=>{
                    window.location.href = "/"
             }}>Regresar</FormButton>





        <br />



            </FormLayout>
        </div>
    )
}

export default SucessPage

// sb-njjun23946067@personal.example.com
// 2l=t*D99