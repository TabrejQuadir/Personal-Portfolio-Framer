import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const aboutData = [
  {
    title: "Backend Development",
    description:
      "Specialist In Creating Robust, Efficient Server-Side Solutions That Ensure Reliable Data Handling And High Performance For Scalable, High-Quality Applications.",
    imgUrl: "https://cdn.sanity.io/images/l1sjm9rs/pdataset/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png", // Update this path as needed
  },
  {
    title: "Full Stack",
    description:
      "Master Of Both Frontend And Backend, Delivering Comprehensive, Scalable Web Solutions With Seamless Integration And Exceptional User Experiences Across All Technologies.",
    imgUrl: "https://cdn.sanity.io/images/l1sjm9rs/pdataset/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png",
  },
  {
    title: "Frontend Development",
    description:
      "Expert In Designing Visually Stunning, Intuitive Interfaces That Captivate Users And Provide An Outstanding, Engaging Experience Through Modern Web Technologies.",
    imgUrl: "https://cdn.sanity.io/images/l1sjm9rs/pdataset/b62651ef34a9e54c354ee437545acc348fbf0505-1200x900.png",
  },
];

const About = () => {
  return (
    <div className="about" id="About">
      <h1 className="heading">
        I Know That <span>Good Developer</span> <br /> Means{" "}
        <span>Good Business</span>
      </h1>
      <div className="box">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.85, type: "tween" }}
          >
            <img src={item.imgUrl} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
