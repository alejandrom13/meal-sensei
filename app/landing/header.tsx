import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Illustration from "@/res/svg/landing/undraw_diet.svg"
import animation from "@/res/lottie/animation.json"
import { LoadAnimation } from '@/res/components/load-animation';
import { Button } from '@mui/material';
import { Color } from '@/res/components/main-colors';
import { LandingButton } from '@/res/components/landing-button';
import { useRouter } from "next/navigation";

export const LandingHeader = () => {
    const router = useRouter();
    return (
        <div>
            {/* add a header with a title and subtitle on the left and image on the right */}
            <Grid container spacing={0} padding={5} sx={{ mt: 5 }} style={{
                backgroundColor: '#F9F2EA',
                borderRadius: '40px',
            }}>
                <Grid item xs={12} md={6}>
                    <div>
                        <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#000', lineHeight: '1.2' }}>Dile adiós a las dietas genéricas</h1>
                        <p style={{ fontSize: '16px', fontWeight: 'normal', color: '#00000099', lineHeight: '1.5' }}>Obtén un plan alimenticio personalizado basado en inteligencia artificial para una alimentación saludable y equilibrada, diseñado especialmente para ti.</p>
                        <LandingButton onClick={()=>{
                            router.push('/form');
                        }}>Empezar Ahora</LandingButton>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} >
                    <div>
                    {/* <Image src={Illustration} alt="logo" height={220} style={{
                paddingTop: '5px',
               }}/>                     */}

                <LoadAnimation animationData={animation} width='100%' elementId='loading1'  />
               </div>
                </Grid>
            </Grid>
        </div>
    )
}