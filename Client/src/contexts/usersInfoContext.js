

import {React,createContext,useState} from 'react';


const UsersInfoContext = createContext();

export const UsersInfoProvider = ({children})=>{

    const [usersData,setUsersData] = useState({});

    return(
    <UsersInfoContext.Provider value={{usersData,setUsersData}}>
        {children}
    </UsersInfoContext.Provider>
    );
 

}

export default UsersInfoContext;