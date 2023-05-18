import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allProducts, clean, deleteProduct} from "../../redux/actions";
import SearchBar from "../searchbar/Searchbar";
import {Link} from "react-router-dom";
import styles from "./Dashboard.module.css";
import Popup from "../popup/Popup";
import Pagination from "../pagination/Pagination";
import ShoppingCartImage from '../image/shoppingcart.png'
import ModalShoppingCart from "../modalShoppingCart/ModalShoppingCart";
import {LogInButton} from "../logs/logIn";
import {LogOutButton} from "../logs/logOut";
import {Profile} from "../logs/profile";
import {useAuth0} from "@auth0/auth0-react";



export default function Dashboard() {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products);
    if (!Array.isArray(products)) {
        // handle error here, e.g. set products to an empty array
        products = [];
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useEffect(() => {
        dispatch(allProducts(false));
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

    // lógica para mostrar el carrito de compras
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }
    const shoppingCart = useSelector((state) => state.shoppingCart);

    function showShoppingCart() {
        openModal()
    }

    useEffect(() => {
        document.body.style.overflow = 'auto'
    }, [])

    const {isAuthenticated} = useAuth0();
    // const handleDelete = (productId) => {
    //     dispatch(deleteProduct(productId));
    //   };
    return (
        <div>
            <Link to="/admin"></Link>
            

            <div>
                {isAuthenticated === true ?
                    (
                        <>
                            <div className="carrito" onClick={showShoppingCart}>
                                <img className={styles.cart} src={ShoppingCartImage} alt="shopping-cart" width='25px' height='25px'/>
                                <div style={{
                                        borderRadius: "50%",
                                        height: "20px",
                                        width: "20px",
                                        backgroundColor: "yellow",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: "-30px",
                                        left: "-50px",
                                }}>
                                    <span style={{color: 'grey'}}>{shoppingCart.length}</span>
                                </div>
                            </div>
                        </>
                    ) : null
                }

                {/* Mostramos el modal del carrito de compras */}
                {<ModalShoppingCart isOpen={isOpen} closeModal={closeModal}/>}


                <SearchBar/>
                <button className={styles.input} onClick={refreshPage}>Refresh</button>
            </div>
            <div className={styles.buttons}>
                <Link to="/home">
                    <button className={styles.input}> Home </button>
                </Link>
            </div>

            <div className={styles.buttons}>
                <Link to="/formProducts">
                    <button className={styles.input}>Create</button>
                </Link>
                
            </div>
            <p>
            <Link to="/category">
            <button className={styles.category}>Category</button>

            </Link>
          </p>
            <div>
            </div>
            <div className={styles.account}>
            {!isAuthenticated && (<><LogInButton/></>)}
            <Profile/>
            {/* <LogOutButton/> */}
            {/* <Link to="/mailValidate">
        <button className={styles.input}>-Login-</button>
      </Link> */}
      </div>


            {/* Mostramos la imagen del carrito de compras */}


            <p></p>


            {/* Mostramos solo los productos de la página actual */}
            <div className={styles.grid}>
                {currentItems.length > 0 &&
                    currentItems.map((product) => (
                        <div key={product.id}>
                            
                                <div className={styles.card}>
                                    <p>
                                        <div className={styles.cardcolumns}>

                                        <img className={styles.cardimg} src={product.image} alt={product.name}/>
                                        </div>
                                    </p>
                                    <div className={styles.cardinfo}>
                                    <p className={styles.name} style={{color: "black"}}>{product.name}</p>
                                    <p className={styles.description} style={{color: "black"}}>{product.description}</p>
                                    <p className= {styles.name} style={{color: "darkred"}}>USD {product.price}</p>
                                    </div>

                                    <div key={product.id} className={styles.buttonedit}>
                                    <Link   to={`/edit-product/${product.id}`}> <button className={styles.edit}>Edit</button></Link>
                                    
                                    </div>

                                </div>
                                    {/* <button onClick={() => handleDelete(product.id)}>Borrar</button> */}

                            
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
