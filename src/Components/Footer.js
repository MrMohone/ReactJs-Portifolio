import React from "react";
import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Hossana</p>
              <p>Ethiopia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +251 25580837
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mo37085825@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            I'm Mohemmed,
            <br />
            welcome to my portifolio! I show my amazing design and development
            on creating highly user-friendly and responsive front-end websit
          </p>
          <div className="social">
            <Link to="https://www.facebook.com/mam.awol.5">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="https://github.com/MrMohone">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>

            <Link to="www.linkedin.com/in/mohammed-awol1">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
