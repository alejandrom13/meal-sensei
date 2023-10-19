import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";

interface IconButtonProps {
    handleClick: () => void;
    variant?: 'outlined' | 'contained';
    icon: any;
}

export const MSIconButton = ({handleClick, variant, icon}: IconButtonProps) => {
    return (

        <Button
          onClick={handleClick}
          variant="outlined"
          
          sx={{
            color: '#02073E',
            backgroundColor: '##E7874508',
            borderColor: '#CECECE',
            borderRadius: '100px',
          }}
        >
            <Icon fontSize={24} icon={icon} />
        </Button>
   

    )
}