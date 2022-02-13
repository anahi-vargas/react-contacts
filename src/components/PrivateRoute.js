import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    const { isLoggedIn } = useContext(AuthContext)
    console.log(isLoggedIn)
    
    return isLoggedIn ? props.children : <Navigate to="/login" /> 
}

export default PrivateRoute;