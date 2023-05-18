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
import axios from "axios";

const image = "";

const ProductsDetail = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const allProduct = useSelector((state) => state.products);
    const userLog = useSelector((state) => state.users);
    const [userLogId, setUserLogId] = useState("");
    const [selectedDetail, setSelectedDetail] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const {user, isLoading} = useAuth0()

    const handleSelect = (event) => {
        setSelectedDetail(event.target.value);
    };

    const handleSelectCategory = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedDetail("");
    };

    const handleSelectColor = (event) => {
        setSelectedColor(event.target.value);
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
        if (!isLoading && userLog && user !== undefined) {
            setUserLogId(userLog?.find(us => us.mail === user.email))
        }
        /*if (!isLoading) {
            setUserLogId(() => userLog?.find(us => {
                return us.mail === user.email
            }))
        }*/
    }, [dispatch, userLog, isLoading, user]);

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

    // useEffect para comentarios
    useEffect(() => {
        dispatch(allProductsId(id));

        // Cargar comentarios desde localStorage
        const savedComments = localStorage.getItem("comments");
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, [dispatch, id]);

    // codigo de comentario
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const [localEstrellitas, setLocalEstrellitas] = useState(0)
    const handleEstrellitas = (value) => {
        setLocalEstrellitas(value)
    }

    const handleSubmitComment = async (event) => {
        event.preventDefault();

        console.log(`localEstrellitas: ${localEstrellitas}`)

        if (comment !== "") {
            const newComment = {
                productId: id,
                name: allProduct.name,
                text: comment,
                date: new Date().toISOString(),
            };
            setComments([...comments, newComment]);
            setComment("");

            // Guardar comentarios en localStorage
            const savedComments =
                JSON.parse(localStorage.getItem("comments")) || [];
            localStorage.setItem(
                "comments",
                JSON.stringify([...savedComments, newComment])
            );

            // const dataResponse = await axios.post("review", {
            //     title: allProduct.name,
            //     body: comment,
            //     rating: localEstrellitas,
            //     productId: id
            // })

            // console.log(`dataResponse: ${JSON.stringify(dataResponse)}`)
           
            await axios.post("review", {
                title: allProduct.name,
                body: comment,
                rating: localEstrellitas,
                productId: id,
                email: user?.email
            })

        }
    };

    // Filtrar los comentarios para mostrar solo los del producto actual
    // const productComments = comments.filter((comment) => comment.productId === id);
    const productComments = comments.filter((comment) => comment.name === allProduct.name)

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
                        {/*{allProduct.id !== undefined ? userLogId !== undefined ? (*/}
                        {/*    <Favorites productId={allProduct.id} userId={userLogId?.id}/>*/}
                        {/*) : null : null}*/}
                        {!isLoading ? user !== undefined ? userLogId !== undefined ? (
                            <Favorites productId={allProduct.id} userId={userLogId.id}/>
                        ) : null : null : null}
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
                                {"Dress" && allProduct.category === "Dress" ? (
                  <>
                  <p className={styles.parrafo}>
                    <select
                      name="Size"
                      id="Size"
                      value={selectedDetail}
                      onChange={handleSelect}
                    >
                      <option disabled selected>Size</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option value="XXXL">XXXL</option>
                    </select>
                    <select
                      name="Color"
                      id="Color"
                      value={selectedColor}
                      onChange={handleSelectColor}
                    >
                      <option disabled selected>Colour</option>
                      <option value="White">White</option>
                      <option value="Black">Black</option>
                      <option value="Grey">Grey</option>
                      <option value="Yellow">Yellow</option>
                    </select>
                    <p >
                      <b>Description: </b> {allProduct.description}
                      <br />
                      <b>Price: </b> {allProduct.price} USD
                      <br />
                      <b>Category: </b> {allProduct.category}
                    </p>
                    </p>
                  </>
                                ) : (
                                    <p>
                                        <b className={styles.desc}>  Description:</b>{allProduct.description}
                                        <br/>
                                        <b className={styles.price}>Price:  {allProduct.price} USD </b>
                                        <br/>
                                        <b>Category: </b> {allProduct.category}
                                        <br/>
                                        <b>Stock: </b> {allProduct.stock}
                                    </p>
                                )}
                                <p>
                                    <RatingStart productId={allProduct.id} handleEstrellitas={handleEstrellitas}/>
                                </p>
                            </div>

                           
                            <button className={styles.btn} onClick={() => dispatch(addSToShoppingCart(allProduct))}>Add
                                to cart
                            </button>

                            {/* Nueva sección de código para agregar comentarios */}
                            <section className={styles.questions}>
                                <h2 className={styles.quest} style={{ fontSize: "20px" }}>Add a comment or question:</h2>
                                <form onSubmit={handleSubmitComment} style={{  display: "flex", flexDirection: "column", maxWidth: "300px" }}>
  <label htmlFor="comment" style={{ marginBottom: "10px" }}>Comment:</label>
  <textarea
    id="comment"
    value={comment}
    onChange={handleCommentChange}
    style={{
      marginBottom: "10px",
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      resize: "vertical"
    }}
  ></textarea>
  <button
    type="submit"
    style={{
      backgroundColor: "#4CAF50",
      marginBottom: "10px",
      color: "white",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    }}
  >
    Submit
  </button>
</form>
                                {productComments.length > 0 && (
                                    <div style={{ marginTop: "20px" }}>
                                    <h3 style={{ fontSize: "20px" }}>Comments and questions:</h3>
                                    {productComments.map((comment, index) => (
                                      <div key={comment.date} style={{ marginBottom: "10px" }}>
                                        <p style={{ color: "grey", fontSize: "20px" }}>{comment.text}</p>
                                        <p style={{ fontSize: "14px" }}>{comment.date}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </section>


                        </section>
                    </>
                )}
            </div>
        </div>
    );
}
export default ProductsDetail;