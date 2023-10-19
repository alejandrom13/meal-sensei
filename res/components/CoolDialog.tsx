import React, { useState, useEffect, useMemo } from 'react';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { DialogContent, Box, Alert, Container } from '@mui/material';
import { LoadingAnimation } from './loading-animation';

interface CoolDialogProps {
  open: boolean;
  onClose?: () => void;
}

const CoolDialog: React.FC<CoolDialogProps> = ({ open, onClose }) => {
    const [messageIndex, setMessageIndex] = useState(0);
  

    const coolMessages = [
        "¡Estamos creando tu plan nutricional!",
        "La paciencia es una virtud...",
        "En breve, lo mejor está por venir.",
        "¡Gracias por esperar!",
        "Cargando...",
        "¡Estamos casi listos!",
      ]
    

      const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
      const [currentMessage, setCurrentMessage] = useState(coolMessages[currentMessageIndex]);
    
      useEffect(() => {
        if (open) {
            // Reset the messageIndex when the dialog is opened
            setCurrentMessageIndex(0);
            console.log('open');
            const messageInterval = setInterval(() => {
                setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % coolMessages.length);
                setCurrentMessage(coolMessages[currentMessageIndex]);
              }, 500);

              return () => {
                clearInterval(messageInterval); // Limpiar el intervalo cuando el componente se desmonte.
              };
        }      
 
   
      }, []);
    

  return (
    <Dialog open={open} onClose={onClose}
  
    
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

        <LoadingAnimation/>



  <Typography sx={{ color: '', mt: 0, mb: 3, fontSize:'24px', fontWeight:'300' }}>
  {currentMessage}
    </Typography>

    <CircularProgress size={30} thickness={1} sx={{
      color: '#000',
      mb: 3}} />
    <Alert sx={{
        
    }} severity="warning">No cierres la pagina.</Alert>

  </Container>
    

</Box>
        
        </div> 
        </DialogContent>
    </Dialog>
  );
};

export default CoolDialog;
