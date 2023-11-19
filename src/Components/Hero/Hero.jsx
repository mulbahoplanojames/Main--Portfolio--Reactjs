import React from "react";
import "/src/index.css";
import "/src/Components/Responsive.css";
import Button from "../Buttons/Button";
import Button2 from "../Buttons/Button2";

const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero">
          <h1 className="hero-title">
            Hi, I'm <span className="name">Oplano!</span> <br /> Creative Web
            Developer <br /> Base in Rwanda.
          </h1>

          <p className="hero-description">
            I'm a Rwanda based front‑end developer with
            <span className="name">6+ months</span> of experience
          </p>

          <div className="hero-btns">
            <a href="#">
              <Button />
            </a>
            <a href="WhatsApp:+250791676207">
              <Button2 />
            </a>
          </div>

          <div className="contact-me">
            <div className="contact-me-content">
              <div className="contact-me-icon">
                <img
                  src="src/assets/phone.gif"
                  alt="phoneIcon"
                  className="img"
                />
              </div>
              <div className="contact-me-url">
                <a href="#">
                  <p>+250791676207</p>
                </a>
              </div>
            </div>

            <div className="contact-me-content">
              <div className="contact-me-icon">
                <img src="src/assets/email.gif" alt="emailIcon" />
              </div>
              <div className="contact-me-url">
                <a href="#">
                  <p>mulbahjamesoplano@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero image-content"></div>
      </div>
    </>
  );
};

export default Hero;

// Styles are in the indexe.css file
