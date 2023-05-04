/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory, clean } from '../../redux/actions';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    dispatch(getProductsByCategory(category));
    dispatch(clean());
  }

  return (
    <div>
      <label htmlFor="category-filter">Filter by category:</label>
      <select id="category-filter" onChange={handleCategoryChange}>
        <option value="All Products">All Products</option>
        <option value="Home">Home</option>
        <option value="Dress">Dress</option>
        <option value="Technology">Technology</option>
        <option value="Bookshop">Bookshop</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}></option>
        ))}
      </select>

      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>

          <img src={category.image} alt={`img-${category.name}`} />
         

             <p>Description:  {category.description}</p>
             <p>Stock:  {category.stock} units</p>
             <p>Price:  USD {category.price}</p>
        </div>
      ))}
    </div>
  )
}

export default CategoryFilter;
