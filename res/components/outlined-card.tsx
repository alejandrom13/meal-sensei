import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LoadAnimation } from './load-animation';
import { Box } from '@mui/material';
import illustration  from "@/res/svg/logo.svg"
import Image from 'next/image';


interface OutlinedCardProps {
    image: any,
    title: string,
    subtitle: string
    }

const OutlinedCard = ({ image, title, subtitle }:OutlinedCardProps) => {
  return (
    <Card variant="outlined" sx={{
        backgroundColor: 'transparent',
        borderRadius: '20px',
        border: '1px solid #00000033',
    }}>
        <Box         display={'flex'}

        paddingTop={0}
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'100%'}>
            <Image src={image} height={200} alt={''}/>
        </Box>
      <CardContent >
        <Box textAlign={'center'}>
        <h3 >{title}</h3>
        <p style={{
            fontSize: '16px',
            fontWeight: '300',
            
        }}>{subtitle}</p>
        </Box>

      </CardContent>
    </Card>
  );
};

export default OutlinedCard;