import { motion } from "framer-motion";

const HeroButton = ({ text }) => {
	return (
		<>
			<motion.button
				whileInView={{ opcity: 1, x: 0 }}
				initial={{ opcity: 0, x: -100 }}
				transition={{ duration: 1 }}
				className='bg-2 px-6 py-2 rounded-md text-lg text-white hover:opacity-55 border-none'
			>
				{text}
			</motion.button>
		</>
	);
};

export default HeroButton;
