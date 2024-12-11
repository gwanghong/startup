import React, { useState } from 'react';
import './cart.css';

export function Cart() {
  const initialCartItems = [
    {
      name: 'Addison',
      image: 'Addison.jpg',
      stars: 3,
      location: 'San Diego, USA',
      cost: '$$$$',
      cuisine: 'Contemporary',
    },
    {
      name: 'Bruto',
      image: 'Bruto.jpg',
      stars: 1,
      location: 'Denver, USA',
      cost: '$$$$',
      cuisine: 'Mexican',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeFromCart = (restaurantName) => {
    setCartItems(cartItems.filter((item) => item.name !== restaurantName));
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

      <div>
        {cartItems.map((item) => (
          <div className="cart-item" key={item.name}>
            <div className="restaurant-details">
              <img src={item.image} alt={item.name} width="200" height="200" />
              <h3>{item.name}</h3>
              <p>⭐ {item.stars}</p>
              <p>{item.location}</p>
              <p>Cost: {item.cost}</p>
              <p>{item.cuisine}</p>
            </div>
            <div className="remove-from-cart">
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <h2>Total Restaurants: {cartItems.length}</h2>

      <footer>
        <span className="text-reset">Gwanghong Ahn</span>
        <a href="https://github.com/gwanghong/startup.git">GitHub</a>
      </footer>
    </div>
  );
}
