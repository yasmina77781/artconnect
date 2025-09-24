import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // 👈 Step 1: Import BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 👈 Step 2: Wrap your App with BrowserRouter to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);