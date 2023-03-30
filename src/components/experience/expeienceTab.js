import React from 'react';
import './experience.css';
import ExFrontEnd from './exFrontEnd';
import ExBackEnd from './exBackEnd';



const ExpeienceTab = () => {
    return (
        <section id='Experience' className='text-light d-flex flex-column justify-content-center flex-lg-row mx-auto text-center overflow-auto'>
            
            <div className='col-11 col-lg-5 frontEndExpeience border border-2 rounded py-3 reveal1'>
                <h2 className='text-uppercase text-center my-5'>frontend development</h2>
                <div>
                    <ExFrontEnd/>
                </div>
            </div>

            <div className='col-11 col-lg-5 backEndExpeience border border-0 rounded py-3 reveal'>
                <h2 className='text-uppercase text-center my-5'>backend development</h2>
                <div>
                    <ExBackEnd/>
                </div>
            </div>
        </section>
    )
}

export default ExpeienceTab;
