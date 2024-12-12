import React, { useState, useEffect } from 'react';
import '../list/list.css'; // Use list.css for consistent styling

export function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const cartText = localStorage.getItem('cartItems');
    if (cartText) {
      setCartItems(JSON.parse(cartText));
    }
  }, []);

  // Save cart items to localStorage whenever the cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Remove an item from the cart
  const removeFromCart = (restaurantName) => {
    const updatedCart = cartItems.filter((item) => item.name !== restaurantName);
    setCartItems(updatedCart);
  };

  return (
    <div className="body">
      <header>
        <h1>Michelin Star Cart</h1>
        <nav>
          <menu>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/list">List</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/review">Review</a>
            </li>
          </menu>
        </nav>
        <hr />
      </header>

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

      <footer>
        <span className="text-reset">Gwanghong Ahn</span>
        <a href="https://github.com/gwanghong/startup.git">GitHub</a>
      </footer>
    </div>
  );
}
