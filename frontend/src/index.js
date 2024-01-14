import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GetShoppingListJSON from './Components/GetShoppingListJSON';
import ShoppingList from './Components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>
);
