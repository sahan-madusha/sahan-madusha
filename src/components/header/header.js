import React from 'react';
import './header.css';

import HeadBtn from './headBtn';
import Headersocialicon from './Headersocialicon';
import HeaderProfileImg from './headerProfileImg';
import Menu from './menu';

const Header = () => {
  return (
    <header className='mt-5'>
    
    {/* header Text */}
      <div className=' text-light headerText'>
        <h3 className='my-2'>Hi ! i'm</h3>
        <h1 className='text-uppercase my-2'>sahan madusha</h1>
        <h6 className='my-2'>web developer</h6>
      </div>

      {/* header button */}
      <HeadBtn/>

      <div className='d-flex flex-column align-baseline'>
        {/* header social icon */}
        <Headersocialicon/>

        {/* header profile image*/}
        <Menu/>

        {/* header profile image*/}
        <HeaderProfileImg/>
      </div>

      

    </header>
  )
}

export default Header
