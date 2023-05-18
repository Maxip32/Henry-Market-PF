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
import ShoppingCartImage from '../image/shoppingcart.png'
import ModalShoppingCart from "../modalShoppingCart/ModalShoppingCart";

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
  const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };
    const shoppingCart = useSelector((state) => state.shoppingCart);

   

    function showShoppingCart() {
        openModal();
    }

    useEffect(() => {
        document.body.style.overflow = "auto";
    }, []);

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
        <div>
        {isAuthenticated === true ? (
              <>
                <div className="carrito" onClick={showShoppingCart}>
                  <img
                    className={styles.cart}
                    src={ShoppingCartImage}
                    alt="shopping-cart"
                    width="25px"
                    height="25px"
                  />
                  <div
                    style={{
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                      backgroundColor: "yellow",
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      top: "-30px",
                      left: "-50px",
                    }}
                  >
                    <span style={{ color: "grey" }}>{shoppingCart.length}</span>
                  </div>
                </div>
              </>
            ) : null}
      
            {/* Mostramos el modal del carrito de compras */}
            {<ModalShoppingCart isOpen={isOpen} closeModal={closeModal} />}
            </div>
      {!isAuthenticated && (<><LogInButton/></>)}
            {/*<Profile/>*/}
            <LogOutButton/>
      </div>

      <p>
            <Link to="/category">
            <button className={styles.category}>Category</button>

            </Link>
          </p>
          {isAuthenticated && (
            <div className={styles.buttons}>
              <Link to="/admin">
                <button className={styles.inputt}>Dashboard</button>
              </Link>
            </div>
          )}

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
