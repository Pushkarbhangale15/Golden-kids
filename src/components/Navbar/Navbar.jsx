import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[sticky,setSticky]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 100 ? setSticky(true) : setSticky(false);
      })
    },[]);
  return (
    <nav className={`container ${sticky ? "light-nav" : ""}`}>
      <div className="logo-and-title">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Golden Kids Pre Primary English School</h1>
      </div>
      <ul className="Tablist">
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-300} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-180} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="myGallery" smooth={true} offset={-300} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-290}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
