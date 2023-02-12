import React from 'react';
import './project.css';

const Project = ({imgUrl, title}) => {
  return (
    <div className='ppyatt__project-container'>
      <img src={imgUrl} alt="Project"/>
      <h3>{title}</h3>
      <a href='https://github.com/pathriciaweww/january_ppyatt'><button>Github</button></a>    
    </div>
  )
}

export default Project
