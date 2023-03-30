import React from 'react';
import './project.css';

const ProjectItem = () => {
  return (
    <div>
        {projectItemFunc()}
    </div>
  )
}
const projectObj =[
    {
        name:"Student Managment System",
        status:"finished",
        link:"#",
        description:"Complete Student Management System Website HTML , CSS , JS , BOOTSTAP , PHP , SQL , AJAX , PAYHERE",
    },
    {
        name:"Uni List",
        status:"ongoing",
        link:"#",
        description:"My Personal Project for state university applicants)",
    },
    {
        name:"e-com web site",
        status:"finished",
        link:"#",
        description:"Complete Student Management System Website HTML , CSS , JS , BOOTSTAP , PHP , SQL , AJAX , PAYHERE",
    },
    {
        name:"Mobile chat app",
        status:"ongoing",
        link:"#",
        description:"Mobile App(Android,ios)/(React native,php,SQL)",
    },
    {
        name:"Attendance Marking System",
        status:"ongoing",
        link:"#",
        description:"A web app for student LMS. Student can mark there attendence in online and lecturer can give time frame for that.it mandetory to stay in lecture hall location(location is track in that web app)",
    },
    {
        name:"Tinder Web App - clone",
        status:"ongoing",
        link:"#",
        description:"MERN Stack project for practice the stack",
    },
    {
        name:"Data Ekamuthuwa MobileApp",
        status:"Finished",
        link:"#",
        description:"This one is for a some organization to collect weather information through their users.",
    },
    {
        name:"Logo for kaliba King product",
        status:"finished",
        link:"#",
        description:"This logo using photoshop and illustrator for a local client",
    },
    {
        name:"Logo for crypto base web site",
        status:"finished",
        link:"#",
        description:"This logo using photoshop and illustrator for a forigen client",
    },
];

function projectItemFunc() {
    return (
        <div>
            {projectObj.map((skill, index) => (
                <div key={index} className="col-12">
                    <div className="mx-auto projectItemMain">
                        <span className="d-flex text-light align-items-baseline rounded border border-0 align-baseline flex-column projectItem my-4 mx-auto p-3 w-75 reveal">
                            <h5 className='text-uppercase'><a href={skill.link}>{skill.name}</a> - <span className='text-capitalize'>({skill.status})</span> </h5>
                            <p className="ms-2">{skill.description}</p>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProjectItem
