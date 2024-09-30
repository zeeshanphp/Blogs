import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('authToken');

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/">Navbar</Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link text-white"  to="/">Add Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/blogs">Blogs</Link>
        </li>
       
      <li className="nav-item">
        <Link className="nav-link text-white" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white" to="/register">Register</Link>
      </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to="/logout">Logout</Link>
    </li>

        
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar