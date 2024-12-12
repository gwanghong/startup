import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Route path="/list" element={<List userName={userName}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-light text-center py-5">
      <h2 className="text-danger">404</h2>
      <p>Return to sender. Address unknown.</p>
    </main>
  );
}

export default App;
