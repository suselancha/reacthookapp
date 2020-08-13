import React, { useState } from 'react'
import { AppRoutes } from './AppRoutes'
import { UserContext } from './UserContex'

export const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{
            user,
            setUser
         }}>

            <AppRoutes />

        </UserContext.Provider>
    )
}
