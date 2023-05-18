// /* eslint-disable no-unused-vars */

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { filterPrice, orderPrice } from '../../redux/actions';
// import styles from './OrderByProducts.module.css';

// const FilterByPrice = (props) => {
//   const [priceMinimum, setPriceMinimum] = useState('');
//   const [priceMaximum, setPriceMaximum] = useState('');
//   const products = useSelector((state) => state.products);
//   const priceOrder = useSelector((state) => state.priceOrder);
//   const dispatch = useDispatch();

//   const handleFiltrarClick = () => {
//     dispatch(filterPrice(priceMinimum, priceMaximum));
//     setPriceMinimum('');
//     setPriceMaximum('');

//   };
//   const handleOrderMinMax = () => {
//     dispatch(orderPrice('Lowest to highest'));
//   };
//   const handleOrderMaxMin = () => {
//     dispatch(orderPrice('Highest to lowest'));
//   };

//   return (
//     <div>
//       <div className={styles.searchresults}>
//         <Link to="/home">
//           <button className={styles.btn}>Go Henry Market</button>
//         </Link>
//         <div>
//           <label htmlFor="priceMinimum">Min Price:</label>
//           <input
//             type="number"
//             id="priceMinimum"
//             value={priceMinimum}
//             onChange={(e) => setPriceMinimum(e.target.value)}
//             min="0"
//           />
//         </div>
//         <div>
//           <label htmlFor="priceMaximum">Max Price:</label>
//           <input
//             type="number"
//             id="priceMaximum"
//             value={priceMaximum}
//             onChange={(e) => setPriceMaximum(e.target.value)}
//             min="0"
//           />
//         </div>
//         <button className={styles.select} onClick={handleFiltrarClick}>
//         -Detailed price search-
//         </button>
//         <button className={styles.min} onClick={handleOrderMinMax}>-Search by min price-</button>
//         <button className={styles.max} onClick={handleOrderMaxMin}>-Search by max price-</button>
        
//         <div className={styles.grid}>
//           {products.map((product) => (
//             <div key={product.id}>
//               <div className={styles.card}>
//               <Link
//                 to={`/detail/${product.id}`}
//                 style={{ textDecoration: "none" }}
//               >
//                 <img className={styles.cardimg} src={product.image} alt={product.name} />
//                 <p className={styles.name} style={{ color: "black" }}>Name: {product.name}</p>
//                 <p className={styles.description} style={{ color: "black" }}>{product.description}</p>
//                 <p className={styles.price} style={{ color: "black" }}>Price: USD{product.price}</p>
//               </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterByPrice;

/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPrice, orderPrice } from "../../redux/actions";
import styles from "./OrderByProducts.module.css";

const FilterByPrice = () => {
  const [priceMinimum, setPriceMinimum] = useState("");
  const [priceMaximum, setPriceMaximum] = useState("");
  const dispatch = useDispatch();

  const handleFiltrarClick = () => {
    dispatch(filterPrice(priceMinimum, priceMaximum));
    setPriceMinimum("");
    setPriceMaximum("");
  };
  const handleOrderMinMax = () => {
    dispatch(orderPrice("Lowest to highest"));
  };
  const handleOrderMaxMin = () => {
    dispatch(orderPrice("Highest to lowest"));
  };

  return (
    <div>
      <div className={styles.searchresults}>
        <div>
          <label  htmlFor="priceMinimum" className={styles.input}></label>
          <input
            type="number"
            id="priceMinimum"
            placeholder="Set min price..."
            value={priceMinimum}
            onChange={(e) => setPriceMinimum(e.target.value)}
            min="0"
          />
        </div>
        <div>
          <label htmlFor="priceMaximum" ></label>
          <input
            type="number"
            id="priceMaximum"
            placeholder="Set max price..."
            value={priceMaximum}
            onChange={(e) => setPriceMaximum(e.target.value)}
            min="0"
          />
        </div>
        <button className={styles.select} onClick={handleFiltrarClick}>
          Detailed price search
        </button>
        <button className={styles.min} onClick={handleOrderMinMax}>
          Search by min price
        </button>
        <button className={styles.max} onClick={handleOrderMaxMin}>
          Search by max price
        </button>
      
      </div>
    </div>
  );
};

export default FilterByPrice;
        
