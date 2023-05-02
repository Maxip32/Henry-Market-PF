/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { useParams } from 'react-router';
import {getProductsByCategory} from '../../redux/actions';
import { useState } from 'react'
import style from "./categoryFilter.module.css"

const Detail = (props) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
 // const product = useSelector((state) => state.products);
  
  //const { ProductsByCategory } = useParams();
   
  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
	props.setCurrentPage(1)
  }

  useEffect(() => {
    dispatch(getProductsByCategory());
  }, [dispatch]);

  
  // Verificar si existe el producto antes de mostrar la información
 

  return (
    <div className={style.searchresults}>
    <label htmlFor="Category">All Products:</label>
    <select name="Category" id="Category" value={selectedCategory} onChange={handleSelect}>
      <option value="Select">--Select--</option>
      <option value="Home">Home</option>
      <option value="Dress">Dress</option>
      <option value="Technology">Technology</option>
     
    </select>
    <p>Selected Category: {selectedCategory}</p>
  </div>
  );
};

export default Detail;
