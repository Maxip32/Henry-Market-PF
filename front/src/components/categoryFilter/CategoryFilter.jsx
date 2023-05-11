import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./categoryFilter.module.css";
import FilterByPrice from "../orderByProducts/OrderByProducts";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    dispatch(getProductsByCategory(category));
  };

  return (
    <div className={styles.product}>
      <div className={styles.searchresults}>
        <Link to="/home">
          <button className={styles.btn}>Go Henry Market</button>
        </Link>
        <div className={styles.filter}>
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

        <FilterByPrice />
        <div></div>
        <div className={styles.grid}>
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                to={`/detail/${category.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.card}>
                  <img
                    className={styles.cardimg}
                    src={category.image}
                    alt={category.name}
                  />
                  <h2 className={styles.cardTitle} style={{ color: "black" }}>
                    {category.name}
                  </h2>
                  <p className={styles.cardInfo} style={{ color: "black" }}>
                    {category.description}
                  </p>
                  <p className={styles.cardInfo} style={{ color: "black" }}>
                    Stock: {category.stock} units
                  </p>
                  <p className={styles.cardInfo} style={{ color: "black" }}>
                    Price: USD {category.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
