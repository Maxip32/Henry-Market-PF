/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { allProductsId, addSToShoppingCart, toggleFavorite } from "../../redux/actions";
import styles from "./ProductsDetail.module.css";
import ShoppingCartImage from '../image/shoppingcart.svg'
import ModalShoppingCart from "../modalShoppingCart/ModalShoppingCart";
import SearchBar from "../searchbar/Searchbar";
import RatingStart from "../ratingStart/RatingStart";

import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


const image = "";

const ProductsDetail = () => {   
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProduct = useSelector((state) => state.products);
  const [selectedDetail, setSelectedDetail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSelect = (event) => {
    setSelectedDetail(event.target.value);
  };

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedDetail("");
  };

  useEffect(() => {
    dispatch(allProductsId(id));
  }, [dispatch, id]);

  const [isOpen, setIsOpen] = useState(false)
  const openModal = () =>{setIsOpen(true) ; document.body.style.overflow = 'hidden';}
  const closeModal = () =>{setIsOpen(false); document.body.style.overflow = 'auto';}
  const shoppingCart = useSelector((state) => state.shoppingCart);

  function showShoppingCart (){
    openModal()
  }

  useEffect(()=>{
    document.body.style.overflow = 'auto'
  },[])

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(allProduct.id));
    const heartBtn = document.querySelector(`.${styles.heartBtn}`);
    heartBtn.classList.toggle(styles.marked);
  };
  
  /*const handleToggleFavorite = (productId) => {
    dispatch(toggleFavorite(productId));
  };*/
  
  return (
    <div >
       <div className="carrito" onClick={showShoppingCart}>
        <img src={ShoppingCartImage} alt="shopping-cart" width='25px' height='25px' />
        <div style={{borderRadius:'50%', height:'25px', width:'25px', backgroundColor:'purple', display:'inline-flex', 
                      justifyContent:'center', alignItems:'center', top:'-40px', left:'-45px'}}>
          <span  style={{color:'white'}} >{shoppingCart.length}</span>
        </div>
      </div>
      {<ModalShoppingCart isOpen={isOpen} closeModal={closeModal} />}
      <SearchBar />
      
       <p>
      <Link to="/home">
        <button className={styles.btn1}>Go Henry Market</button>
      </Link>
     </p>
     <div className={styles.card} >
    

        {allProduct.length === 0 ? (
          <div></div>
        ) : (
          <>
           
           <div className={styles.imageContainer}>
  <img
    className={styles.cardimg}
    src ={allProduct.image ? allProduct.image : image}
    alt={`img-${allProduct.name}`}
  />
 <button className={`${styles.heartBtn} ${allProduct.isFavorite ? styles.marked : ''}`} onClick={handleToggleFavorite}>
  <FontAwesomeIcon icon={allProduct.isFavorite ? faBookmark : faHeartRegular} />
</button>

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
                    <b>Description: </b> {allProduct.description}
                    <br />
                    <b>Price: </b> {allProduct.price} USD
                     <br />
                    <b>Category: </b> {allProduct.category}
                  </p>
                )}
                <p>
                 <RatingStart productId={allProduct.id} />
                 </p>
              </div>

             
             
              
             
              <button className={styles.btn}>Buy</button>
              <button className={styles.btn} onClick={() => dispatch(addSToShoppingCart(allProduct))}>Add to cart</button>

             
            </section>
          </>
        )}
      </div>
    </div>
  );
}
export default ProductsDetail;