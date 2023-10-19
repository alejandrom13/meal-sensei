import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

import { Box, Card, Divider, Grid, Typography } from "@mui/material";

import { useAtom } from "jotai";
import { PersonalInfoAtom } from "../form-state";
import { useState } from "react";
import {CircularProgress} from "@mui/material";
import { FormButton } from "@/res/components/button";


const sendData = async (diet: any, payment: any, dietDays: string) => {
    try {
        const res = await fetch('api/ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "diet": diet,
                "payment": payment,
                "dietDays": dietDays
            })
            
        })

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

const initialOptions = {
    clientId: "AffbbQb2Bt5WWXDmGqtHGE22kDBtctWyTC_gXw7VAThVRlqgz1S8atHkLGU65WHKmEbfMi3NVavEJNL_",
    currency: "USD",
    intent: "capture",
    
};

export const PaymentPage = ({handleNext}:any) => {
    const [personalInfo, ] = useAtom(PersonalInfoAtom);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const [error, setError] = useState(false);

    
    return (
        loading ? 
        <div>

        
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
        }}>
            <CircularProgress sx={{
                color: '#02073E',
            
            }}/>
            <Box sx={{width: '20px'}}></Box>
            <Typography variant='h6' color={'#02073E'}>Generando dieta...</Typography>
            
        </Box> 
        
        </div> :
        <div>

             <h1>Pago</h1>


             
          
            <Card variant="outlined" sx={{
                 pl: 2.5,
                 pr: 2.5,
            }}>
     
            <h3>2.99 USD</h3>
        
        <Typography variant='body1' color={'grey'}>Elige tu metodo de pago</Typography>

        <br/>
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons createOrder={(data,actions)=>{
                
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "Plan nutricional de 7 días",
                            amount: {
                                value: '2.99',
                            },
                        },
                    ],
                    payment_source: {
                        paypal: {
               
                        }
                    }
                });
            }}  
            onApprove={async (data, actions)=>{
                
                const order = await actions.order?.capture().then((data)=>{
                    setLoading(true);
                    sendData(personalInfo, data, '7').then((data)=>{
                           
                            router.push('/form/success');
                            setLoading(false);
                        
                    })

                })
            }} />

        </PayPalScriptProvider>
            </Card>
           
            <Divider sx={{
                mt: 2,
                mb: 2,
            
          }} />
            <Card variant="outlined" sx={{
                pl: 2.5,
                pr: 2.5,
                pb: 2,
             }}>
             <h3>Gratis</h3>
             <Typography variant='body1' color={'grey'}>Por tiempo limitado puedes crear un plan de <strong>3 días</strong></Typography>
             
             {error ? <Typography variant='body1' color={'red'}>Este plan solo está limitado a 1 dieta por correo</Typography> : null}
             
             <FormButton onClick={()=>{
                setLoading(true);
                sendData(personalInfo, null, '3').then((data)=>{
                    
                    if(data === "free_user"){
                        setError(true);
                        setLoading(false);
                    } else {
                        router.push('/form/success');
                        setLoading(false);
                    }
        
                })
             }}>Continuar</FormButton>

          </Card>

     


        </div>
            

    );
}