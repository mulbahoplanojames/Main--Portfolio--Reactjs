import DigitStemImg from "/src/assets/digitstem.png";

const ProjectCard = ({
	image,
	projectTitle,
	projectDescription,
	technologiesUsed,
}) => {
	return (
		<>
			<div className='projectCard'>
				<div className='projectContentWripper h-72  shadow-lg shadow-gray-500'>
					<img src={image} alt='' className='w-full h-full object-cover' />
				</div>
				<div className='projectContentWripper h-fit p-4'>
					<p className='text-lg font-bold pb-3'>{projectTitle}</p>
					<p className='text-left text-lg pb-6'>{projectDescription}</p>
					<div className='flex gap-x-4'>{technologiesUsed}</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
