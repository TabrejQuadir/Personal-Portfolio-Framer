import React from "react";
import "./skill.scss";
import { motion } from "framer-motion";

// Static Skills Data with online image URLs
const staticSkills = [
  {
    _id: "1",
    title: "Chakra UI",
    imgurl:
      "data:image/png;base64,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",
    background_color: "#ffffff",
  },
  {
    _id: "2",
    title: "HTML",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    background_color: "#E34F26",
  },
  {
    _id: "3",
    title: "React Js",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    background_color: "#000000",
  },
  {
    _id: "4",
    title: "Mysql",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    background_color: "#000000",
  },
  {
    _id: "5",
    title: "Express Js",
    imgurl:
      "https://cdn.iconscout.com/icon/premium/png-256-thumb/express-js-5379348-4492470.png?f=webp&w=256",
    background_color: "#FFFFFF",
  },
  {
    _id: "6",
    title: "Javascript",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    background_color: "#F7DF1E",
  },
  {
    _id: "7",
    title: "Sass",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    background_color: "#000000",
  },
  {
    _id: "8",
    title: "Node Js",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    background_color: "#ffffff",
  },
  {
    _id: "9",
    title: "CSS",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    background_color: "#38B2AC",
  },
  {
    _id: "10",
    title: "Redux ToolKit",
    imgurl:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png?raw=true",
    background_color: "#F7DF1E",
  },
  {
    _id: "11",
    title: "Git/Github",
    imgurl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    background_color: "#181717",
  },
  {
    _id: "12",
    title: "Bootstrap",
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    background_color: "#ffffff",
  },
  {
    _id: "13",
    title: "MongoDB",
    imgurl:
      "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
    background_color: "#ffffff",
  },
  {
    _id: "14",
    title: "Tailwind CSS",
    imgurl:
      "data:image/jpeg;base64,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",
    background_color: "#38B2AC",
  },
  {
    _id: "15",
    title: "Firebase",
    imgurl:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    background_color: "#000000",
  },
];


// Static Experience Data
const staticExp = [
  {
    year: "June 2024 - July 2024",
    roles: [
      {
        role_name: "Intern",
        company_name: "Oasis InfoByte",
      },
    ],
  },
  {
    year: "Sept 2024 - Jan 2025",
    roles: [
      {
        role_name: "Backend Developer",
        company_name: "Meensou India",
      },
    ],
  },
  {
    year: "Dec 2024 - Jan 2025",
    roles: [
      {
        role_name: "Freelance Full-Stack Developer",
        company_name: "Cryptocurrency Trading Website", 
      },
    ],
  },
  {
    year: "Feb 2025 - Mar 2025",
    roles: [
      {
        role_name: "Freelance Full-Stack Developer",
        company_name: "SureWin11: Cricket Investment Platform", 
      },
    ],
  },
];

const Skill = () => {
  return (
    <div className="skill" id="Skill">
      <h1>
        Skill & <span>Experiences</span>
      </h1>
      <div className="main">
        {/* Skills Section */}
        <motion.div className="img-container">
          {staticSkills.map((skillItem) => (
            <motion.div
              className="img-box"
              key={skillItem._id}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <div
                className="img"
                style={{ backgroundColor: skillItem.background_color }}
              >
                <img src={skillItem.imgurl} alt={skillItem.title} />
              </div>
              <p>{skillItem.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <div className="exp-container">
          {staticExp.map((exp, i) => (
            <div className="exp" key={i}>
              <h3 className="year">{exp.year}</h3>
              <div className="box-container">
                {exp.roles.map((r, j) => (
                  <div className="box" key={j}>
                    <h3>{r.role_name}</h3>
                    <p>{r.company_name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
