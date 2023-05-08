
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../../redux/actions';
import styles from "./categoryFilter.module.css"
import { Link } from 'react-router-dom';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    dispatch(getProductsByCategory(category));
  }

  

  return (
    <div className={styles.product}>
      <div className={styles.searchresults}>
        <Link to="/home">
          <button className={styles.btn}>Go Henry Market</button>
        </Link>
        <div className={styles.filter}>
          <label htmlFor="category-filter"></label>
          <select className={styles.btn1} id="category-filter" onChange={handleCategoryChange} value="All Products">
            <option  value="All Products">Category</option>
            <option value="Home">Home</option>
            <option value="Dress">Dress</option>
            <option value="Technology">Technology</option>
            <option value="Bookshop">Bookshop</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}></option>
            ))}
          </select>
         
        </div>
        <div className={styles.grid} >
          {categories.map(category => (
            <div key={category.id} >
              <Link to={`/detail/${category.id}`} style={{ textDecoration: "none" }}>
              <div className={styles.card}>
                <img className={styles.cardimg} src={category.image} alt={category.name} />
                <h2 className={styles.cardTitle} style={{ color: "black" }}>{category.name}</h2>
                <p className={styles.cardInfo} style={{ color: "black" }}>{category.description}</p>
                <p className={styles.cardInfo} style={{ color: "black" }}>Stock: {category.stock} units</p>
                <p className={styles.cardInfo} style={{ color: "black" }}>Price: USD {category.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter;
