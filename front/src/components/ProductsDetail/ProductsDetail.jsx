import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {getProductsByCategory} from "../../redux/actions";
import styles from "./ProductsDetail.module.css";

const image = "";

const ProductsDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allProducts = useSelector((state) => state.products);
  const [selectedDetail, setSelectedDetail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelect = (event) => {
    setSelectedDetail(event.target.value);
  };

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedDetail(""); // Reiniciar la selección de tamaño cuando se cambia de categoría
  };

  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, [dispatch, id]);

  return (
    <div className={styles.productsDetailContainer}>
      <Link to="/home">
        <button className={styles.select}>Go Henry Market</button>
      </Link>
      <p>
      <label htmlFor="Category">All Products:</label>
      <select
        name="Category"
        id="Category"
        value={selectedCategory}
        onChange={handleSelectCategory}
      >
        <option value="Select">--Select--</option>
        <option value="Home">Home</option>
        <option value="Dress">Dress</option>
        <option value="Technology">Technology</option>
      </select>
      </p>
      {selectedCategory === "Dress" && ( // Solo mostrar el selector de tamaño si se selecciona la categoría "Dress"
        <select
          name="Size"
          id="Size"
          value={selectedDetail}
          onChange={handleSelect}
        >
          <option value="">Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
        </select>
      )}
      <div className={styles.productCard}>
        {allProducts.length === 0 ? (
          <div></div>
        ) : (
          <>
            <img
              className={styles.productImage}
              src={allProducts.image ? allProducts.image : image}
              alt={`img-${allProducts.name}`}
            />
            <section>
              <div className={styles.productInfo}>
                <h1 className={styles.productName}>{allProducts.name}</h1>
                {selectedCategory === "Dress" && allProducts.products ? ( // Solo mostrar el tamaño si se selecciona la categoría "Dress"
                  <p>
                    <b>Size: </b> {allProducts.products}
                  </p>
                ) : (
                  <p>
                    <b>Category:</b> {allProducts.category}
                  </p>
                )}
              </div>
              <button>Buy</button>
            </section>
          </>
        )}
      </div>
   
    </div>
  );
};

export default ProductsDetail;



