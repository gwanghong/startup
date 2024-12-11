import React from 'react';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import '../app.css';

export function Login({ userName, authState, onAuthChange }) {
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

      <main className="d-flex flex-column align-items-center justify-content-center p-4">
        <h1 className="text-danger mb-4">Save Your Favorite Restaurant</h1>

        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => onAuthChange(loginUserName, AuthState.Authenticated)}
          />
        )}

        {authState === AuthState.Authenticated && (
          <Authenticated
            userName={userName}
            onLogout={() => onAuthChange('', AuthState.Unauthenticated)}
          />
        )}
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
