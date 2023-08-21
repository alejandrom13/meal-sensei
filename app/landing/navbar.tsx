import { Box } from "@mui/material"
import Image from "next/image"
import Logo from "@/res/svg/logo.svg"
import {Button} from "@mui/material"
import { Color } from "@/res/components/main-colors"
import { useRouter } from "next/navigation";


export const LandingNavBar = () => {
    const router = useRouter();
    return (
        //create a nav bar with a logo and a button
        <Box sx={{ display: 'flex', pt:1 }}>
            <Box sx={{ flexGrow: 1 }}>
               <Image src={Logo} alt="logo" height={30} style={{
                paddingTop: '5px',
               }}/>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => {
                        router.push('/form');
                    }}
                    //size="small"
                    sx={{ borderRadius: '10px', 
                            boxShadow: 'none', 
                            backgroundColor: `${Color.primary}`,
                            textTransform: 'none', 
                            fontWeight: 'bold',
                            ":hover":{
                                boxShadow: 'none', 
                                backgroundColor: `${Color.hoverPrimary}`,
                            
                            }}}
                    >
                    Empezar
                </Button>
            </Box>
        </Box>
    )
}