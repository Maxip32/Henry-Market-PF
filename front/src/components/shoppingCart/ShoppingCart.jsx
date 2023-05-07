import React, { useState } from "react";

const Store = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);
  

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
  };

  return (
    
    <div>
      <h2>Store</h2>
      {items && items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
      <div>
        <h2>Shopping Cart</h2>
        {cartItems && cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
