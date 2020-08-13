import React, { useContext } from 'react'
import { UserContext } from './UserContex'

export const HomeScreen = () => {

    //Todo viene del UserContext
    //const userContext= useContext(UserContext);
    //console.log(userContext);
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3 )}
            </pre>
        </div>
    )
}
