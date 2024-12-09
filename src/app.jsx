import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className="body">
        <header>
          <h1>Michelin Star Cart</h1>
          <nav>
            <menu>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="list.html">List</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="review.html">Review</a>
              </li>
            </menu>
          </nav>
          <hr />
        </header>
  
        <main className="d-flex flex-column align-items-center justify-content-center p-4">
          <h1 className="text-danger mb-4">Save Your Favorite Restaurant</h1>
          <form method="get" action="list.html" className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center mb-3">
              <span className="me-2">@</span>
              <input
                type="text"
                placeholder="your@email.com"
                className="form-control w-75"
              />
            </div>
            <div className="d-flex align-items-center mb-3">
              <span className="me-2">🔒</span>
              <input
                type="password"
                placeholder="password"
                className="form-control w-75"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-danger mx-2">
                Login
              </button>
              <button type="submit" className="btn btn-danger mx-2">
                Create
              </button>
            </div>
          </form>
        </main>
  
        <footer className="bg-dark text-white-50 d-flex justify-content-between align-items-center p-2">
          <span className="text-reset">Gwanghong Ahn</span>
          <a
            className="text-reset text-decoration-none"
            href="https://github.com/gwanghong/startup.git"
          >
            GitHub
          </a>
        </footer>
      </div>
    );
  }