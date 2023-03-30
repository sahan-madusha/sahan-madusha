import React from 'react';
import { MdVerified } from "react-icons/md";
import './experience.css';

const ExFrontEnd = () => {
    return (
        <div>
            <div className='exItem ms-5'>
                {expfrontItem()}
            </div>
        </div>
    )
}

const objFrontEnd = [
    {
        name: "HTML",
        ex_lvl: "Experienced",
    },
    {
        name: "CSS",
        ex_lvl: "Experienced",
    },
    {
        name: "bootstrap",
        ex_lvl: "Experienced",
    },
    {
        name: "JavaScript",
        ex_lvl: "Intermediate",
    },
    {
        name: "React",
        ex_lvl: "Intermediate",
    },
    {
        name: "React-Native",
        ex_lvl: "Intermediate",
    },
    {
        name: "UI",
        ex_lvl: "Intermediate",
    }
];
function expfrontItem() {
    return (
        <div>
            {objFrontEnd.map((skill, index) => (
                <div key={index} className="col-12 col-lg-6">
                    <div className="exItem ms-4">
                        <span className="d-flex align-items-baseline align-baseline flex-row my-3 text-capitalize experienceItem reveal2">
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

export default ExFrontEnd
