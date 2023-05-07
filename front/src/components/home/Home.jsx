/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts, clean } from "../../redux/actions";
import SearchBar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Popup from "../popup/Popup";
import Pagination from "../pagination/Pagination";


export default function Home() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  if (!Array.isArray(products)) {
    // handle error here, e.g. set products to an empty array
    products = [];
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    dispatch(allProducts());
    dispatch(clean());
  }, [dispatch]);

  const refreshPage = () => {
    window.location.reload();
    dispatch(allProducts());
    dispatch(clean());
  };

  // Lógica para calcular el índice de inicio y fin de la página actual
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);

  // Lógica para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Link to="/home"></Link>  
    
<div>
      <button  className={styles.input}onClick={refreshPage}>Refresh</button>
      </div>

<div className={styles.buttons}>
      <Link to="/formProducts">
        <button className={styles.input}>-Create-</button>
      </Link>
      </div>
      
      <div>
      <Link to="/mailValidate">
        <button className={styles.input}>-Login-</button>
      </Link>
      </div>
      <Popup />
      <SearchBar />
     

      <p></p>

     
      {/* Mostramos solo los productos de la página actual */}
      <div className={styles.grid}>
      {currentItems.length > 0 &&
        currentItems.map((product) => (
          <div key={product.id} className={styles.card}>
          <Link to={`/detail/ ${product.id}`} style={{ textDecoration: "none" }}>
            <p>
              <img src={product.image} alt={product.name} />
            </p>
            <p className={styles.cardInfo} style={{ color: "black" }}>Name: {product.name}</p>
            <p style={{ color: "black" }}>{product.description}</p>
            <p style={{ color: "black" }}>Price: USD{product.price}</p>
          </Link>
        </div>
        
        ))}
      
      {/* Agregamos el componente Pagination */}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        onPageChange={handlePageChange}
      />
    </div>
    </div>
  );
}

