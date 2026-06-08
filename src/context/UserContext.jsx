import { createContext, useState } from "react";
export const UserContext=createContext()



const UserProvider=({children})=>{
const [user,setUser]=useState("Smith")
const [age,setAge]=useState(25)
    return(
        <UserContext.Provider value={{user,setUser,age,setAge}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider