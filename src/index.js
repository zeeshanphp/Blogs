import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blogs from './Components/Blogs';
import BlogDetails from './Components/BlogDetails';
import Addblog from './Components/Addblog';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar />
     <Routes>
     <Route path="/" element={<Addblog />} />
     <Route path="/login" element={<Login />} />
     <Route path="/logout" element={<Logout />} />
     <Route path="/register" element={<Register />} />
     <Route path="/blogs" element={<Blogs />} />
     <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
