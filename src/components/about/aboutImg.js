import React from 'react';
import './about.css';

const AboutImg = () => {
  return (
    <div>
    <img className='AboutImg d-flex mx-auto' src={process.env.PUBLIC_URL + '/img/sahan_madusha.png'} alt="sahan madusha" />
    </div>
  )
}

export default AboutImg
