
import { useEffect} from 'react';
import lottie from 'lottie-web';
import loadingAnimation from '@/res/lottie/animation.json'


export const LoadingAnimation = () => {

    useEffect(() => {
        // Configura la animación
        const animationContainer = document.getElementById('loading-animation');
        if (animationContainer) {
          const anim = lottie.loadAnimation({
            container: animationContainer,
            animationData: loadingAnimation, // Tu archivo JSON de animación
            loop: true,
            autoplay: true,
          });
    
          return () => {
            // Limpia la animación cuando el componente se desmonta
            anim.destroy();
          };
        }
      }, []);

    return (
        <div id="loading-animation" style={{width: '80%', height: '80%'}}></div>
    )

}