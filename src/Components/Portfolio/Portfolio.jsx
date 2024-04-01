import { PROJECTS } from "../../Constant/Constant";
import ProjectCard from "../Project Card/ProjectCard";

const Portfolio = () => {
	return (
		<>
			<div className='md:px-10 px-3 mb-28 md:text-center text-left '>
				<h1 className='text-3xl uppercase font-bold text-2  pb-2'>Portfolio</h1>
				<p className='text-lg font-bold pb-6'>
					Each project is a distinct masterpiece.
				</p>

				{PROJECTS.map((project) => (
					<ProjectCard
						key={project.projectID}
						image={project.image}
						projectTitle={project.projectTitle}
						projectDescription={project.projectDescription}
						liveDemo={project.liveDemo}
						code={project.code}
						technologiesUsed={project.technologiesUsed.map((technology, i) => (
							<p
								key={i}
								className='shadow-md shadow-slate-400 px-4 py-1 rounded-lg font-bold'
							>
								{technology}
							</p>
						))}
					/>
				))}
			</div>
		</>
	);
};

export default Portfolio;