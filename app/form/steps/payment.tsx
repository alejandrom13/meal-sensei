import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

import { Alert, Box, Button, Card, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Slide, Typography } from "@mui/material";

import { useAtom } from "jotai";
import { PersonalInfoAtom, formStateAtom, handleBackArrow } from "../form-state";
import { useEffect, useState } from "react";
import {CircularProgress} from "@mui/material";
import { FormButton } from "@/res/components/button";
import { set } from "react-hook-form";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { get } from "http";
import { LoadingAnimation } from "@/res/components/loading-animation";
import CoolDialog from "@/res/components/CoolDialog";


const coolMessages = [
    "¡Estamos creando tu plan nutricional!",
    "La paciencia es una virtud...",
    "En breve, lo mejor está por venir.",
    "¡Gracias por esperar!",
    "Cargando...",
    "¡Estamos casi listos!",
  ];

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
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
    //production key
    clientId: "AXoZ7ZSF1_iq9XWNf05Qv4qzfC1kHgo_a80s6tSLLz1N0LCLvR7ILwDH53xgaz6N-WiHWN0p3WrAgZln",
    currency: "USD",
    intent: "capture",
    
};

export const PaymentPage = ({handleNext}:any) => {
    const [personalInfo, ] = useAtom(PersonalInfoAtom);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const [error, setError] = useState(false);
    const [handleBack, setHandleBack] = useAtom(handleBackArrow);


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {

      setOpen(true);


    };
  
    const handleClose = () => {
      setOpen(false);
    };
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
            
     
            <h3 style={{
                fontWeight: 'normal',
            }}>✨ Plan nutricional de 7 días</h3>

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
                    
                    application_context:{
                        shipping_preference: 'NO_SHIPPING',
                        locale: 'es-DO',
                        brand_name: 'MealSensei',
                    },
                    payment_source: {
                        paypal: {
                            
                        }
                    }
                });
            }}  
            onApprove={async (data, actions)=>{
                
                const order = await actions.order?.capture().then((data)=>{
                    handleClickOpen();
                   
                    sendData(personalInfo, data, '7').then((data)=>{
                            router.push('/form/success');
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
             <Typography variant='body1' color={'grey'}>Por tiempo limitado puedes crear un plan de <strong>2 días</strong></Typography>
             
             {error ? <Typography variant='body1' color={'red'}>Este plan solo está limitado a 1 dieta por correo</Typography> : null}
             
             <FormButton onClick={()=>{
                handleClickOpen();
                sendData(personalInfo, null, '2').then((data)=>{
                    
                    if(data === "free_user"){
                        setError(true);
                        handleClose();
                    } else {
                        router.push('/form/success');
                    }
                }).then(()=>{
                    setLoading(false);
                })
             }}>Continuar</FormButton>

          </Card>

          <CoolDialog open={open} />
     


        </div>
            

    );
}