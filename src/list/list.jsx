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
    </div>
  );
}
