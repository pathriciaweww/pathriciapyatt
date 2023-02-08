import React from 'react';
import './contact.css';
import pat from '../../assets/contact.JPG';

const Contact = () => {
  return (
    <div className='ppyatt__contact section__padding'id='portfolio'>
      <div className='ppyatt__contact-container__heading'>
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>
      </div>
      <div className='container-contact'>
        <div className='container-contact__image'>
          <img src={pat} alt="Pathricia Pyatt" />
        </div>
        <div className='container-contact__form'>
          <form action="">
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
