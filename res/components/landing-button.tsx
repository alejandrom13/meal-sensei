import { Button } from "@mui/material"
import { Color } from "./main-colors"

interface ButtonProps {
    disabled?: boolean,
    children: React.ReactNode
    type?: 'submit' | 'button' | 'reset' | undefined
    fullWidth?: boolean
    onClick?: () => any
}

export const LandingButton = (props:ButtonProps) => {
    return (
        <Button
        variant="contained"
        size="large"
        //size="small"
        fullWidth={props.fullWidth}
        onClick={props.onClick}
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
            
     {props.children}
    </Button>
    )

}