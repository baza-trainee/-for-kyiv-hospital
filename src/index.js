import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { ThankProvider } from './hooks/ThankContext';
import { ShareProvider } from './hooks/ShareContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThankProvider>
      <ShareProvider>
        <App />
      </ShareProvider>
    </ThankProvider>
  </React.StrictMode>
);
