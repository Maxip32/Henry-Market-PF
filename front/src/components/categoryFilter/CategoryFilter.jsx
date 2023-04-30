import React from 'react'
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();

 	const handleCategory = (e) => {
		e.preventDefault();
		dispatch(getProductsByCategory(e.target.value));
	};
const Filter = () => {
  return (
	<div>
		<select onChange={handleCategory}>
			<option value="category">All Products</option>
			<option value="category">Home</option>
			<option value="category">Tecnology</option>
			<option value="category">Dress</option>
		</select>
	</div>
  )
}

export default Filter

