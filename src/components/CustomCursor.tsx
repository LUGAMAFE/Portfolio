import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useGSAP(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                stagger: 0.02
            });
        };

        // Función para aplicar throttling
        const throttledMoveCursor = throttle(moveCursor, 16); // Aproximadamente 60fps

        window.addEventListener('mousemove', throttledMoveCursor);

        return () => {
            window.removeEventListener('mousemove', throttledMoveCursor);
        };
    }, { scope: cursorRef });

    return <div ref={cursorRef} style={cursorStyles}></div>;
};

const cursorStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'black',
    pointerEvents: 'none', // Asegúrate de que el cursor no interfiera con otros elementos
    zIndex: 9999,
    transform: 'translate(-50%, -50%)', // Centra el cursor
};

// Función de throttling para limitar la tasa de ejecución de una función
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

export default CustomCursor;
