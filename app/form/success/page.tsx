"use client"
import SharingCenter from "@/res/components/SharingCenter"
import { FormButton } from "@/res/components/button"
import { FormLayout } from "@/res/components/form-layout"
import { LoadingAnimation } from "@/res/components/loading-animation"
import { Box, Card } from "@mui/material"
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

               

                <FormButton onClick={()=>{
                    window.location.href = "/"
             }}>Regresar</FormButton>
<br />
<br />
<Card variant="outlined" sx={{
            p: 2.5,
            backgroundColor: 'transparent',
       
        }}>
        <SharingCenter/>
        </Card>

            </FormLayout>
        </div>
    )
}

export default SucessPage

// sb-njjun23946067@personal.example.com
// 2l=t*D99