import React, { useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { TbMenu } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

const Navbar = () => {
  const links = ["home", "About", "Work", "Skill", "Contact"];
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const downloadResume = () => {
    // Directly use the path to your resume inside the public folder.
    const pdfUrl = "/TabrejQuadir.pdf"; // Make sure your file is named "resume.pdf" and is located in the public folder.
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank"; // Opens in a new tab, if desired.
    link.download = "TabrejQuadir.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Tabrej</h1>
      <div className="links">
        <ul>
          {links.map((item) => (
            <a href={`#${item}`} key={item}>
              <li>
                <div className="circle"></div>
                {item}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <button className="resume" onClick={downloadResume}>
        Resume <FiExternalLink />
      </button>
      <div className="toggle">
        <TbMenu onClick={toggleMenu} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="toggle-div"
          >
            <HiX onClick={toggleMenu} className="toggle-cross" />
            <ul>
              {links.map((item) => (
                <a href={`#${item}`} key={item} onClick={toggleMenu}>
                  <li>{item}</li>
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
