import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogOutButto from '../image/LogOutButton.png'
import "./logs.css"


export const LogOutButton = () => {
    const {logout} = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    }

    return <button onClick={handleLogout} className="logout">Logout</button>
};