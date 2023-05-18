import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteId, getUser } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";

function FavoritesList() {
  const favorites = useSelector(state => state.favorite.products);
  const dispatch = useDispatch();
  const { getAccessTokenSilently, user } = useAuth0();
  const [userLogId, setUserLogId] = useState("");
  const userLog = useSelector(state => state.users);

  useEffect(() => {
    const fetchUserLogId = async () => {
      const accessToken = await getAccessTokenSilently();
      dispatch(getUser(accessToken));
    };

    fetchUserLogId().catch(err => console.log(err));
  }, [dispatch, getAccessTokenSilently]);

  useEffect(() => {
    setUserLogId(userLog.find(us => us.mail === user.email)?.id);
  }, [userLog, user]);

  useEffect(() => {
    if (userLogId) {
      dispatch(getFavoriteId(userLogId));
    }
  }, [dispatch, userLogId]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 &&
        favorites.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
    </div>
  );
}

export default FavoritesList;