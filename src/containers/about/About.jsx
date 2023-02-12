import React from 'react';
import 'animate.css';
import './about.css';
import aboutPat from '../../assets/ppabout.png';

const About = () => {
  return (
    <div className='ppyatt__about section__padding'id='about'>
      
      <div className='ppyatt__about-img'>
        <img src={aboutPat} alt="Pathricia Pyatt"/>
      </div>

      <div className='ppyatt__about-container animate__fadeIn'>
        <div className='ppyatt__about-container__heading'>
          <h4>Get To Know Me</h4>
          <h2>About Me</h2>
        </div>
        <div className='ppyatt_about-container__title'>
          <div className='ppyatt_about-container__item'>
            <a href='#experience'><h3>Experience</h3></a>
          </div>
          <div className='ppyatt_about-container__item'>
            <a href='#service' ><h3>Services</h3></a>
          </div>
          <div className='ppyatt_about-container__item'>
            <a href='#portfolio'><h3>Projects</h3></a>
          </div>
        </div>
        <div className='ppyatt_about-container__content'>
          <p>
            Hello World! 
            <br />
            <br />
            I’m a Junior Front End Web Developer. Familiar in user interface, testing, and debugging processes. Bringing expertise in design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill-set.  Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>
        </div>

        <div className='ppyatt_about-btn'>
          <a href='#contact'><button>Lets Talk</button></a>
        </div>
      </div>
      
    </div>
  )
}

export default About
