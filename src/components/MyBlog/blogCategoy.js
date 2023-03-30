import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './blogPageHome.css';
import  objBlogData from '../blog';

const BlogCategoy = () => {
  return (
    <div>
      {BlogCategory()}
    </div>
  )
}

function BlogCategory() {
  return (
    <div>
      {objBlogData.map((skill, index) => (
        <div key={index} className="col-11 border border-1 border-light rounded col-lg-5  d-flex flex-column mx-auto my-3">
          <div className="text-light mx-auto py-5 d-flex flex-column">
            <h5 className='text-center'>{skill.title}</h5>
            <img width={200} height={100} src={process.env.PUBLIC_URL + '/img/blog/' + skill.img} className="mx-auto border border-1 my-3 rounded" alt="blog image" />
            <Link to={`/singleBlog/`+skill.id}><button className='mt-3 mx-auto align-self-auto d-flex py-2 px-5 fw-bold contactBtn' type="button">Read</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}


export default BlogCategoy
