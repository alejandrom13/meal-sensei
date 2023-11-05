import { css } from '@emotion/react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import { Icon } from '@iconify/react/dist/iconify.js';

const footerStyles = css`
  background-color: #1976D2;
  color: white;
  padding: 16px;
  text-align: center;
`;

const iconStyles = css`
  font-size: 30px;
  color: white;
`;


const goTo = (url: string) => () => {
    window.open(url, '_blank');
}

export const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'transparent',
            color: 'black',
            padding: '16px',
            textAlign: 'center',
          
        }}>
            <br />
        <Container>
          <Grid container justifyContent="center" spacing={1}>

            <Grid item>
              <IconButton aria-label="Twitter" sx={{
                color: 'black',
                fontSize: '28px'
              }} onClick={goTo('https://twitter.com/alejandro_env')}>
                <Icon icon={'akar-icons:x-fill'} />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton aria-label="LinkedIn" sx={{
                color: 'black',
                fontSize: '30px'
              }} onClick={goTo('https://www.linkedin.com/in/alejandromatos13/')}>
                <Icon icon={'mdi:linkedin'} />
              </IconButton>
            </Grid>
          </Grid>
          <div>
            
            <Link href="/terms">Términos y Condiciones</Link> |{' '}
            <Link href="/privacy">Políticas de Privacidad</Link>
          </div>
          <div>Built with ❤️ by <Link href='https://amatos.framer.website'>@Alejandro</Link></div>
        </Container>
      </footer>
    )
}