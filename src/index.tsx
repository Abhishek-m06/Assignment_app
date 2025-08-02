import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 👈 import this

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Assignment_app"> {/* 👈 add this wrapper */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
