import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteId, getUser} from '../../redux/actions';
import {useAuth0} from "@auth0/auth0-react";
import {useState} from 'react';


function FavoritesList() {
    const favorites = useSelector(state => state.favorite);
    const dispatch = useDispatch();
    const {getAccessTokenSilently} = useAuth0()
    const [userLogId, setUserLogId] = useState({});
    const userLog = useSelector((state) => state.users);
    const {user} = useAuth0()

    useEffect(() => {
        console.log("userlog:!!!!!!!!!!!!" + JSON.stringify(userLog))
        setUserLogId(() => userLog?.find(us => {
            console.log("us:?????????" + us)
            return us?.mail === user.email
        }))
    }, [dispatch]);

    useEffect(() => {
        console.log(`userLogId: ${userLogId.id}`)
        dispatch(getFavoriteId(userLogId?.id))
    }, userLogId)
    return (
        <div>{JSON.stringify(userLogId)}

            <h2>My Favorites</h2>
            {favorites.length > 0 &&
                favorites.map((product) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <img src={product.image} alt={product.name}/>
                    </div>
                ))}
        </div>
    );
}

export default FavoritesList;
