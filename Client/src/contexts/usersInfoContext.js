

import {React,createContext,useState} from 'react';


const UsersInfoContext = createContext();

export const UsersInfoProvider = ({children})=>{

    const [usersData,setUsersData] = useState({});
    const [remainingGoal ,setRemainingGoal] = useState({});

    return(
    <UsersInfoContext.Provider value={{usersData,setUsersData,remainingGoal ,setRemainingGoal}}>
        {children}
    </UsersInfoContext.Provider>
    );
 

}

export default UsersInfoContext;