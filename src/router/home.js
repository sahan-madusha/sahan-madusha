import React from 'react';

//components
import NavBar from '../components/navBar/navBar';
import Header from '../components/header/header';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Experience from '../components/experience/experience';
import Footer from '../components/footer/footer';
import Project from '../components/project/project';
import Service from '../components/service/service';

const Home = () => {
  return (
    <div className='mainClass'>
        <Header/>
        <About/>
        <Experience/>
        <Service/>
        <NavBar/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
