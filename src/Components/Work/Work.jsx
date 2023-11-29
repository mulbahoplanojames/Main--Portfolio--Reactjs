import React from "react";
import "/src/Components/Work/Work.css";
import RecentWorkCard from "../RecentWorkCard/RecentWorkCard";
import math4kidsImg from "/src/assets/math4kid.png";
import manageimg from "/src/assets/manage.png";
import digitstemimg from "/src/assets/digitstem.png";
import PodiaImg from "/src/assets/podia.jpeg.png";
import starbuckImg from "/src/assets/starbuck.png";
import autocolor from "/src/assets/autocolor.png";

const Work = () => {
  return (
    <>
      <section id="works">
        <h1 className="work_title">Portfolio</h1>
        <p className="description">
          Thses are some of my recent projects that i develop.
        </p>
        <div className="recent_works_wripper">
          <RecentWorkCard
            img={
              <img src={math4kidsImg} alt="math4kids" className="project_img" />
            }
            project_title={"Math 4 kids"}
          />
          <RecentWorkCard
            img={
              <img src={manageimg} alt="math4kids" className="project_img" />
            }
            project_title={"Manage landing site"}
          />
          <RecentWorkCard
            img={
              <img src={digitstemimg} alt="math4kids" className="project_img" />
            }
            project_title={"DigitStem Clone"}
          />
          <RecentWorkCard
            img={<img src={PodiaImg} alt="math4kids" className="project_img" />}
            project_title={"Podia Clone "}
          />
          <RecentWorkCard
            img={
              <img src={starbuckImg} alt="math4kids" className="project_img" />
            }
            project_title={"Starbuck Clone"}
          />
          <RecentWorkCard
            img={
              <img src={autocolor} alt="math4kids" className="project_img" />
            }
            project_title={"Auto Color Generator"}
          />
        </div>
      </section>
    </>
  );
};

export default Work;
