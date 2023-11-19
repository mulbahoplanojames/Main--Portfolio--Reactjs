import React from "react";
import "/src/index.css";
// import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="src/assets/oplano.jpeg.jpg" alt="MyPicture" />
        </div>
        <div className="nav_links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about_wripper">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#recent_projects">Protfolio</a>
            </li>
            <li>
              <a href="#contact_me">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

// Styles are in the indexe.css file
