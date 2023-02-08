import React from 'react';
import './header.css';
import patpyatt from '../../assets/patpyatt.JPG';

const Header = () => {
  return (
    <div className='ppyatt__header' id='home'>
      <div className='ppyatt__header-title'>
        <h3>Hello, I'm</h3>
        <h1>Pathricia Pyatt</h1>
        <h4>Junior Front-End Developer</h4>
      </div>
      <div className='ppyatt__header-btn'>
        <button>Download - CV</button>
      </div>
      <div className='ppyatt__header-image'>
        <img src={patpyatt} alt="Pathricia Pyatt"/>
      </div>
    </div>
  )
}

export default Header
