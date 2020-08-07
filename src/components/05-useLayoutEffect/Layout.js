import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../05-useLayoutEffect/layout.css';

export default function Layout() {

    const { counter, increment } = useCounter(1);

    //const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //console.log(state);
    const { quote } = !!data && data[0]; //Si hay data extrae

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                >
                    {quote}
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3) }
            </pre>


            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote
            </button>

        </div>
    )
}
