import React from "react";
import "/src/index.css";
import "/src/Components/Responsive.css";
import Button from "../Buttons/Button";
import WorkViews from "./WorkViews";

const AboutMe = () => {
  return (
    <>
      <div id="about_wripper">
        <div className="about-content about-content-1">
          <div className="about-content-main">
            <p className="about-content-title">- Nice to meet you</p>
            <h1 className="developer-name">Oplano James Mulbah</h1>
            <p className="position">
              Web <span className="name">Developer</span>
            </p>
            <Button />
          </div>
        </div>

        <div className="about-content about-content-one">
          <div className="about-content-main-two">
            <p className="about-description">
              Hello there! My name is Oplano James Mulbah. I am a web developer
              & Software Engineer, and I'm very passionate and dedicated to my
              work. <br />
              <br /> With +6 months experience as a professional a wed
              developer, I have acquired the skills and knowledge necessary to
              make your project a success. I enjoy every step of the design
              process, from discussion and collaboration.
            </p>

            <p>
              <span className="personalities">Age</span>
              <span className="personalities p-two">Born in</span>
              <span className="personalities p-three">Mail</span>
              <span className="personalities p-four">Phone</span>
            </p>
            <p>
              <span className="personalities-main">20</span>
              <span className="personalities-main p-two">Liberia, Africa</span>
              <span className="personalities-main  p-five">
                mulbahjamesoplano@gmail.com
              </span>
              <span className="personalities-main p-main-four">
                +250791676207
              </span>
            </p>
          </div>
        </div>
      </div>

      <WorkViews />
    </>
  );
};

export default AboutMe;

// Styles are in the indexe.css file
