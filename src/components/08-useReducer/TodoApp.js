import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';


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

    /* const [ formValues, handleInputChange ] = useForm({
        description: ''
    }); 

    console.log(formValues);*/

    //Destructuracion de formValues
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    console.log(description);

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


    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <=1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispath(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                <ul className="list-group list-group-flush">
                    {
                        todos.map( (todo, i ) => (
                        <li
                            key={ todo.id }
                            className="list-group-item"
                        >
                            <p className="text-center">{ i + 1 }. { todo.desc }</p>
                            <button
                                className="bnt btn-danger"
                                onClick={ () => handleDelete (todo.id) }
                            >
                                Borrar
                            </button>
                        </li>
                        ))
                    }
                </ul>

                </div>

                <div className="col-5 ">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}
