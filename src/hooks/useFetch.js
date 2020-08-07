import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);//Primera vez esta montado el componente
   
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if ( isMounted.current ) { //Verifica que el componente este montado; sino no hacen nada
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                }
            });
    }, [url]) //Se ejecuta solamente cuando el url cambie

    return state;

}
