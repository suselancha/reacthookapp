
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ]    ;
        
        case 'delete':
            //filter regresa un nuevo arreglo, de ese arreglo, con condicion
            return state.filter( todo => todo.id !== action.payload );//payload es el id
    
        default:
            return state;
    }

}