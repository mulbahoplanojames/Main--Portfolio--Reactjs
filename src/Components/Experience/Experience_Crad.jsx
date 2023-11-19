import React from "react";
import "/src/Components/Experience/Experience.css";

export const ExperienceCrad = (props) => {
  return (
    <>
      <div class="experience_card">
        <p class="year">{props.year}</p>
        <h2 class="experience-main">{props.experienceMain}</h2>
        <p class="experiece-description">{props.experience_description}</p>
      </div>
    </>
  );
};

export default ExperienceCrad;
