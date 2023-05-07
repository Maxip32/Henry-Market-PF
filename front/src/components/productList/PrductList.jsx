import React from 'react';
import { useSelector } from 'react-redux';
//import { addToCart, removeFromCart } from './cartSlice';
//import { shoppingCartId } from '../../redux/actions';

function ProductList() {
  const products = useSelector((state) => state.cart.products);
  //const dispatch = useDispatch();

  /*const handleAddToCart = (product) => {
    dispatch( shoppingCartId(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch((productId));
  };*/

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Cantidad: {product.quantity}</p>
          <button onClick={() =>(product.push)}>Agregar al carrito</button>
          <button onClick={() => (product.id.pop)}>Remover del carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
