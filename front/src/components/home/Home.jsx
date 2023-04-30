/*import React from "react";
import { useSelector } from "react-redux";
import { allProducts } from "../../redux/actions";
import Search from "../searchbar/Search";
import "./Home.css";

export default function Home() {
  const products = useSelector((state) => state.products);

  return (
    <div>  
      <Search />  
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/actions";import Search from "../searchbar/Search";

 import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <div>
      <Search />
      {products && products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}