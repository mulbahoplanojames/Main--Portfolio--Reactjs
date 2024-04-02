// My portfolio

import Navbar from "./Components/Layout/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Technologies from "./Components/Technologies/Technologies";
import Portfolio from "./Components/Portfolio/Portfolio";
import ContactForm from "./Components/Contact Fom/ContactForm";
import Footer from "./Components/Layout/Footer/Footer";

const App = () => {
	return (
		<>
			<Navbar />

			{/* // !This is to give the below components a fix width to be display in the middle */}
			<div className='container mx-auto md:px-10 px-2	mt-36'>
				<Hero />
				<Technologies />
				<Portfolio />
				<ContactForm />
			</div>
			<Footer />
		</>
	);
};

export default App;
