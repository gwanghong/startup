import React, { useState } from 'react';
import './review.css';

export function Review({ userName }) {
  const initialReviews = [
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

  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    restaurant: '',
    stars: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addReview = (e) => {
    e.preventDefault();

    // Add the new review with the userName automatically set
    setReviews([
      ...reviews,
      { ...formData, name: userName, stars: parseInt(formData.stars, 10) },
    ]);

    // Clear the form
    setFormData({
      restaurant: '',
      stars: '',
      content: '',
    });
  };

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

        {/* Add Review Form */}
        <div className="add-review-form">
          <h3>Add a Review</h3>
          <form onSubmit={addReview}>
            <div className="mb-3">
              <label htmlFor="restaurant" className="form-label">Restaurant:</label>
              <input
                type="text"
                id="restaurant"
                name="restaurant"
                className="form-control"
                value={formData.restaurant}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stars" className="form-label">Stars:</label>
              <input
                type="number"
                id="stars"
                name="stars"
                className="form-control"
                value={formData.stars}
                onChange={handleInputChange}
                min="1"
                max="3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Comment:</label>
              <textarea
                id="content"
                name="content"
                className="form-control"
                value={formData.content}
                onChange={handleInputChange}
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}
