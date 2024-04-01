import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";

const Technologies = () => {
	return (
		<>
			<div className='mt-24 text-center mb-28'>
				<motion.h1
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -100 }}
					transition={{ duration: 1 }}
					className='text-4xl pb-8'
				>
					Technologies
				</motion.h1>

				<div className='flex flex-wrap gap-10 justify-center items-center'>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -40 }}
						transition={{ duration: 0.5 }}
						className='TechIconWripper border-orange-500 hover:shadow-orange-500'
					>
						<FaHtml5 className='icon text-orange-600 ' />
						<p>Html</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 80 }}
						transition={{ duration: 0.5 }}
						className='TechIconWripper border-blue-700 hover:shadow-blue-700'
					>
						<FaCss3Alt className='icon text-blue-700' />
						<p>Css3</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 80 }}
						transition={{ duration: 1 }}
						className='TechIconWripper border-3 hover:shadow-3'
					>
						<BiLogoJavascript className='icon text-3' />
						<p>JavaScript</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 80 }}
						transition={{ duration: 0.5 }}
						className='TechIconWripper border-4 hover:shadow-4'
					>
						<FaReact className='icon text-4' />
						<p>React Js</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 80 }}
						transition={{ duration: 1 }}
						className='TechIconWripper border-blue-500 hover:shadow-blue-500'
					>
						<BiLogoTailwindCss className='icon text-blue-500' />
						<p>Tailwind Css</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: 40 }}
						transition={{ duration: 0.5 }}
						className='TechIconWripper border-red-600 hover:shadow-red-600 '
					>
						<FaGitAlt className='icon text-red-500' />
						<p>Git</p>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Technologies;
