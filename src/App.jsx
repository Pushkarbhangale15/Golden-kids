import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import './App.css'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Video player/Videoplayer'
const App = () => {
    const [playState,setPlayState]= useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'/>
        <Programs/>
        <About playState={playState} setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Activities'/>
        <Gallery/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
