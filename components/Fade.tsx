import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children} : {children : React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5
    });
    const elementRef = useRef();

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`${isVisible ? 'animate__animated animate__fadeInDown' : ''} h-full`}
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease' }}
        >
            {children}
        </div>
    );
};

export default FadeIn;