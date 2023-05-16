import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div>Loading...</div>
    }else
    return (
        isAuthenticated && (
            <div className='user' >
            <img className='imguser' src={user.picture} alt={user.name} height={"35px"} width={"35px"} />
            <h2 className='letrasuser'>{user.name}</h2>
            {/* <p>Email: {user.email}</p> */}
            </div>
            
        )
    )
};