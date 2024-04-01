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
				<div className='projectContentWripper h-72'>
					<img
						src={DigitStemImg}
						alt=''
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='projectContentWripper h-72'></div>
			</div>
		</>
	);
};

export default ProjectCard;
