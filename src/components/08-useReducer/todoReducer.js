
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ]    ;
        
        case 'delete':
            //filter regresa un nuevo arreglo, de ese arreglo, con condicion
            return state.filter( todo => todo.id !== action.payload );//payload es el id
        
        case 'toggle.old':
            return state.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })

        case 'toggle': //return implicito
            return state.map( todo =>
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );
    
        default:
            return state;
    }

}