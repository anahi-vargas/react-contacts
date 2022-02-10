import { FormPageConainter } from '../StyledComponents';
import RegisterForm from './RegisterForm';
import { Link } from "react-router-dom"

const RegisterPage = (props) => {
    return (
        <FormPageConainter>
            <RegisterForm />
            <div>
                <p>Already have an account? <Link to="/login">Login</Link>.</p>
            </div>
        </FormPageConainter>
    )
}

export default RegisterPage;