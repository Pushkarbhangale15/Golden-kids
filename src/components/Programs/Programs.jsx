import React from 'react'
import './Programs.css'
import Program_1 from '../../assets/Program 1.jpg'
import Program_2 from '../../assets/Program 2.jpg'
import Program_3 from '../../assets/Program 3.jpg'
const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
      <img src={Program_1} alt="" />
      </div>
      <div className="program">
      <img src={Program_2} alt="" width={338} />
      </div>
      <div className="program">
      <img src={Program_3} alt="" />
      </div>
      
    </div>
  )
}

export default Programs
