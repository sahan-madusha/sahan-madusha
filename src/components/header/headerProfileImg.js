import React from 'react';
import './header.css';


const HeaderProfileImg = () => {
  return (
    <div className='text-light d-flex justify-content-center my-4'>
        <img className='profileImg' width={200} src={process.env.PUBLIC_URL + '/img/sahan.png'} alt="sahan madusha" />
    </div>
  )
}

export default HeaderProfileImg;
