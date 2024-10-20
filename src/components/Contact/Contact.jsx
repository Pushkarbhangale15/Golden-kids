import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        
        <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
        <p>
          If you have any questions or would like to learn more about our
          programs, feel free to get in touch with us!
        </p>
        <ul>
          <li>Contact@goldenkids.edu</li>
          <li>+91 9028032989</li>
          <li>
            Appa sadan satsang hall, plot no.38, Jatwada Rd, Radhaswami Colony,
            Harsul, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431003
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact
