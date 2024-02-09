import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Doctors = () => {
    const data = [
        {
            img: "/src/assets/img/doc1.jpg",
            name: "Dr. Serena Mitchell",
            specialties: "Orthopedic Surgeon",
        },
        {
            img: "/src/assets/img/doc2.jpg",
            name: "Dr. Julian Bennett",
            specialties: "Cardiologist",
        },
        {
            img: "/src/assets/img/doc3.jpg",
            name: "Dr. Camila Rodriguez",
            specialties: "Pediatrician",
        },
        {
            img: "/src/assets/img/doc4.jpg",
            name: "Dr. Victor Nguyen",
            specialties: "Neurologist",
        },
        {
            img: "/src/assets/img/doc5.jpg",
            name: "Dr. Ethan Carter",
            specialties: "Dermatologist",
        },
        {
            img: "/src/assets/img/doc6.jpg",
            name: "Dr. Olivia Martinez",
            specialties: "Ophthalmologist",
        },
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div>
            <div>

            </div>
        </div>
    );
};

export default Doctors;