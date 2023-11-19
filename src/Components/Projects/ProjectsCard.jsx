import React from "react";
import "/src/Components/Projects/projects.css";

const ProjectsCard = (props) => {
  // Destructing the props
  const { image, title, description, link } = props;

  return (
    <div className="recent_projects_card_wripper">
      <div class="project_content_head">{image}</div>
      <p class="project_title">{title}</p>
      <h2 class="project_description">{description}</h2>
    </div>
  );
};

export default ProjectsCard;
