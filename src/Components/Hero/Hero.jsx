import React from "react";
import "/src/Components/Hero/Hero.css";
import Button from "../ButtonsM/Button";
import Button2 from "../ButtonsM/Button2";
import oplanoimg from "/src/assets/oplano.jpeg.jpg";
import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import "animate.css";

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div className="hero_wripper">
          <div className="hero_content hero_content_one animate__animated animate__fadeInDownBig">
            <h1 className="title">
              Hi, I'm <span className="aminate">Oplano!</span>
              <br /> Creative Web Developer Base in Rwanda.
            </h1>
            <p className="description">
              I'm a Rwanda based front‑end developer with{" "}
              <span className="aminate">6+ months</span> of experience.
            </p>
            <div className="btns">
              <Button />
              <Button2 />
            </div>
            <p className="contact">
              <MdMailOutline className="icon" /> mulbahjamesoplano@gmail.com
            </p>
            <p className="contact">
              <MdOutlinePhoneInTalk className="icon" /> +250791676207
            </p>
          </div>
          <div className="hero_content hero_content_two animate__animated animate__fadeInUpBig">
            <img src={oplanoimg} alt="" className="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
