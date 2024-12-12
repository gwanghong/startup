import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { Login } from './login/login';
import { List } from './list/list';
import { Cart } from './cart/cart';
import { Review } from './review/review';
import { AuthState } from './login/authState';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="body bg-white text-dark">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-light bg-light">
            <h1 className="navbar-brand text-danger">Michelin Star Cart</h1>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/list">
                    List
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
              )}
              {authState === AuthState.Authenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/review">
                    Review
                  </NavLink>
                </li>
              )}
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(loginUserName, newAuthState) => {
                  setUserName(loginUserName);
                  setAuthState(newAuthState);
                }}
              />
            }
          />
          <Route path="/list" element={<List userName={userName} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="bg-light text-muted text-center p-3">
          <span className="text-reset">Gwanghong Ahn</span>
          <a className="text-reset text-decoration-none" href="https://github.com/gwanghong/startup.git">
            GitHub
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

export default App;
