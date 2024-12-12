import React from 'react';
import './review.css';

export function Review() {
  const reviews = [
    {
      name: 'MinJae Kim',
      restaurant: 'Addison',
      stars: 3,
      content: 'Had the seasonal discovery menu and every course was excellent. Cocktails were great as well.',
    },
    {
      name: 'IBBIE',
      restaurant: 'Addison',
      stars: 1,
      content: 'Had a group dinner.. enjoyed some of the food..',
    },
    {
      name: 'Sade',
      restaurant: 'Bruto',
      stars: 3,
      content: 'Fantastic experience end to end. Food was exceptional and highly recommended.',
    },
  ];

  return (
    <div className="body">

      <main>
        <div className="introduction">
          <p>
            <b>What is a Michelin Star?</b>
            A Michelin Star is awarded to restaurants offering outstanding cooking. We take into account five universal criteria: the quality of the ingredients, the harmony of flavours, the mastery of techniques, the personality of the chef as expressed through their cuisine and, just as importantly, consistency both across the entire menu and over time.
          </p>
        </div>

        <div className="image">
          <img width="600px" src="guidestar.jpg" alt="Michelin Guide Star" />
        </div>

        {reviews.map((review, index) => (
          <div className="comment-box" key={index}>
            <div className="comment-head">
              <h6 className="comment-name">{review.name}</h6>
              <div className="comment-res-name">
                {review.restaurant}
                <span>{review.stars} stars</span>
              </div>
            </div>
            <div className="comment-content">"{review.content}"</div>
          </div>
        ))}
      </main>
    </div>
  );
}
