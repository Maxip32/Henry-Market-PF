import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {allProducts, clean} from "../../redux/actions";
import SearchBar from "../searchbar/Searchbar";
import {Link} from "react-router-dom";
import styles from "./Dashboard.module.css";
import Popup from "../popup/Popup";
import Pagination from "../pagination/Pagination";
import ShoppingCartImage from '../image/shoppingcart.svg'
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
    return (
        <div>
            <Link to="/admin"></Link>
            

            <div>
                {isAuthenticated === true ?
                    (
                        <>
                            <div className="carrito" onClick={showShoppingCart}>
                                <img src={ShoppingCartImage} alt="shopping-cart" width='25px' height='25px'/>
                                <div style={{
                                    borderRadius: '50%',
                                    height: '25px',
                                    width: '25px',
                                    backgroundColor: 'purple',
                                    display: 'inline-flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: '-40px',
                                    left: '-45px'
                                }}>
                                    <span style={{color: 'white'}}>{shoppingCart.length}</span>
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
                    <button className={styles.input}>-Home-</button>
                </Link>
            </div>

            <div className={styles.buttons}>
                <Link to="/formProducts">
                    <button className={styles.input}>-Create-</button>
                </Link>
                
            </div>

            <div>
            </div>
            {!isAuthenticated && (<><LogInButton/></>)}
            <Profile/>
            <LogOutButton/>
            {/* <Link to="/mailValidate">
        <button className={styles.input}>-Login-</button>
      </Link> */}


            {/* Mostramos la imagen del carrito de compras */}


            <p></p>
            <Popup/>


            {/* Mostramos solo los productos de la página actual */}
            <div className={styles.grid}>
                {currentItems.length > 0 &&
                    currentItems.map((product) => (
                        <div key={product.id}>
                            <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                <div className={styles.card}>
                                    <p>
                                        <div className={styles.cardcolumns}>

                                        <img className={styles.cardimg} src={product.image} alt={product.name}/>
                                        </div>
                                    </p>
                                    <div className={styles.cardinfo}>
                                    <p className={styles.name} style={{color: "black"}}>Name: {product.name}</p>
                                    <p className={styles.description} style={{color: "black"}}>{product.description}</p>
                                    <p className= {styles.name}>Price: USD{product.price}</p>
                                    </div>

                                    <div key={product.id} className={styles.buttonedit}>

                                    <Link to={`/edit-product/${product.id}`}>Editar</Link>
                                    
                                    </div>

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