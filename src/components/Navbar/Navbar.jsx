import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    const[sticky,setSticky]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 100 ? setSticky(true) : setSticky(false);
      })
    },[]);
  return (
    <nav className={`container ${sticky? 'light-nav' : ''}`}>
        <img src={logo} alt="Logo" className='logo'/>
        <h1>Golden Kids Pre Primary English School</h1>
        <ul className='Tablist'>
           <li>Home</li>
           <li>Programs</li>
           <li>About Us</li>
           <li>Gallery</li>
           <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
