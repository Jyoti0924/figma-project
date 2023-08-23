import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

const Navbar= () => {

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
       <img src='image/img1.jpeg' alt='logo' className='logo'></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li className="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to='/form'>Form</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    
    </div>
    
  )
}

export default Navbar
