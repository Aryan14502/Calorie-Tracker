

import {React,createContext,useState} from 'react';


const UsersInfoContext = createContext();

export const UsersInfoProvider = ({children})=>{

    const [usersData,setUsersData] = useState({});
    const [remainingGoal ,setRemainingGoal] = useState({
        calories :1,
        carbs:1,
        protein:1,
        fat:1
    });
    const [dailyneeds,setdailyneeds] = useState({
        calories :1,
        carbs:1,
        protein:1,
        fat:1
    })

    return(
    <UsersInfoContext.Provider value={{usersData,setUsersData,remainingGoal ,setRemainingGoal,dailyneeds,setdailyneeds}}>
        {children}
    </UsersInfoContext.Provider>
    );
 

}

export default UsersInfoContext;