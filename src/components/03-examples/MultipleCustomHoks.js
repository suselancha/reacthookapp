import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export default function MultipleCustomHoks() {

    const { counter, increment } = useCounter(1);

    //const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    //console.log(state);
    const { author, quote } = !!data && data[0]; //Si hay data extrae



    return (
        <div>
            <h1>BreakingBad Quote</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <>
                            <blockquote className="blockquote text-right">
                                <p className="mb-0">{ quote }</p>
                                <footer className="blockquote-footer">{ author }</footer>
                            </blockquote>

                            <button 
                                className="btn btn-primary"
                                onClick={ increment }
                            >
                                    Siguiente quote
                            </button>
                        </>
                    )
            }

            

        </div>
    )
}
