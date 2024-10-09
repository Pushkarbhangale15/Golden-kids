import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="Logo" className='logo'/>
        <h1>Golden Kids Pre Primary English School</h1>
        <ul className='Tablist'>
           <li>Home</li>
           <li>Events</li>
           <li>Notices</li>
           <li>About Us</li>
           <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar
