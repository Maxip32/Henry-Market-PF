/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allProducts, clean, getUser} from "../../redux/actions";
import SearchBar from "../searchbar/Searchbar";
import {Link} from "react-router-dom";
import styles from "./Home.module.css";

import Pagination from "../pagination/Pagination";
import Homeimg from '../image/homeimg.jpg'
import ShoppingCartImage from '../image/shoppingcart.png'

import ModalShoppingCart from "../modalShoppingCart/ModalShoppingCart";
import "./Home.module.css"
import {Profile} from "../logs/profile";
import {useAuth0} from "@auth0/auth0-react";
import Favorite from "../favorites/Favorites"
import { LogInButton } from "../logs/logIn";


export default function Home() {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products);
    // products= products.filter( p=>{
    //     return p.deleted !== true;
        
        
        
    // })
    if (!Array.isArray(products)) {
        // handle error here, e.g. set products to an empty array
        products = [];

    }

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        dispatch(allProducts(true));
        dispatch(clean());
    }, [dispatch]);

    // useEffect(() => {
    // products= products.filter( p=>{
    //    return p.deleted !== true;
        
        
        
    // })
       
    // }, [products]);
    
    // const refreshPage = () => {
    //     window.location.reload();
    //     dispatch(allProducts());
    //     dispatch(clean());
    // };
    const {isAuthenticated, user} = useAuth0();
    console.log(user)
   


    // Lógica para calcular el índice de inicio y fin de la página actual
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = products.slice(firstIndex, lastIndex);

    // Lógica para cambiar de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // lógica para mostrar el carrito de compras
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

   

    // const {getAccessTokenSilently} = useAuth0()

    useEffect(() => {
        const token = async () => {
            // const accessToken = await getAccessTokenSilently();
            dispatch(getUser());
        }
        token().catch(err => console.log(err))
    }, [dispatch]);

    return (
        <div>
          <Link to="/home"></Link>
          {/*<Link to="/favorite">
              <button className={styles.input}>-Favorites-</button>
          </Link>*/}
      
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
      
            <SearchBar />
            <LogInButton/>
          </div>
          {/* <p>
            <Link to="/category">
            <button className={styles.category}>Category</button>

            </Link>
          </p>
      
          {isAuthenticated && (
            <div className={styles.buttons}>
              <Link to="/admin">
                <button className={styles.input}>Dashboard</button>
              </Link>
            </div>
          )} */}
      
          <img
            className={styles.homeimg}
            src={Homeimg}
            alt="shopping-cart"
            width="1000px"
            height="550px"
          />
      
          {/* Mostramos la imagen del carrito de compras */}
      
         
          <p className={styles.homeimg}></p>
          {/* <Popup/> */}
      
          {/* Mostramos solo los productos de la página actual */}
          <div className={styles.grid}>
            {currentItems.length > 0 &&
              currentItems.map((product) => (
                <div key={product.id} className={styles.card}>
                  <Link to={`/detail/${product.id}`} style={{ textDecoration: "none" }}>
                    <div>
                      <p>
                        <img
                          className={styles.cardimg}
                          src={product.image}
                          alt={product.name}
                        />
                      </p>
                      <p className={styles.name} style={{ color: "black" }}>
                        {product.name}
                      </p>
                      <p className={styles.price} style={{ color: "darkRed" }}>
                        USD {product.price}
                      </p>
                    </div>
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
