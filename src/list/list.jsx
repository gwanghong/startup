import React from 'react';
import './list.css';

export function List(props) {
  const userName = props.userName;

  const restaurants = [
    {
      name: 'Alma Fonda Fina',
      image: 'AlmaFondaFina.jpg',
      stars: 1,
      location: 'Denver, USA',
      cost: '$$',
      cuisine: 'Mexican',
    },
    {
      name: 'Bruto',
      image: 'Bruto.jpg',
      stars: 1,
      location: 'Denver, USA',
      cost: '$$$$',
      cuisine: 'Mexican',
    },
    {
      name: 'Addison',
      image: 'Addison.jpg',
      stars: 3,
      location: 'San Diego, USA',
      cost: '$$$$',
      cuisine: 'Contemporary',
    },
  ];

  const addToCart = (restaurant) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the item already exists in the cart
    if (!cartItems.find((item) => item.name === restaurant.name)) {
      cartItems.push(restaurant);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      alert(`${restaurant.name} has been added to your cart!`);
    } else {
      alert(`${restaurant.name} is already in your cart!`);
    }
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

      <main>
        <div className="players">
          Welcome
          <span className="player-name"> {userName} </span>
        </div>
      </main>

      <div className="container">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.name}>
            <div className="restaurant-info">
              <img src={restaurant.image} alt={restaurant.name} width="200" height="200" />
              <div className="restaurant-details">
                <h3>{restaurant.name}</h3>
                <p>⭐ {restaurant.stars}</p>
                <p>{restaurant.location}</p>
                <p>Cost: {restaurant.cost}</p>
                <p>{restaurant.cuisine}</p>
              </div>
            </div>
            <div className="add-to-cart">
              <button onClick={() => addToCart(restaurant)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <span className="text-reset">Gwanghong Ahn</span>
        <a href="https://github.com/gwanghong/startup.git">GitHub</a>
      </footer>
    </div>
  );
}
