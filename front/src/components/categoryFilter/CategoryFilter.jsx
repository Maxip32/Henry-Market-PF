/* eslint-disable no-unused-vars */
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategory} from "../../redux/actions";
import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./categoryFilter.module.css";
import FilterByPrice from "../orderByProducts/OrderByProducts";
import ShoppingCartImage from '../image/shoppingcart.png'
import ModalShoppingCart from "../modalShoppingCart/ModalShoppingCart";
import {useEffect} from "react";
import SearchBar from "../searchbar/Searchbar";
import {useAuth0} from "@auth0/auth0-react";



const CategoryFilter = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category);
    const [selectedCategory, setSelectedCategory] = useState("All Products");

    const {getAccessTokenSilently} = useAuth0()
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        dispatch(getProductsByCategory(category, true));
        
    };

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

            <div className={styles.product}>
                <div className={styles.searchresults}>
                    <Link to="/home">
                        <button className={styles.btn}>Go Henry Market</button>
                    </Link>
                    <p></p>
                    <div className={styles.containerfilter}>
                    <div >
                        <label htmlFor="category-filter"></label>
                        <select
                            className={styles.btn1}
                            id="category-filter"
                            onChange={handleCategoryChange}
                            value={selectedCategory}
                        >
                            <option value="All Products">Category</option>
                            <option value="Home">Home</option>
                            <option value="Dress">Dress</option>
                            <option value="Technology">Technology</option>
                            <option value="Bookshop">Bookshop</option>
                        </select>
                    </div>

                    <FilterByPrice/>
                    </div>
                    <div></div>
                    <div className={styles.grid}>
                    {categories.map((category, index) => {
    const previousCategories = categories.slice(0, index);
    const isDuplicate = previousCategories.some((prevCategory) => prevCategory.name === category.name);

    if (isDuplicate) {
      return null; // No renderizar si es un producto duplicado
    }

    return (
      <div key={category.id}>
           <div key={category.id}>
                                <Link
                                    to={`/detail/${category.id}`}
                                    style={{textDecoration: "none"}}
                                >
                                    <div className={styles.card}>
                                        <img
                                            className={styles.cardimg}
                                            src={category.image}
                                            alt={category.name}
                                        />
                                        <h2 className={styles.name} style={{color: "black"}}>
                                            {category.name}
                                        </h2>
                                        <p className={styles.description} style={{color: "black"}}>
                                            {category.description}
                                        </p>
                                        <p className={styles.price} style={{color: "black"}}>
                                            Stock: {category.stock} units
                                        </p>
                                        <p className={styles.price} style={{color: "darkred"}}>
                                            USD {category.price}
                                        </p>
                                    </div>
                                </Link>
                            </div>
      </div>
    );
  })}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;