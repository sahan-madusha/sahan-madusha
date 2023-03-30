import React from 'react'

const ServiceItem = () => {
  return (
    <div>
    {serviceItem()}
    </div>
  )
}

const serviceObj =[
    {
        name:"UI/UX Design",
        description:"Crafting digital experiences for optimal user engagement and satisfaction",
    },
    {
        name:"web development (fullStack)",
        description:"Creating end-to-end web applications using both front-end and back-end",
    },
    {
        name:"Database design",
        description:"Structuring data to optimize storage, retrieval and management efficiency.",
    },
    {
        name:"Mobile application development (android/ios)",
        description:" Building user-friendly and performant apps for Android/iOS devices.",
    },
    {
        name:"photoshop design",
        description:"Manipulating images and graphics to create visually compelling digital artwork.",
    },
    {
        name:"video editing",
        description:" Enhancing and refining raw video footage for a polished final product.",
    },


];

function serviceItem() {
    return (
        <div>
            {serviceObj.map((skill, index) => (
                <div key={index} className="col-12">
                    <div className="mx-auto">
                        <span className="d-flex align-items-baseline align-baseline flex-column serviceItem my-4 mx-auto p-3 w-75 text-center reveal2">
                            <h5 className='text-uppercase text-center mx-auto'>{skill.name}</h5>
                            <span className="ms-2">{skill.description}</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceItem;
