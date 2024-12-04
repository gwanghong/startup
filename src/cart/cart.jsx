import React, { useState } from 'react';
import './app.css';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Addison',
      stars: 3,
      location: 'San Diego, USA',
      cost: '$$$$',
      cuisine: 'Contemporary',
      image: 'Addison.jpg',
    },
    {
      id: 2,
      name: 'Bruto',
      stars: 1,
      location: 'Denver, USA',
      cost: '$$$$',
      cuisine: 'Mexican',
      image: 'Bruto.jpg',
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="cart">
      <header>
        <h1>Michelin Star Cart</h1>
        <nav>
          <menu>
            <li><a href="index.html">Home</a></li>
            <li><a href="list.html">List</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="review.html">Review</a></li>
          </menu>
        </nav>
        <hr />
      </header>

      {cartItems.map(item => (
        <div className="cart-item" key={item.id}>
          <div className="restaurant-details">
            <img src={item.image} alt={item.name} width="200" height="200" />
            <h3>{item.name}</h3>
            <p>⭐ {item.stars}</p>
            <p>{item.location}</p>
            <p>Cost: {item.cost}</p>
            <p>{item.cuisine}</p>
          </div>
          <div className="remove-from-cart">
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h2>Total Restaurants: {cartItems.length}</h2>

      <footer>
        <span className="text-reset">Gwanghong Ahn</span>
        <a href="https://github.com/gwanghong/startup.git">GitHub</a>
      </footer>
    </div>
  );
};

export default Cart;
