import React, { useState, useEffect } from 'react';
import '../list/list.css';

export function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartText = localStorage.getItem('cartItems');
    if (cartText) {
      setCartItems(JSON.parse(cartText));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (restaurantName) => {
    const updatedCart = cartItems.filter((item) => item.name !== restaurantName);
    setCartItems(updatedCart);
  };

  return (
    <div className="body">

      <main className="container">
        {cartItems.length ? (
          cartItems.map((item) => (
            <div className="restaurant-card" key={item.name}>
              <div className="restaurant-info">
                <img src={item.image} alt={item.name} width="200" height="200" />
                <div className="restaurant-details">
                  <h3>{item.name}</h3>
                  <p>⭐ {item.stars}</p>
                  <p>{item.location}</p>
                  <p>Cost: {item.cost}</p>
                  <p>{item.cuisine}</p>
                </div>
              </div>
              <div className="add-to-cart">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h2>Your cart is empty</h2>
        )}
        <h2>Total Restaurants: {cartItems.length}</h2>
      </main>
    </div>
  );
}
