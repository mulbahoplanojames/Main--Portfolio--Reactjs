import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
// import Technologies from "./Components/Technologies/Technologies";

const App = () => {
	return (
		<>
			<Navbar />

			{/* // !This is to give the below components a fix width to be display in the middle */}
			<div className='container mx-auto md:px-10 px-2	mt-40'>
				<Hero />
				{/* <Technologies /> */}
			</div>
		</>
	);
};

export default App;
