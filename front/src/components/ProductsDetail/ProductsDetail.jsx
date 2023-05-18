/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-self-compare */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {allProductsId, addSToShoppingCart, toggleFavorite, getUser} from "../../redux/actions";
import styles from "./ProductsDetail.module.css";
import ShoppingCartImage from '../image/shoppingcart.png'
import ModalShoppingCart from "../modalShoppingCart/ModalShoppingCart";
import SearchBar from "../searchbar/Searchbar";
import RatingStart from "../ratingStart/RatingStart";
import Favorites from "../favorites/Favorites"
import {useAuth0} from "@auth0/auth0-react";
import logger from "redux-logger";

const image = "";

const ProductsDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const allProduct = useSelector((state) => state.products);
    const userLog = useSelector((state) => state.users);
    const [userLogId, setUserLogId] = useState("");

    const [selectedDetail, setSelectedDetail] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const {user} = useAuth0()

    const handleSelect = (event) => {
        setSelectedDetail(event.target.value);
    };

    const handleSelectCategory = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedDetail("");
    };

    const {getAccessTokenSilently} = useAuth0()
    useEffect(() => {
        const token = async () => {
            const accessToken = await getAccessTokenSilently();
            dispatch(allProductsId({id, accessToken}));
        }
        token().catch(err => console.log(err))
    }, [dispatch, id, getAccessTokenSilently]);

    useEffect(() => {
        const token = async () => {
            const accessToken = await getAccessTokenSilently();
            dispatch(getUser({accessToken}));

            setUserLogId(() => userLog.find(user => {
                return user.mail === user.mail
            }))
        }
        token().catch(err => console.log(err))
    }, [dispatch, getAccessTokenSilently]);

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

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite(allProduct.id));
    };

    return (
        <div>
            <div className="carrito" onClick={showShoppingCart}>
                <img className={styles.cart} src={ShoppingCartImage} alt="shopping-cart" width='25px' height='25px'/>
                <div style={{
                    borderRadius: '50%',
                    height: '20px',
                    width: '20px',
                    backgroundColor: 'yellow',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '-40px',
                    left: '-45px'
                }}>
                    <span style={{color: 'grey'}}>{shoppingCart.length}</span>
                </div>
            </div>
            {<ModalShoppingCart isOpen={isOpen} closeModal={closeModal}/>}
            <SearchBar/>

            <p>
                <Link to="/home">
                    <button className={styles.btn1}>Go Henry Market</button>
                </Link>
            </p>
            <div className={styles.card_container}>


                {allProduct.length === 0 ? (
                    <div></div>
                ) : (
                    <>
                        {allProduct.id !== undefined ? userLogId !== undefined ? (
                            <Favorites productId={allProduct.id} userId={userLogId.id}/>
                        ) : null : null}
                        <div className={styles.card}>
                           

                            <img
                                className={styles.card_img}
                                src={allProduct.image ? allProduct.image : image}
                                alt={`img-${allProduct.name}`}
                            />


                        </div>

                        <section>
                            <div className={styles.productInfo}>
                                <h1 className={styles.productName}>{allProduct.name}</h1>
                                {selectedCategory === "Dress" && allProduct.products ? (
                                    <p>
                                        <b>Size: </b> {allProduct.products}
                                    </p>
                                ) : (
                                    <p>
                                        <b className={styles.desc}>Description: </b> {allProduct.description}
                                        <br/>
                                        <b className={styles.price}>Price:  {allProduct.price} USD </b>
                                        <br/>
                                        <b>Category: </b> {allProduct.category}
                                    </p>
                                )}
                                <p>
                                    <RatingStart productId={allProduct.id}/>
                                </p>
                            </div>

                           
                            <button className={styles.btn} onClick={() => dispatch(addSToShoppingCart(allProduct))}>Add
                                to cart
                            </button>
                        </section>
                    </>
                )}
            </div>
        </div>
    );
}
export default ProductsDetail;