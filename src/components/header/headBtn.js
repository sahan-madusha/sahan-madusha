import React from 'react';
import pdf from './P.D.G.S.M.Samarasinghe.pdf';
import './header.css';
import { Link } from 'react-router-dom';

const HeadBtn = () => {
  return (
      <div className='d-flex flex-row justify-content-center my-5'>
        <button className='mx-3 py-2 px-5 fw-bold cvBtn' type="button" onClick={downloadCv}>CV</button>
        <Link to='/blogsite'><button className='mx-3 py-2 px-5 fw-bold contactBtn' type="button">Blog</button></Link>
      </div>
  )
}

//for cv
function downloadCv(){
    window.open(pdf, '_blank');
    return false;
}

  
export default HeadBtn;
