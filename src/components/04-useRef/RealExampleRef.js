import React, { useState } from 'react'
import MultipleCustomHoks from '../03-examples/MultipleCustomHoks'

export default function RealExampleRef() {

    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHoks />}

            <button 
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Show/Hide
            </button>
        </div>
    )
}
