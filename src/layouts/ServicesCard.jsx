import React from 'react';

const ServicesCard = ({ icon, title }) => {
    return (
        <div>
            <div>
                <h1 className=" font-semibold text-lg">
                    {title}
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                    praesentium asperiores unde veniam, perspiciatis neque!
                </p>
            </div>
        </div>
    );
};

export default ServicesCard;