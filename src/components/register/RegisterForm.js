import React, { useState } from 'react';
import { FormButton, FormContainer, FormInput } from '../StyledComponents';

function RegisterForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();   
    }

    return (
        <FormContainer onSubmit={handleFormSubmit}>
            <div>
                <FormInput 
                    aria-label="username"
                    type="text" 
                    placeholder="Username"  
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <FormInput 
                    aria-label="password"
                    type="password" 
                    placeholder="Password"
                    autoComplete="on"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <FormButton type="submit">Register</FormButton>
            </div>
        </FormContainer>
    )

}

export default RegisterForm;