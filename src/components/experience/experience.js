import React from 'react';
import './experience.css';
import ExpeienceTab from './expeienceTab';


const Experience = () => {
  return (
    <section id='ExperienceID' className='Experience my-5 reveal'>
      <div className='text-light text-center reveal mb-5'>
        <h6 className='text-capitalize mt-5'>what skills i have</h6>    
        <h1 className='text-uppercase  mb-5'>my experience</h1>
      </div>

      <ExpeienceTab/>
      
    </section>
  )
}

export default Experience
