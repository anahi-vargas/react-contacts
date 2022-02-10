import { FormPageConainter } from "../StyledComponents";
import LoginForm from "./LoginForm"
import { Link } from "react-router-dom"

const LoginPage = (props) => {
    
    return (
        <FormPageConainter>
            <LoginForm />
            <div>
                <p>Don't have an account? <Link to="/register">Register</Link>.</p>
            </div>
        </FormPageConainter>
    )
}

export default LoginPage;