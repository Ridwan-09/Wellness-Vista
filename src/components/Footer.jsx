import React from 'react';
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className=" w-full md:w-1/4">
                    <h1 className=" font-semibold text-xl pb-4">
                        WellnessVista
                    </h1>
                    <p className=" text-sm">
                        Our team of dedicated doctors, each specializing in unique fields
                        such as orthopedics, cardiology, pediatrics, neurology, dermatology,
                        and more.
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;