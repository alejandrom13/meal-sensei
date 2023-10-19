import React, { useState } from 'react';
import { Button, IconButton, Popover, Snackbar, Typography } from '@mui/material';
import { Facebook, WhatsApp, Twitter, Link } from '@mui/icons-material';
import { MSIconButton } from './IconButton';
import { PersonalInfoAtom, formStateAtom } from '@/app/form/form-state';
import { useAtom } from 'jotai';

const SharingCenter = () => {
const [open, setOpen] = useState(false);
const [formState, setFormState] = useAtom(PersonalInfoAtom);

const handleOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}

  return (
    <div style={{

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    }}>

        <Typography fontSize={18} textAlign={'center'} fontWeight={300} sx={{
            paddingBottom: '10px',
        }} gutterBottom>
          Comparte <span style={{fontWeight:400}}>Meal Sensei</span>  con tus amigos
        </Typography>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
        
        }}>
            <MSIconButton handleClick={async ()=>{
                const textToCopy = `https://mealsensei.app/`;

                await navigator.clipboard.writeText(textToCopy).then(() => {
                    setOpen(true);
                })

            }} variant="outlined" icon={'material-symbols:link'} />

            <MSIconButton handleClick={async ()=>{

                const urlToShare = 'https://mealsensei.app';

                // Encode the URL for proper sharing
                const encodedUrl = encodeURIComponent(urlToShare);

                // Create the Facebook share URL
                const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

                // Open the Facebook sharing dialog in a new window
                window.open(facebookShareUrl, '_blank', 'width=600,height=400');

                // You can also use a popup library for a better user experience
                // (e.g., react-share: https://www.npmjs.com/package/react-share)
                    
                }} variant="outlined" icon={'logos:facebook'} />

            <MSIconButton handleClick={()=>{
                const urlToShare = 'https://mealsensei.app';
                const message = 'Hola! ¿Sabías que puedes crear un plan nutricional con Inteligencia Artificial de forma gratuita? Usa Meal Sensei.';

                // Encode the message and URL for proper sharing
                const encodedMessage = encodeURIComponent(message);
                const encodedUrl = encodeURIComponent(urlToShare);

                // Create the WhatsApp share URL with the encoded message and URL as parameters
                const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedMessage}%20${encodedUrl}`;

                // Open WhatsApp in a new tab or window
                window.open(whatsappShareUrl, '_blank');
                }} variant="outlined" icon={'logos:whatsapp-icon'} />


            <MSIconButton handleClick={()=>{
                        const textToShare = 'Hola! ¿Sabías que puedes crear un plan nutricional con Inteligencia Artificial de forma gratuita? Usa Meal Sensei.';
                        const urlToShare = 'https://mealsensei.app';
                    
                        // Encode the text and URL for proper sharing
                        const encodedText = encodeURIComponent(textToShare);
                        const encodedUrl = encodeURIComponent(urlToShare);
                    
                        // Create the Twitter share URL
                        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
                    
                        // Open Twitter in a new tab or window
                        window.open(twitterShareUrl, '_blank');
                    
                        // You can also use a popup library for a better user experience
                        // (e.g., react-share: https://www.npmjs.com/package/react-share)
                }} variant="outlined" icon={'simple-icons:x'} />
        </div>

        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Link Copiado!"
           
            />
    </div>
  );
};

export default SharingCenter;
