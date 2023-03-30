import React from 'react';
import Home from './home';
import BlogHome from './blogHome';
import SingleBlogPage from './singleBlogPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blogsite' element={<BlogHome/>}/>
          <Route path='/singleBlog/:Blogid' element={<SingleBlogPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router;
