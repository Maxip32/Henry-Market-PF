import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/actions';

function Rating({ productId, userId }) {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const handleRatingClick = (value) => {
    if (value === rating) {
      // Si el usuario hace clic en el corazón, desmárcalo
      setRating(0);
    } else {
      // Si el usuario hace clic en el corazón, márcalo
      setRating(value);
      dispatch(toggleFavorite({ productId, userId }));
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {[1].map((value) => {
        const filled = value <= rating;
        return (
          <span
            key={value}
            onClick={() => handleRatingClick(value)}
            style={{
              color: filled ? 'red' : 'grey',
              cursor: 'pointer',
              fontSize: '2rem',
              position: 'absolute',
              top: '9px', // Mueve el corazón hacia arriba
              left: '111px', // Mueve el corazón hacia la derecha
              zIndex: 1,
            }}
          >
         ♥
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
