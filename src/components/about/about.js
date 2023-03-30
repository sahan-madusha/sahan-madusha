import React from 'react'
import './about.css';

import Summery from './summery';
import AboutImg from './aboutImg';

const About = () => {
  return (
    <section id='AboutID' className='about reveal'>
      <div className='text-light text-center mb-5 reveal1'>
        <h6 className='text-capitalize mt-5'>get to know</h6>    
        <h1 className='text-uppercase  mb-5'>About Me</h1>
      </div>

      <div className='d-flex flex-column flex-md-row aboutData '>
        <AboutImg/>
        <Summery/>
      </div>
    </section>
  )
}


export default About
