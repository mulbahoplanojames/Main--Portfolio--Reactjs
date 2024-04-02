import { SiUpwork } from "react-icons/si";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
	return (
		<>
			<nav className='fixed top-0  w-full flex justify-between py-6   lg:px-16 px-4 shadow-lg  bg-white z-10'>
				<h1 className='text-2xl font-bold text-1'>Oplano M.</h1>

				<div className='flex items-center justify-center gap-5'>
					<a href='https://github.com/mulbahoplanojames' target='blank'>
						<SiUpwork className='text-2xl cursor-pointer hover:text-green-700' />
					</a>
					<a href='https://github.com/mulbahoplanojames' target='blank'>
						<FaGithub className='text-2xl cursor-pointer' />
					</a>
					<a href='https://github.com/mulbahoplanojames' target='blank'>
						<FaInstagram className='text-2xl cursor-pointer hover:text-red-700' />
					</a>
					<a href='https://github.com/mulbahoplanojames' target='blank'>
						<FaSquareXTwitter className='text-2xl cursor-pointer' />
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
