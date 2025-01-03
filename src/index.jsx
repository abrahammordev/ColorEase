// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './styles/styles.css'; // Estilos globales

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

