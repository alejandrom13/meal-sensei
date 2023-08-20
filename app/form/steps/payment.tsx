import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
    PAYPAL_API_CLIENT,
} from "@/app/config";

import { useRouter } from "next/navigation";

import { Typography } from "@mui/material";

const initialOptions = {
    clientId: "AffbbQb2Bt5WWXDmGqtHGE22kDBtctWyTC_gXw7VAThVRlqgz1S8atHkLGU65WHKmEbfMi3NVavEJNL_",
    currency: "USD",
    intent: "capture",
    
};

export const PaymentPage = ({handleNext}:any) => {
    const router = useRouter();
    return (
        <div>
            <h1>Pago</h1>
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
                    const order = await actions.order?.capture();
                    console.log(order);
                    router.push('/form/success');

                }} />

            </PayPalScriptProvider>
        </div>


    );
}