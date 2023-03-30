import React from 'react';
import './service.css';
import ServiceItem from './serviceItem';
const Service = () => {
  return (
    <section id='serviceID' className=''>
      <div className='text-light text-center reveal my-5 reveal1'>
        <h6 className='text-capitalize mt-5'>what i offer</h6>    
        <h1 className='text-uppercase  mb-5'>my Service</h1>

        <div>
          <ServiceItem/>
        </div>
      </div>
    </section>
  )
}

export default Service
