import { useState, useLayoutEffect } from 'react';

export const useResize = () => {

    const [size, setSize] = useState<number[]>([]);

    useLayoutEffect(() => {

        function updateSize() {
            
            setSize([window.innerWidth, window.innerHeight]);
        }
    
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);

    }, []);
    

    return [size];
}