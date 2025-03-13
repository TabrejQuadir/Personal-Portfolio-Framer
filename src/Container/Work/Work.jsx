import React, { useState } from "react";
import "./work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

// Define your static project data.
const staticProjectData = [
  {
    "_id": "1",
    "title": "Real-Time Crypto Trading (MERN)",
    "description": "Built a MERN stack cryptocurrency trading platform with live charts, 'up/down' trades, order history, and secure financial transactions.",
    "imgurl": "/Trading.JPG",
    "github_link": "https://github.com/username/project-one",
    "web_app_link": "https://prepaidtaskskill.in",
    "category": "full_stack"
  },
  {
    _id: "2",
    title: "PizzaHub",
    description: "During my Oasis Infobyte internship, I built a MERN Pizza App with a custom pizza builder, an admin panel for inventory and order management, and live APIs. Integrated Razorpay test mode for payments.",
    imgurl: "/PizzaHub.JPG",
    github_link: "https://github.com/TabrejQuadir/PizzaHub-Mern-Stack-Website",
    web_app_link: "https://oasis-infobyte-frontend.onrender.com",
    category: "full_stack",
  },
  {
    "_id": "3",
    "title": "SureWin11: MERN Fantasy Cricket Investment",
    "description": "Built SureWin11, a MERN stack application for fantasy cricket investment. Features include expert team investment, secure JWT authentication, RESTful APIs, and efficient data management.",
    "imgurl": "/SureWin11.png",
    "github_link": "https://github.com/TabrejQuadir/Cricket-Fantasy",
    "web_app_link": "https://surewin11cricket.site",
    "category": "full_stack"
  },
  {
    "_id": "4",
    "title": "LiveNews",
    "description": "Developed LiveNews, a dynamic news application providing real-time updates across Technology, Business, Health, Sports, and Entertainment. Features include category-based news filtering, responsive design, and integration with a news API for live content delivery.",
    "imgurl": "/Livenews.jpg",
    "github_link": "https://github.com/TabrejQuadir/News-App",
    "web_app_link": "https://news.adminskill.tech",
    "category": "frontend"
  }
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
