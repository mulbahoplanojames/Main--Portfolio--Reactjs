import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<>
			<div className='bg-1 w-full py-16 md:px-44 px-8 flex md:justify-between justify-center items-center gap-y-12 flex-wrap  '>
				<motion.p
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -30 }}
					transition={{ duration: 0.6 }}
					className='text-white md:text-2xl text-xl'
				>
					Copyright &copy; 2024. Oplano M.
				</motion.p>
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 30 }}
					transition={{ duration: 0.6 }}
					className='flex items-center justify-center gap-x-10'
				>
					<a href='https://github.com/mulbahoplanojames' target='blank'>
						<FaGithub className='text-4xl text-white cursor-pointer' />
					</a>
					<a href='https://github.com/mulbahoplanojames' target='blank'>
						<SiUpwork className='text-4xl text-white cursor-pointer' />
					</a>
				</motion.div>
			</div>
		</>
	);
};

export default Footer;
