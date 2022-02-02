import React, { useState } from 'react';
import { FormButton, FormContainer, FormInput } from "../StyledComponents"

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <FormContainer onSubmit={handleFormSubmit}>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <FormButton type="submit">Login</FormButton>
            </div>
        </FormContainer>
    )
}

export default LoginForm;