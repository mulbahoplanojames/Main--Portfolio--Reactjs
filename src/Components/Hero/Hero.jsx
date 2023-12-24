import React from "react";
import Styles from "/src/Components/Hero/Hero.module.css";
import Button from "../../UI/ButtonsM/Button";
import Button2 from "../../UI/ButtonsM/Button2";
import oplanoimg from "/src/assets/oplano.jpeg.jpg";
import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import "animate.css";

const Hero = () => {
  return (
    <>
      <div id={Styles.hero}>
        <div className={Styles.hero_wripper}>
          <div className={`${Styles.hero_content} ${Styles.hero_content_one}`}>
            <h1 className={Styles.title}>
              Hi, I'm <span className={Styles.aminate}>Oplano!</span>
              <br /> Creative Web Developer Base in Rwanda.
            </h1>
            <p className={Styles.description}>
              I'm a Rwanda based front‑end developer with
              <span className={Styles.aminate}>6+ months</span> of experience.
            </p>
            <div className={Styles.btns}>
              <Button />
              <Button2 />
            </div>
            <p className={Styles.contact}>
              <MdMailOutline className={Styles.icon} />{" "}
              mulbahjamesoplano@gmail.com
            </p>
            <p className={Styles.contact}>
              <MdOutlinePhoneInTalk className={Styles.icon} /> +250791676207
            </p>
          </div>
          <div className={`${Styles.hero_content} ${Styles.hero_content_two}`}>
            <img src={oplanoimg} alt="" className="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
