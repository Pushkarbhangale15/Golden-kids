import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll'
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Nurturing Young Minds with Care and Creativity</h1>
        <p>
          We foster a love for learning from the start. Our pre-primary programs
          spark curiosity, build confidence, and nurture each child's unique
          talents in a joyful, safe environment.{" "}
        </p>
        <Link
          to="programs"
          smooth={true}
          offset={-300}
          duration={500}
          className="btn"
        >
          Explore More <img src={white_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Hero
