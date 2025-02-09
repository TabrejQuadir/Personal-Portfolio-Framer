import React, { useState } from "react";
import "./work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

// Define your static project data.
const staticProjectData = [
  {
    _id: "1",
    title: "Trading Website",
    description: "This is the description for project one.",
    imgurl: "/Trading.JPG", // Replace with your image URL or local asset path.
    github_link: "https://github.com/username/project-one",
    web_app_link: "https://prepaidtaskskill.in",
    category: "full_stack",
  },
  {
    _id: "2",
    title: "Project Two",
    description: "This is the description for project two.",
    imgurl: "https://via.placeholder.com/300", // Replace with your image URL or local asset path.
    github_link: "https://github.com/username/project-two",
    web_app_link: "https://project-two-demo.com",
    category: "frontend",
  },
  {
    _id: "3",
    title: "Project Three",
    description: "This is the description for project three.",
    imgurl: "https://via.placeholder.com/300", // Replace with your image URL or local asset path.
    github_link: "https://github.com/username/project-three",
    web_app_link: "https://project-three-demo.com",
    category: "backend",
  },
];

const Work = () => {
  const [filter, setFilter] = useState("");

  // Filter the static projects based on the selected category.
  const filteredWork =
    filter === ""
      ? staticProjectData
      : staticProjectData.filter((project) => project.category === filter);

  return (
    <div className="work" id="Work">
      <h1>
        My creative <span>Portfolio</span> Section
      </h1>
      <div className="btn">
        <button
          className={filter === "" ? "active" : ""}
          onClick={() => setFilter("")}
        >
          All
        </button>
        <button
          className={filter === "full_stack" ? "active" : ""}
          onClick={() => setFilter("full_stack")}
        >
          Full Stack
        </button>
        <button
          className={filter === "frontend" ? "active" : ""}
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </button>
        <button
          className={filter === "backend" ? "active" : ""}
          onClick={() => setFilter("backend")}
        >
          Backend
        </button>
      </div>
      <div className="project-box">
        {filteredWork.length === 0 ? (
          <h1 className="notfound">
            coming <span>soon</span> 😊
          </h1>
        ) : (
          filteredWork.map((workItem) => (
            <motion.div
              className="project"
              key={workItem._id}
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.85, type: "tween" }}
            >
              <img src={workItem.imgurl} alt={workItem.title} />
              <h3>{workItem.title}</h3>
              <p>{workItem.description}</p>
              <div className="project-icon">
                <a
                  href={workItem.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
                <a
                  href={workItem.web_app_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillEye />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Work;
