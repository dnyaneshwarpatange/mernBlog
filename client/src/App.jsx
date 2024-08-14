import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateBlog from './pages/createBlog'; // Corrected the import path
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/v1/login' element={<Login />} />
        <Route path='/api/v1/register' element={<Register />} />
        <Route path='/api/v1/create' element={<CreateBlog />} /> {/* Corrected the component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
