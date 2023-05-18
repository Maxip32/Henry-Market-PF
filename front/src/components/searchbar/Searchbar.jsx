import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProductsName } from "../../redux/actions";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { useLocation } from "react-router-dom";
import {LogInButton} from "../logs/logIn";
import {LogOutButton} from "../logs/logOut";
import {useAuth0} from "@auth0/auth0-react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [productName, setProductName] = useState("");
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();
 const location = useLocation();


  const handleInput = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(allProductsName(productName));
    setProductName("");
    setSearched(true);
    navigate(`/search?name=${encodeURIComponent(productName)}`);

    
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productName = searchParams.get("name");
    if (productName) {
      setProductName(productName);
      setSearched(true);
      dispatch(allProductsName(productName));
    }
  }, [location.search, dispatch]);
  const {isAuthenticated} = useAuth0();

  return (
    
    <form onSubmit={handleSubmit}>
      <div className={styles.searchBtn}>
    

        <input
          className={styles.search}
          type="search"
          placeholder="Search product..."
          value={productName}
          pattern="[A-Za-z0-9 ]+"
          title="Please enter only letters or numbers."
          onChange={handleInput}
        />
        <button className={styles.searchButton} type="submit">
          <FontAwesomeIcon  style={{ color: "white" }} icon={faSearch} />
        </button>
      {!isAuthenticated && (<><LogInButton/></>)}
            {/*<Profile/>*/}
            <LogOutButton/>
      </div>

      {searched && products && products.id && (
        <div key={products.id}>

          <div className={styles.card}>
            <Link to={`/detail/${products.id}`} style={{ textDecoration: "none" }}>
              <img className={styles.cardimg} src={products.image} alt={products.name} />
              <h2 className={styles.name} style={{ color: "black" }}>
                {products.name}
              </h2>
              <p className={styles.price} style={{ color: "darkred" }}>
               USD {products.price}
              </p>
            </Link>
          </div>
            <p>
      <Link to="/home">
          <button className={styles.btn}>Go Henry Market</button>
        </Link>
        </p>
        </div>


      )}
    </form>
  );
}
