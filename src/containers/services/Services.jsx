import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className='ppyatt__service section__padding'id='service'>
      <div className='ppyatt__service-container__heading'>
        <h4>What I Offer</h4>
        <h2>Services</h2>
      </div>

      <div className='ppyatt__service-container'>
        <div className='ppyatt_service-container__title'>
          <h3>UX/UI Design</h3>
          <p>Producing prototypes</p>
          <p>Preparing review and feedback</p>
          <p>Figma, Adobe XD</p>
        </div>
        <div className='ppyatt_service-container__title'>
          <h3>Web Development</h3>
          <p>Clean design </p>
          <p>Spotting potential UX/UI problems</p>
          <p>Problem-solving skills</p>
        </div>
        <div className='ppyatt_service-container__title'>
          <h3>Content Creation</h3>
          <p>A love for design</p>
          <p>Branding and a strong sense of aesthetic</p>
          <p>Content management</p>
        </div>
      </div>

    </div>
  )
}

export default Services
