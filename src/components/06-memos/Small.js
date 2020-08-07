import React from 'react'

export const Small = React.memo(({ value }) => {

    //Se muestrar porque hay cambios en el componente
    //Hay q prevenir que se vuelva a llamar si sus propiedades son las mismas
    //El boton Show/Hide no tiene q hacer que este comp se vuelva a llamar
    console.log('Me volvi a llamar :(');

    return (
        <div>
            <small>{ value }</small>
        </div>
    )
});
