import React from 'react';
import 'animate.css';
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
        <button onClick={download}>Download - CV</button>
      </div>
      <div className='ppyatt__header-image animate__fadeInUp'>
        <img src={patpyatt} alt="Pathricia Pyatt"/>
      </div>
    </div>
  )
}

const download = () =>{
  alert("Oops sorry website is under maintenance.\nButton is not fully functioned yet \nPlease email me pathriciawe@gmail.com and I will send you my CV 😊");
}

export default Header
