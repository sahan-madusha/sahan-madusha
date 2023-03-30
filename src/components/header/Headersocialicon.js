import React from 'react';
import './header.css';

//Icon
import { FaLinkedin,FaYoutube } from 'react-icons/fa';
import { MdEmail, MdFacebook } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";


//social media


const Headersocialicon = () => {
  return (
    <div className='text-light d-flex flex-md-column flex-row position-absolute justify-content-center fs-4 Headersocialicon'>
      <a href='https://www.linkedin.com/in/sahan-madusha-21942725b/' target="_blank" className='my-2 mx-4 bg-transparent text-light'><FaLinkedin /></a>
      <a href='mailto:sahanmadusha001@gmail.com' target="_blank" className='my-2 mx-4 bg-transparent text-light'><MdEmail /></a>
      <a href='https://www.facebook.com/sahan.madusha.31?mibextid=ZbWKwL' target="_blank" className='my-2 mx-4 bg-transparent text-light'><MdFacebook /></a>
      <a href='https://github.com/sahan-madusha' target="_blank" className='my-2 mx-4 bg-transparent text-light'><AiFillGithub /></a>
      <a href='https://wa.me/+94771617400' target="_blank" className='my-2 mx-4 bg-transparent text-light'><BsWhatsapp /></a>
      <a href='https://www.youtube.com/channel/UCFYrzpdci2I3H3l7vU1UcIQ' target="_blank" className='my-2 mx-4 bg-transparent text-light'><FaYoutube /></a>
    </div>
  )
}

export default Headersocialicon
