/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/*import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/actions";
import Search from "../searchbar/Searchbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import CategoryFilter from "../categoryFilter/CategoryFilter";

export default function Home() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = (searchResults.length > 0
    ? searchResults
    : product).slice(indexOfFirstItem, indexOfLastItem);//slice: devuelve un nuevo array que contiene los elementos extraídos
  const totalPages = Math.ceil((searchResults.length > 0 ? searchResults : product).length / itemsPerPage
  );



  function handlePageClick(event, pageNumber) {
    event.preventDefault();
    setCurrentPage(pageNumber);
  }

  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={(e) => handlePageClick(e, i)}
          className={`${styles.select} ${
            currentPage === i ? styles.active : ""
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={styles.product}>
      <Link to="/formProducts">
        <button>Create Product</button>
      </Link>
      <Link to="/mailValidate">
        <button>Login</button>
      </Link>
      <h1>Welcome to Home</h1>
      <button onClick={handleRefresh}>All Products</button>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={handlePrevClick}
          className={styles.landingButton}
        >
          Prev
        </button>
        {renderPageNumbers()}
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextClick}
          className={styles.landingButton}
        >
          Next
        </button>
      </div>
      <div className={styles.search}>
        <Search setCurrentPage={setCurrentPage} />
        <CategoryFilter setCurrentPage={setCurrentPage} />

        {(searchResults.length > 0 ? searchResults : currentItems).map((product) => (
          <div key={product.id} className={styles.card}>
            <Link
              to={`/detail/:id ${product.id}`}
              style={{ textDecoration: "none" }}
            >
             

            <img src={product.image} alt={product.name} />
            <p className={styles.cardInfo}>Name: {product.name}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          
          </Link>
        </div>
      ))}
       
      </div>
    </div>
  );
}
*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/actions";
import SearchBar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import loading from "../image/Loading_icon.gif"

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  
  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(allProducts());
  };



  const refreshPage = () => {
    window.location.reload();
  }




  return (
    <div className={styles.product}>
         <button onClick={refreshPage}>Refresh</button>
      <Link to="/formProducts">
        <button>Create Product</button>
      </Link>
      <Link to="/mailValidate">
        <button>Login</button>
      </Link>
      <SearchBar />
      <CategoryFilter />

  
      <h1>Welcome to Home</h1>
   
  
      {products.length > 0 &&
        products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Link
              to={`/detail/${product.id}`}
              style={{ textDecoration: "none" }}

            >
              <img className="loading" src={loading} alt=""></img>
              <img src={product.image} alt={product.name} />
              <p className={styles.cardInfo}>Name: {product.name}</p>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </div>
        ))}
    </div>
  );
        }  