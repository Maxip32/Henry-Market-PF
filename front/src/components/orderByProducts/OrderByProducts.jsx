/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterPrice, orderPrice } from '../../redux/actions';
import styles from './OrderByProducts.module.css';

const FilterByPrice = (props) => {
  const [priceMinimum, setPriceMinimum] = useState('');
  const [priceMaximum, setPriceMaximum] = useState('');
  const products = useSelector((state) => state.products);
  const priceOrder = useSelector((state) => state.priceOrder);
  const dispatch = useDispatch();

  const handleFiltrarClick = () => {
    dispatch(filterPrice(priceMinimum, priceMaximum));
  };
  const handleOrderMinMax = () => {
    dispatch(orderPrice('Lowest to highest'));
  };
  const handleOrderMaxMin = () => {
    dispatch(orderPrice('Highest to lowest'));
  };

  return (
    <div>
      <div className={styles.searchresults}>
        <Link to="/home">
          <button>Go Henry Market</button>
        </Link>
        <div>
          <label htmlFor="priceMinimum">Min Price:</label>
          <input
            type="number"
            id="priceMinimum"
            value={priceMinimum}
            onChange={(e) => setPriceMinimum(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="priceMaximum">Max Price:</label>
          <input
            type="number"
            id="priceMaximum"
            value={priceMaximum}
            onChange={(e) => setPriceMaximum(e.target.value)}
          />
        </div>
        <button className={styles.select} onClick={handleFiltrarClick}>
          Search price
        </button>
        <button onClick={handleOrderMinMax}>Min</button>
        <button onClick={handleOrderMaxMin}>Max</button>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link
                to={`/detail/${product.id}`}
                style={{ color: "black" }}
              >
                <img src={product.image} alt={product.name} />
                <p>Name: {product.name}</p>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
