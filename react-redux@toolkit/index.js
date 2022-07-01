import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import usersReducer from './features/users'
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);