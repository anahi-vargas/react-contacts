import { FormPageConainter } from "../StyledComponents";
import LoginForm from "./LoginForm"

const LoginPage = (props) => {
    return (
        <FormPageConainter>
            <LoginForm />
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div>
        </FormPageConainter>
    )
}

export default LoginPage;