import React from 'react'
import { useParams } from 'react-router-dom';
import  objBlogData from '../blog';
import './singleBlog.css';

import Footer from '../footer/footer';
import Contact from '../contact/contact';

const SingleBlog = () => {

  const { Blogid } = useParams();
  const blogData = objBlogData.find(dataList => dataList.id === Blogid);

  return (
    <div className='mx-autom mt-5'>

      <div className='text-center text-uppercase'>
        <h1 className='BlogTitle text-light fw-bold'>{blogData.title}</h1>
        <br />
        <img src={process.env.PUBLIC_URL + '/img/blog/' + blogData.img} className="border border-1 my-3 rounded Blog" alt="blog image" />
      </div>

      <div className='BlogText border border-0 rounded m-3 p-5 '>
        <p className='namebar text-dark'>
          <span>{blogData.description}</span>
        </p>
      </div>

      <div className='mt-5 mb-0'>
        <Contact />
        <Footer />
      </div>
    </div>
    
  )
}


export default SingleBlog
