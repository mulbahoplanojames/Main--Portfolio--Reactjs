import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
const ProjectCard = ({
	image,
	projectTitle,
	projectDescription,
	technologiesUsed,
	liveDemo,
	code,
}) => {
	return (
		<>
			<div className='projectCard'>
				<div className='projectContentWripper h-72  shadow-lg shadow-gray-500'>
					<a href={liveDemo} target='blank'>
						<img src={image} alt='' className='w-full h-full object-cover' />
					</a>
				</div>
				<div className='projectContentWripper h-fit p-4'>
					<p className='text-[1.3rem] font-bold pb-3'>{projectTitle}</p>
					<p className='text-left text-lg pb-6'>{projectDescription}</p>
					<div className='flex gap-x-4 flex-wrap gap-y-4 mb-8'>
						{technologiesUsed}
					</div>
					<div className='flex md:gap-x-10 gap-x-8'>
						<a href={code} target='blank'>
							<p className='text-lg font-bold flex justify-center items-center gap-x-2'>
								Code <FaGithub />
							</p>
						</a>
						<a href={liveDemo} target='blank'>
							<p className='text-lg font-bold flex justify-center items-center gap-x-2'>
								Live demo <BsArrowUpRightSquareFill />
							</p>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
