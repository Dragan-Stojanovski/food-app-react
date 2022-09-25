import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Details from './components/Details'
import Pizzas from './components/Pizzas'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />  
      <Route path="/users/:userId" element={<Details />} />
      <Route path="/pizzas" element={<Pizzas />} />
    </Routes>
  </BrowserRouter>
);


