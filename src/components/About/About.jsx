import React from 'react'
import './About.css'
import about_image from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_image} alt="About Image" className="about-img" />
        <img
          src={play_icon}
          alt="About Image"
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h2>About Golden Kids Pre Primary School</h2>
        <p>
          Golden Kids Pre Primary School is dedicated to nurturing the young
          minds of tomorrow with love, care, and creativity. Our mission is to
          foster curiosity, confidence, and a lifelong love of learning in a
          joyful and safe environment.
        </p>
        <p>
          We believe in holistic education, which focuses on intellectual,
          social, and emotional growth. From Nursery to Sr. KG, we offer a
          variety of programs to support children’s early development and
          prepare them for a bright future.
        </p>
      </div>
    </div>
  );
};
export default About
