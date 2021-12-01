import {  createContext, useEffect, useState } from 'react';


export const Context =  createContext ({
    user:undefined,
    setUser: () => {},
});



export const ContextProvider = ( {children} ) => {

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const newUser = localStorage.getItem("user");
        if(newUser) setUser(JSON.parse(newUser));
    }, [])

    return <Context.Provider value={{user,setUser}}>
        { children }
            </Context.Provider>
   
}
