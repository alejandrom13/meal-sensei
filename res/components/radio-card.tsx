import { Box, Card, CardContent, CardMedia, FormControlLabel, Grid, Radio } from "@mui/material";
import Image from "next/image";
import { Controller } from "react-hook-form";

interface RadioCardProps {
    value: string
    label: string
    selectedValue: string
    onChange: any
    altImage?: string
    svgIcon?: any
  }

const RadioCard = ({ value, label, selectedValue, onChange, altImage, svgIcon }: RadioCardProps) => {
    return (
      
      <Card
        variant="outlined"
        onClick={() => onChange(value)} // Make the card clickable and trigger onChange
        style={{ cursor: 'pointer',  }}// Show pointer cursor on hover
        sx={{
            mb: 2,
            borderRadius: '16px',
           
            border: selectedValue === value ? '1px solid #FFC159' : '1px solid #E0E0E0',
        }}
      >
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <CardContent>
                    <FormControlLabel
                    sx={{
                        pt: 1.9
                    }}
                    control={
                        <Radio
                            color="primary"
                             checked={value === selectedValue}
                             //onChange={() => onChange(value)}
                        />
                        }
                        label={label}
                    />
        
                </CardContent>
            </Grid>

            <Grid item xs={4} >
                <Image src={svgIcon} alt={altImage!} />

            </Grid>
            
        </Grid>



        

      </Card>
    );
  };
  
  export default RadioCard;