import React from 'react';
import './project.css';

const Project = ({imgUrl, title}) => {
  return (
    <div className='ppyatt__project-container'>
      <img src={imgUrl} alt="Project"/>
      <h3>{title}</h3>
      <button>Github</button>    
    </div>
  )
}

export default Project
