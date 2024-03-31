import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";

const Technologies = () => {
	return (
		<>
			<div className='mt-24 text-center mb-80'>
				<h1 className='text-4xl pb-8'>Technologies</h1>

				<div className='flex flex-wrap gap-6 justify-center items-center'>
					<div className='TechIconWripper'></div>
					<div className='TechIconWripper'></div>
					<div className='TechIconWripper'></div>
					<div className='TechIconWripper'></div>
					<div className='TechIconWripper'></div>
					<div className='TechIconWripper'></div>
				</div>
			</div>
		</>
	);
};

export default Technologies;
