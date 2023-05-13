import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/actions';


function Rating({ productId }) {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const handleRatingClick = (value) => {
    if (value === rating) {
      // Si el usuario hace clic en el corazon, desmarcalo
      setRating(0);
    } else {
      // Si el usuario hace clic en el corazon,lo marca
      setRating(value);
      dispatch(toggleFavorite(productId, value));
    }
  };

  return (
    <div>
      {[1].map((value) => {
        const filled = value <= rating;
        return (
          <span
            key={value}
            onClick={() => handleRatingClick(value)}
            style={{
              color: filled ? 'orange' : 'grey',
              cursor: 'pointer',
              fontSize: '2rem',
              marginRight: '5px'
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