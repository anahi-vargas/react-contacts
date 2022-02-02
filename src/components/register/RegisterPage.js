import { FormPageConainter } from '../StyledComponents';
import RegisterForm from './RegisterForm';

const RegisterPage = (props) => {
    return (
        <FormPageConainter>
            <RegisterForm />
            <div>
                <p>Already have an account? <a href="/login">Login</a>.</p>
            </div>
        </FormPageConainter>
    )
}

export default RegisterPage;