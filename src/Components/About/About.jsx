import React from "react";
import "/src/Components/About/About.css";
import Button from "../ButtonsM/Button";
import ViewCard from "./ViewCard";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="about_wripper">
          <div className="about_content about_content_one">
            <p className="key_title">- NICE TO MEET YOU</p>
            <h2 className="name">Oplano James Mulbah</h2>
            <p className="position">
              Web <span className="aminate">Developer</span>
            </p>
            <Button />
          </div>
          <div className="about_content about_content_two">
            <p className="details details_one">
              Hello there! My name is Oplano James Mulbah. I am a web developer
              & Software Engineer, and I'm very passionate and dedicated to my
              work.
            </p>
            <p className="details">
              With +6 months experience as a professional a wed developer, I
              have acquired the skills and knowledge necessary to make your
              project a success. I enjoy every step of the design process, from
              discussion and collaboration.
            </p>
          </div>
        </div>

        <div className="view_card_wripper">
          <ViewCard
            number={"6"}
            description={"MONTHS OF EXPERIENCE"}
            className="one"
          />
          <ViewCard number={"10+"} description={"PROJECTS COMPLECTED"} />
          <ViewCard number={"1"} description={"HAPPY CLIENT"} />
        </div>
      </div>
    </>
  );
};

export default About;
