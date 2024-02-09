import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            <h1>WellnessVista</h1>
                        </Link>
                    </div>

                    <nav>
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