import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
            <div className=" flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1>
                        Latest Post
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;