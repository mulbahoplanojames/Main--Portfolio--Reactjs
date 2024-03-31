//! Data about me from the Constant Component
import ABOUT_ME from "../../Constant/Constant";
import HeroButton from "../../Interfaces/Hero Button/HeroButton";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-y-9 place-items-center px-2 '>
				<div className=' md:w-heroContent1 w-full h-fit '>
					<motion.h1
						whileInView={{ opcity: 1, y: 0 }}
						initial={{ opcity: 0, y: -200 }}
						transition={{ duration: 1 }}
						className='md:text-6xl text-5xl font-bold pb-6'
					>
						Front-end <span className='text-2'>React</span> Developer
					</motion.h1>
					<motion.p
						whileInView={{ opcity: 1, x: 0 }}
						initial={{ opcity: 0, x: -300 }}
						transition={{ duration: 2 }}
						className='text-lg pb-8'
					>
						{ABOUT_ME}
					</motion.p>
					<HeroButton />
				</div>
				<motion.div
					whileInView={{ opcity: 1, x: 0 }}
					initial={{ opcity: 0, x: 300 }}
					transition={{ duration: 2 }}
					className='bg-red-600 py-20 md:w-heroContent2 h-80 md:h-80 order-first lg:order-last w-[340px] rounded-full'
				></motion.div>
			</div>
		</>
	);
};

export default Hero;
