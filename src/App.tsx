import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/homeA/HomeA';
import Manifesto from './pages/manifesto/Manifesto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
