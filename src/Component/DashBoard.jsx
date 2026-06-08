import Profile from "./Profile"
import {useContext} from "react"
import {UserContext} from "../context/UserContext"


const DashBoard=()=>{
    const {age,setAge} = useContext(UserContext)
    return(
        <>
            <h1>DashBoard</h1>
            <h2>age: {age}</h2>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
            <Profile/>
            </>
    )
}
export default DashBoard