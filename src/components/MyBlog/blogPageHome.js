import React from 'react';
import './blogPageHome.css';


import BlogCategoy from './blogCategoy';
import Footer from '../footer/footer';
import Contact from '../contact/contact';

const BlogPageHome = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-light text-center text-uppercase mb-0'>My Blog</h1>
                <p className='blogHeadPar text-center text-capitalize'>my idea</p>
            </div>
            <div className='mb-5'>
                {/* blog page category */}
                <BlogCategoy />
            </div>
            <div>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default BlogPageHome
