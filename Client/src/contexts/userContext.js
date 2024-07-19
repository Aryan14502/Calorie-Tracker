

import {createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children})=>{


    const[user,setUser] = useState(false);
    const[isSignedIn,setIsSignedIn] = useState(false);


    return (
        <UserContext.Provider  value={{user,isSignedIn,setUser,setIsSignedIn}}>
            {children}
        </UserContext.Provider>
    )
}


export {UserProvider, UserContext} ;
