import React from 'react';
import './project.css';
import ProjectItem from './projectItem';


const Project = () => {
  return (
    <section className='my-5'>
      <div className='text-light text-center reveal mb-5 reveal'>
        <h6 className='text-capitalize mt-5'>what i done</h6>
        <h1 className='text-uppercase  mb-5'>my Project</h1>
      </div>

      <div>
          <ProjectItem/>
      </div>
    </section>
  )
}

export default Project
