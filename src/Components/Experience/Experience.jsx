import React from "react";
import "/src/Components/Experience/Experience.css";
import ExperienceCrad from "./Experience_Crad";

const Experience = () => {
  return (
    <>
      <div id="experience">
        <p class="experience_title">Experiece</p>
        <h1 class="experience_sub_title">Everything about me!</h1>

        <div className="experience_wripper">
          <ExperienceCrad
            year={"2022-present"}
            experienceMain={"Web developer"}
            experience_description={` I'm a passionate Front-end Software Developer with a focus on web technologies. Proficient in HTML, CSS, and JavaScript.`}
          />
          <ExperienceCrad
            year={"2023-present"}
            experienceMain={"Freelancer"}
            experience_description={` I'm a Front-end Freelancer with a focus on web technologies. Proficient in HTML, CSS, and JavaScript.`}
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
