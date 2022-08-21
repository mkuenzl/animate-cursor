import React, { useEffect, useState } from 'react'
import './Block.css'

function Block() {

    const mousePosition = useMousePosition();

    return (
        <div className='container'>
            <div className='tracker'>
                {JSON.stringify(mousePosition)}
            </div>
        </div>
    )
}



export default Block

function useMousePosition(){

    const [mousePosition, setMousePosition] = useState({x: null, y: null});
    useEffect(() => {
        const updateMousePosition = ev => {
            
            const responsiveX = (ev.clientX / window.innerWidth).toFixed(2);
            const responsiveY = (ev.clientY / window.innerHeight).toFixed(2);

            const root = document.getElementById('root');

            root.style.setProperty('--x', responsiveX);
            root.style.setProperty('--y', responsiveY);

            // document.documentElement.style.setProperty('--x', responsiveX);
            // document.documentElement.style.setProperty('--y', responsiveY);

            setMousePosition({x: responsiveX, y: responsiveY})
        }
        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;

}