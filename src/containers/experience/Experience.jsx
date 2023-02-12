import React from 'react';
import 'animate.css';
import './experience.css';
import {Development} from '../../components';

const Experience = () => {
  return (
    <div className='ppyatt__experience section__padding'id='experience'>
      <div className='ppyatt__experience-container__heading animate__fadeInDown'>
        <h4>What Skills I Have</h4>
        <h2>My Experience</h2>
      </div>

      <div className='ppyatt__experience-container'>

        <div className='ppyatt__experience-container-item'>
          <h3>Frontend Development</h3>
          <div className='ppyatt__experience-container-items'>
            <Development title="HTML" text="Experienced"/>
            <Development title="JavaScript" text="Intermediate"/>
            <Development title="CSS" text="Intermediate"/>
            <Development title="Bootstrap" text="Intermediate"/>
            <Development title="React" text="Intermediate"/>
          </div>

        </div>

        <div className='ppyatt__experience-container-item'>
          <h3>Backend Development</h3>
          <div className='ppyatt__experience-container-items'>
            <Development title="Node JS" text="Basic"/>
            <Development title="MySQL" text="Intermediate"/>
            <Development title="PHP" text="Basic"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
