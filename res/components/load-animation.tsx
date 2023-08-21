
import { useEffect} from 'react';
import lottie from 'lottie-web';

interface LoadingAnimationProps {
    width?: string,
    height?: string
    animationData: any
    loop?: boolean
    autoplay?: boolean
    elementId?: string
}

export const LoadAnimation = (props:LoadingAnimationProps) => {

    useEffect(() => {
        // Configura la animación
        const animationContainer = document.getElementById(`${props.elementId}`);
        if (animationContainer) {
          const anim = lottie.loadAnimation({
            container: animationContainer,
            animationData: props.animationData, // Tu archivo JSON de animación
            loop: true || props.loop,
            autoplay: true || props.autoplay,
          });
    
          return () => {
            // Limpia la animación cuando el componente se desmonta
            anim.destroy();
          };
        }
      }, []);

    return (
        <div id={props.elementId} style={{width: `${props.width}`, height: `${props.height}`}}></div>
    )

}