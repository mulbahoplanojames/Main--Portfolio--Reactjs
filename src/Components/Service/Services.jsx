import React from "react";
import "/src/Components/Service/Services.css";
import Services_Card from "./Services_Card";

export const Services = () => {
  return (
    <>
      <div id="services">
        <p className="service_title">Servises</p>
        <h1 className="service_main_title">My services</h1>

        <div className="services_wripper">
          <Services_Card
            service_num={"01"}
            service_icon={
              <img src="src/assets/wed-design.GIF" alt="Webdesign" />
            }
            service_content_title={"Web Design"}
            service_description={`I provide Execellent and professional work when it comes to frontEnd development in the following technologies, HTML, CSS, and JavaScript`}
          />
          <Services_Card
            service_num={"02"}
            service_icon={
              <img src="src/assets/freelancer.png" alt="Freelancing" />
            }
            service_content_title={"Freelancing"}
            s
            service_description={`I'm a Front-end Freelancer with a focus on web technologies. Proficient in HTML, CSS, and JavaScript.`}
          />
          <Services_Card
            service_num={"03"}
            service_icon={
              <img src="src/assets/handshake.GIF" alt="Amination" />
            }
            service_content_title={"Freelancing"}
            s
            service_description={`I create responsive websites with customize and amazing aminations that provide an excellent user experience and interface.`}
          />
        </div>

        <div className="intro-video">
          <video src="video.mp4" controls></video>
          <p className="intro">
            <span className="intro-title">Intro Video</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
