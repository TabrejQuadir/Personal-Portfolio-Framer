import React from "react";
import mailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/mobile.png";
import WhatsappIcon from "../../assets/what.png"
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer" id="Contact">
      <div>
      <h1>
        Take coffee & <span>chat with me</span>
      </h1>
      </div>
      
      <div className="contact">
        <div className="box">
          <img src={mailIcon} alt="" />
          <a href="mailto:tabrezquadir6@gmail.com">
            tabrezquadir6@gmail.com
          </a>
        </div>
        <div className="box">
          <img src={phoneIcon} alt="" />
          <a href="tel:+919875637741">+919875637741</a>
        </div>
        <div className="box">
          <img src={WhatsappIcon} alt="" />
          <a href="https://wa.me/9875637741" target="_blank"  rel="noopener noreferrer">Whatsapp</a>
        </div>
      </div>


    </div>
  );
};

export default Footer;
