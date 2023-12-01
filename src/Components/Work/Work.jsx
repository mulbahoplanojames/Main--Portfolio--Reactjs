import React from "react";
import Styles from "/src/Components/Work/Work.module.css";
import Styles2 from "/src/Components/RecentWorkCard/RecentWorkCard.module.css";
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
      <section id={Styles.works}>
        <h1 className={Styles.work_title}>Portfolio</h1>
        <p className={Styles.description}>
          Thses are some of my recent projects.
        </p>
        <div className={Styles.recent_works_wripper}>
          <RecentWorkCard
            img={
              <img
                src={math4kidsImg}
                alt="math4kids"
                className={Styles2.project_img}
              />
            }
            project_title={"Math 4 kids"}
          />
          <RecentWorkCard
            img={
              <img
                src={manageimg}
                alt="math4kids"
                className={Styles2.project_img}
              />
            }
            project_title={"Manage landing site"}
          />
          <RecentWorkCard
            img={
              <img
                src={digitstemimg}
                alt="math4kids"
                className={Styles2.project_img}
              />
            }
            project_title={"DigitStem Clone"}
          />
          <RecentWorkCard
            img={
              <img
                src={PodiaImg}
                alt="math4kids"
                className={Styles2.project_img}
              />
            }
            project_title={"Podia Clone "}
          />
          <RecentWorkCard
            img={
              <img
                src={starbuckImg}
                alt="math4kids"
                className={Styles2.project_img}
              />
            }
            project_title={"Starbuck Clone"}
          />
          <RecentWorkCard
            img={
              <img
                src={autocolor}
                alt="math4kids"
                className={Styles2.project_img}
              />
            }
            project_title={"Auto Color Generator"}
          />
        </div>
      </section>
    </>
  );
};

export default Work;
