import React from 'react'
import './Gallery.css'
import white_arrow from "../../assets/white-arrow.png";
import gallery_1 from '../../assets/Pic 1.jpg'
import gallery_2 from '../../assets/Pic 2.jpg'
import gallery_3 from '../../assets/Pic 3.jpg'
import gallery_4 from '../../assets/Pic 4.jpg'
const Gallery = () => {
  return (
    <div className="myGallery">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      
      </div>
      <button className='btn'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  );
}

export default Gallery
