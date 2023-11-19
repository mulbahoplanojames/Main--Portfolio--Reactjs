import React from "react";
import "/src/Components/Projects/projects.css";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <>
      <div id="recent_projects">
        <p class="project_title">Projects</p>
        <h1 class="project_main_title">Recent projects completed</h1>

        <div className="recent_projects_wripper">
          <ProjectsCard
            image={<img src="src/assets/math4kid.png" alt="MathForKidsApp" />}
            title={"Math4kids"}
            description={
              <a
                href="https://mulbahoplanojames.github.io/Math-4-Kids/"
                target="_blank"
              >
                Kid Math application
              </a>
            }
          />
          <ProjectsCard
            image={<img src="src/assets/digitstem.png" alt="DigitstemSlone" />}
            title={"DigitstemSlone"}
            description={
              <a
                href="https://mulbahoplanojames.github.io/Digitstem-Clone/"
                target="_blank"
              >
                Digitstem Official
              </a>
            }
          />
          <ProjectsCard
            image={<img src="src/assets/starbuck.png" alt="StarbuckClone" />}
            title={"StarbuckClone"}
            description={
              <a href="/" target="_blank">
                Starbuck LTD.
              </a>
            }
          />
          <ProjectsCard
            image={<img src="src/assets/podia.jpeg.png" alt="PodiaColne" />}
            title={"PodiaColne"}
            description={
              <a
                href="https://mulbahoplanojames.github.io/Podia-Clone/"
                target="_blank"
              >
                Podia Official
              </a>
            }
          />
          <ProjectsCard
            image={
              <img src="src/assets/autocolor.png" alt="AutoColerGenerator" />
            }
            title={"AutoColerGenerator"}
            description={
              <a
                href="https://mulbahoplanojames.github.io/AutoColor-Generator/"
                target="_blank"
              >
                Generate auto colors
              </a>
            }
          />
          <ProjectsCard
            image={<img src="src/assets/manage.png" alt="ManageLandingPage" />}
            title={"ManageLandingPage"}
            description={
              <a
                href="https://mulbahoplanojames.github.io/Manage-landing-page-master/"
                target="_blank"
              >
                Developers Dreams
              </a>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
