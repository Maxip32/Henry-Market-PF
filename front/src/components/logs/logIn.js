import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./logs.css"
export const LogInButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className='login' onClick={()=>loginWithRedirect()}>-Login-</button>
};
