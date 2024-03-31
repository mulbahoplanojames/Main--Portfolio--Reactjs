import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";

const Technologies = () => {
	return (
		<>
			<div className='mt-24 text-center mb-80'>
				<h1 className='text-4xl pb-8'>Technologies</h1>

				<div className='flex flex-wrap gap-10 justify-center items-center'>
					<div className='TechIconWripper border-orange-500 hover:shadow-orange-500'>
						<FaHtml5 className='icon text-orange-600 ' />
						<p className='text-orange-600'>Html</p>
					</div>
					<div className='TechIconWripper border-blue-700 hover:shadow-blue-700'>
						<FaCss3Alt className='icon text-blue-700' />
						<p>Css3</p>
					</div>
					<div className='TechIconWripper border-3 hover:shadow-3'>
						<BiLogoJavascript className='icon text-3' />
						<p>JavaScript</p>
					</div>
					<div className='TechIconWripper border-4 hover:shadow-4'>
						<FaReact className='icon text-4' />
						<p>React Js</p>
					</div>
					<div className='TechIconWripper border-blue-500 hover:shadow-blue-500'>
						<BiLogoTailwindCss className='icon text-blue-500' />
						<p>Tailwind Css</p>
					</div>
					<div className='TechIconWripper border-red-600 hover:shadow-red-600 '>
						<FaGitAlt className='icon text-red-500' />
						<p>Git</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Technologies;
