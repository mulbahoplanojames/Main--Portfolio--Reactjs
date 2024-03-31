//! Data about me from the Constant Component
import ABOUT_ME from "../../Constant/Constant";
import HeroButton from "../../Interfaces/Hero Button/HeroButton";

const Hero = () => {
	return (
		<>
			<div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-y-9 place-items-center px-2 '>
				<div className=' md:w-heroContent1 w-full h-fit '>
					<h1 className='md:text-6xl text-5xl font-bold pb-6'>
						Front-end <span className='text-2'>React</span> Developer
					</h1>
					<p className='text-lg pb-8'>{ABOUT_ME}</p>
					<HeroButton />
				</div>
				<div className='bg-red-600 py-20 md:w-heroContent2 h-80 md:h-80 order-first lg:order-last w-[340px] rounded-full'></div>
			</div>
		</>
	);
};

export default Hero;
