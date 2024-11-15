import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f7354e3f-3714-4027-ba01-67b4531c34d8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        
        <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
        <p>
          If you have any questions or would like to learn more about our
          programs, feel free to get in touch with us!
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@goldenkids.edu</li>
          <li><img src={phone_icon} alt="" />+91 9028032989</li>
          <li><img src={location_icon} alt="" />
            Appa sadan satsang hall, plot no.38, Jatwada Rd, Radhaswami Colony,
            Harsul, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431003</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" id="" placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name="phone" id="" placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" id="" rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact
