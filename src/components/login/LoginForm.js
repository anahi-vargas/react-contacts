import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FormButton, FormContainer, FormInput } from "../StyledComponents"

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { logIn } = useContext(AuthContext)

    const handleFormSubmit = (event) => {
        event.preventDefault();
        logIn(username, password)
    }

    return (
        <FormContainer>
            <div>
                <FormInput 
                    aria-label='username'
                    placeholder="Username"  
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <FormInput 
                    aria-label='password'
                    type="password" 
                    placeholder="Password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <FormButton onClick={handleFormSubmit}>Login</FormButton>
            </div>
        </FormContainer>
    )
}

export default LoginForm;