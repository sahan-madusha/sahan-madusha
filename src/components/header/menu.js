import React from 'react'
import './header.css';

const Menu = () => {
  return (
    <div className='text-light d-md-flex d-none flex-column position-absolute justify-content-center fs-4 HeaderNav mt-5 me-5 end-0'>
        <a href='#AboutID' className='my-2 mx-4 bg-transparent text-light text-decoration-none border border-1 rounded-pill px-3 py-1'>About</a>
        <a href='#Experience' className='my-2 mx-4 bg-transparent text-light text-decoration-none border border-1 rounded-pill px-3 py-1'>Experience</a>
        <a href='#serviceID' className='my-2 mx-4 bg-transparent text-light text-decoration-none border border-1 rounded-pill px-3 py-1'>Service</a>
        <a href='#' className='my-2 mx-4 bg-transparent text-light text-decoration-none border border-1 rounded-pill px-3 py-1'>Contact</a>
    </div>
  )
}

export default Menu
