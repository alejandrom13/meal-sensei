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
                    }).then(()=>{
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
                handleClickOpen();
                sendData(personalInfo, null, '3').then((data)=>{
                    
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

          <Dialog
        open={open}
        TransitionComponent={Transition}
             fullScreen
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
            '& .MuiDialog-paper': {
                backgroundColor: '#FDFCF5',
                boxShadow: 'none',
            }
        
        }}
      >
        <DialogContent>
        <div>

        <Box sx={{  mt: 10, mb: 0, padding: 2}}>
  
  <Container maxWidth='sm'
    sx={{
      pt: 1,
      pb: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

    }}>

  <CircularProgress size={110} thickness={0.5} sx={{
      color: '#000',
      mb: 3}} />

  <Typography sx={{ color: '', mt: 0, mb: 3, fontSize:'24px', fontWeight:'300' }}>
  ¡Estamos creando tu plan nutricional!
    </Typography>
    <Alert sx={{
        
    }} severity="warning">No cierres la pagina.</Alert>

  </Container>
    

</Box>
        
        </div> 
        </DialogContent>

      </Dialog>

     


        </div>
            

    );
}