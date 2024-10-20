import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            
        <h1>Nurturing Young Minds with Care and Creativity</h1>
        <p>We foster a love for learning from the start. Our pre-primary programs spark curiosity, build confidence, and nurture each child's unique talents in a joyful, safe environment. Join us in laying the foundation for a lifetime of growth and discovery.</p>

        <button className='btn'>Explore More <img src={white_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
