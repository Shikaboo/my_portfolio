import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/shinoboo_portfolio'>
    <Main />
  </BrowserRouter>
);

reportWebVitals();
