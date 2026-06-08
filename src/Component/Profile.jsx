import {useContext} from "react"
import {UserContext} from "../context/UserContext"
const Profile=()=>{
    const {user,setUser}=useContext(UserContext)
    return(
        <>
            <h1>Profile</h1>
            <button onClick={() => setUser("John Doe")}>Change User</button>
        </>
    )
}
export default Profile