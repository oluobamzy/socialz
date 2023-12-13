import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './components/chat';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/services" element={<Services />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
  
);


