import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


//Es el initialState
const init = () => {

    //Si trae null retorna arreglo vacio []
    //
    return JSON.parse(localStorage.getItem('todos')) || [];

    /* return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }]; */
}

export const TodoApp = () => {

    const [ todos, dispath ] = useReducer(todoReducer, [], init);

    //localStorage solo guarda string
    //Cuando cambie "todos" recien guarda
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = ( todoid ) => {
        //console.log(todoid);
        const action = {
            type: 'delete',
            payload: todoid
        }
        dispath(action);
    }

    const handleToggle = (todoId) => {
        dispath({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispath({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                {/* TodoList */}
                <TodoList
                    todos={ todos }
                    handleDelete= { handleDelete }
                    handleToggle={ handleToggle }
                />

                </div>

                <div className="col-5 ">
                    
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>

            </div>

        </div>
    )
}
