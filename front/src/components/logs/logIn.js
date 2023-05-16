import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./logs.css"
import { useDispatch } from "react-redux"
import { getUser } from '../../redux/actions';

export const LogInButton = () => {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        console.log(user, " este es el user");
        
        await loginWithRedirect({
            appState: {
                returnTo: "/home",
            },
            response_type: "code id_token" // Utilizar el flujo de código híbrido
        })
        await isAuthenticated &&
            dispatch(getUser())
        
    }

    return <button className='login' onClick={handleLogin}>-Login-</button>
};

