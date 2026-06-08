import {useContext} from "react"
import {UserContext} from "../context/UserContext"
const Navbar=()=>{
    const {user}=useContext(UserContext)
    return(
        <>
            <h1>NavBar</h1>
            <h1>user:{user}</h1>
            </>
            
    )
}
export default Navbar