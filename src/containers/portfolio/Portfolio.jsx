import React from 'react';
import './portfolio.css';
import {Project} from '../../components';
import {gpt, coco, fixoclock} from './imports';

const Portfolio = () => {
  return (
    <div className='ppyatt__portfolio section__padding'id='portfolio'>
      <div className='ppyatt__portfolio-container__heading'>
        <h4>My Recent Work</h4>
        <h2>Portfolio</h2>
      </div>
      <div className='ppyatt__portfolio-project'>
        <Project imgUrl={gpt} title="GPT-3 Project with React"/>
        <Project imgUrl={coco} title="Coco &amp; Joe BARF"/>
        <Project imgUrl={fixoclock} title="Fix O'Clock"/>
      </div>
    </div>
  )
}

export default Portfolio
