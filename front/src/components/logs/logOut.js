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

    return <img onClick={handleLogout} className="logout" src={LogOutButto} alt="LoginInButton"  width='25px' height='25px' />
};