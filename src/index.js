import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { ThankProvider } from './hooks/ThankContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThankProvider>
        <App />
    </ThankProvider>
  </React.StrictMode>
);
