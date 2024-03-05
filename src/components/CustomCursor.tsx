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


        const throttledMoveCursor = throttle(moveCursor, 16);

        window.addEventListener('mousemove', throttledMoveCursor);

        return () => {
            window.removeEventListener('mousemove', throttledMoveCursor);
        };
    }, { scope: cursorRef });

    return <div ref={cursorRef} style={cursorStyles}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g >
                <circle cx="25.5" cy="25.5" r="2.5" fill="white" />
                <circle cx="25" cy="25" r="23.5" stroke="white" strokeWidth="3" />
            </g>
        </svg>
    </div>;
};

const cursorStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    mixBlendMode: "difference",
    border: "5px solid black",
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
};

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
