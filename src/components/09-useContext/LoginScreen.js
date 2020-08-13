import React, { useContext } from 'react'
import { UserContext } from './UserContex';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    console.log(setUser);
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                        id: 123,
                        user: 'Alfredo'
                    })}
            >
                Login
            </button>
        </div>
    )
}
