//! Data about me from the Constant Component
import ABOUT_ME from "../../Constant/Constant";
import Button from "../../Interfaces/Button/Button";
import { motion } from "framer-motion";
import Hero_Iamge from "/src/assets/oplano.jpg";

const Hero = () => {
	return (
		<>
			<div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-9 place-items-center px-2 '>
				<div className=' md:w-heroContent1 w-full h-fit '>
					<motion.h1
						whileInView={{ opcity: 1, y: 0 }}
						initial={{ opcity: 0, y: -70 }}
						transition={{ duration: 1 }}
						className='md:text-5xl text-5xl font-bold pb-6'
					>
						Front-end <span className='text-2'>React</span> Developer
					</motion.h1>
					<motion.p
						whileInView={{ opcity: 1, x: 0 }}
						initial={{ opcity: 0, x: -40 }}
						transition={{ duration: 2 }}
						className='text-lg pb-8'
					>
						{ABOUT_ME}
					</motion.p>
					<Button text={"Download Resume"} />
				</div>
				<motion.div
					whileInView={{ opcity: 1, y: 0 }}
					initial={{ opcity: 0, y: -100 }}
					transition={{ duration: 1 }}
					className='md:w-heroContent2_lg w-heroContent2_Sm  h-80 md:h-80 order-first md:order-last  rounded-full overflow-hidden '
				>
					<img
						src={Hero_Iamge}
						alt='My image'
						className='w-full h-full object-cover'
					/>
				</motion.div>
			</div>
		</>
	);
};

export default Hero;
