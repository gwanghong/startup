import React from 'react';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { NavLink } from 'react-router-dom';
import '../app.css';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <div className="body">


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

    </div>
  );
}
