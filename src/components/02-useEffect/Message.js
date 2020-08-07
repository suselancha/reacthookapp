import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x,y} = coords;


    useEffect(() => {
        //Cuerpo
        console.log('Componente montado');

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y };
            //console.log(coors);
            setCoords(coors);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            //Fase de limpieza
            console.log('Componente DESmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []) //Dependencia

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
