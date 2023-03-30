import React from 'react'
import { MdVerified } from "react-icons/md";
import './experience.css';

const ExBackEnd = () => {
    return (
        <div>
            <div className='exItem ms-5'>
                {expbackItem()}
            </div>
        </div> 
    )
}

const objBackEnd = [
    {
        name: "Node Js",
        ex_lvl: "Intermediate",
    },
    {
        name: "PHP",
        ex_lvl: "Intermediate",
    },
    {
        name: "MongoDB",
        ex_lvl: "Intermediate",
    },
    {
        name: "MYSQL",
        ex_lvl: "Intermediate",
    },
    {
        name: "Python",
        ex_lvl: "Basic",
    },
    {
        name: "JAVA",
        ex_lvl: "Basic",
    }
];
function expbackItem() {
    return (
        <div>
            {objBackEnd.map((skill, index) => (
                <div key={index} className="col-12 col-lg-6">
                    <div className="exItem ms-4">
                        <span className="d-flex align-items-baseline align-baseline flex-row my-3 ext-capitalize experienceItem reveal1">
                            <MdVerified />
                            <h5>{skill.name}</h5>
                            <span className="ms-2">({skill.ex_lvl})</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExBackEnd
