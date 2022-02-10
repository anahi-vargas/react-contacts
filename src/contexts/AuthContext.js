import React, { createContext, useState } from "react"

const AuthContext = createContext({})

const AuthProvider = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)

    const logIn = (username, password) => {
        const validUsername = "Anahi"
        const validPassword = "1234"

        if (username === validUsername && password === validPassword) {
            setLoggedIn(true)
        }
    }

    const logOut = () => {
        setLoggedIn(false)
    }

    return(
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export { AuthContext, AuthProvider };