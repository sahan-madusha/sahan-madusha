import React from 'react';
import './about.css';


const Summery = () => {
    return (
        <div className='text-light text-center mx-5 aboutHeadText mt-5 reveal'>
            <h3>Looking for a talented developer with a passion for <br/> web development 
                and game development?
            </h3>

            <br /> <br />

            <h5 className='lh-lg-lg aboutText'>
                Look no further! With a strong foundation in programming languages and a keen eye for design,
                I am equipped to create visually stunning and highly functional websites and engaging games.
                My portfolio showcases my skills in these areas, highlighting my ability to turn complex technical
                concepts into user-friendly and enjoyable experiences. As I continue to pursue my studies and gain
                more experience, I am excited to see where my passion for technology will take me. Choose me for
                your next project
                and experience the power of innovation and creativity firsthand!
            </h5>

            <br/><br/>

            <h4 className='text-start reveal2'>Education</h4>
            <p className='reveal2'>BEng (Hons) In Computer Science (undergraduate)
            University of Westminster, UK 
            Informatics Institute of Technology, Sri Lanka</p>

        </div>
    )
}

export default Summery
