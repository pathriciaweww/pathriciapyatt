import React from 'react';
import './development.css';

const Development = ({title, text}) => {
  return (
    <div className='ppyatt__development-container'>
      <div className='ppyatt__development-container__bar'>
        <div/>
      </div>
      <div className='ppyatt__development-container__text'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Development
