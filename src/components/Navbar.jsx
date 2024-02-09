import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <div className=" flex flex-row items-center cursor-pointer">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <h1 className=" text-2xl font-semibold">WellnessVista.</h1>
                        </Link>
                    </div>

                    <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            to="services"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Services
                        </Link>
                        <Link
                            to="doctors"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Doctors
                        </Link>
                        <Link
                            to="blog"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className=" hover:text-hoverColor transition-all cursor-pointer"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;