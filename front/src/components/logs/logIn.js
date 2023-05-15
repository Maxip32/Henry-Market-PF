import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import "./logs.css"

export const LogInButton = () => {
    const {loginWithRedirect} = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/home",
            }
        });
    }

    return <button className='login' onClick={handleLogin}>-Login-</button>
};
