import axios from "axios";
import {
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET,
    PAYPAL_API_ENVIRONMENT,
    HOST
} from "@/app/config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

    try{
        const order = {
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: "105.70",
                },
              },
            ],
            application_context: {
              brand_name: "mycompany.com",
              payment_method_preferences: "IMMEDIATE_PAYMENT_REQUIRED",
              landing_page: "NO_PREFERENCE",
              user_action: "PAY_NOW",
              return_url: `${HOST}api/paypal/success`,
              cancel_url: `${HOST}api/paypal/cancel`,
            },
          };

    // format the body
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    
    // Generate an access token
    const {data: {access_token}} =  await axios.post(`${PAYPAL_API_ENVIRONMENT}/v1/oauth2/token`, params, {
        auth:{
            username: `${PAYPAL_API_CLIENT}`,
            password: `${PAYPAL_API_SECRET}`,
        }

    });
    console.log(access_token);

    // Make a request
    const response = await axios.post(
        `${PAYPAL_API_ENVIRONMENT}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      return NextResponse.json(response.data)
    }
    catch (error) {
        console.log(error);
        return NextResponse.error();
    }

}


export async function POST(request: Request) {
    return NextResponse.json({ message: "Hello world!" });

}