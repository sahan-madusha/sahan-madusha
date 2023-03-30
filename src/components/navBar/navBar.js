import React from "react";
import './navBar.css';

import { BsPersonCircle, BsPersonWorkspace, BsCodeSlash, BsPersonLinesFill } from "react-icons/bs";


const NavBar = () => {
    const ui = (
        <div className="text-light text-center fs-3 pt-2 mb-1 px-3 border-2 rounded-pill mobileMenuBar">
            <a href='#' className='my-2 mx-1 text-decoration-none border border-2 rounded-circle  pb-2 px-2'><BsPersonLinesFill /></a>
            <a href='#AboutID' className='my-2 mx-1 text-decoration-none border border-2 rounded-circle pb-2 px-2'><BsPersonCircle /></a>
            <a href='#Experience' className='my-2 mx-1 text-decoration-none border border-2 rounded-circle pb-2 px-2'><BsPersonWorkspace /></a>
            <a href='#serviceID' className='my-2 mx-1 text-decoration-none border border-2 rounded-circle  pb-2 px-2'><BsCodeSlash /></a>
        </div>
    );
    return ui;
};


export default NavBar;
