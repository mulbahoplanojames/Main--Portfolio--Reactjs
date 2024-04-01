import DigitStemImg from "/src/assets/digitstem.png";
import DevTechImg from "/src/assets/Dev!Tech_Blog.png";

const ABOUT_ME = ` Hello there! I'm Oplano James Mulbah a web developer
& Software Engineer, very passionate and dedicated to
my work. With experience as a professional a wed developer, I
have acquired the skills and knowledge necessary to make your
project a success. I enjoy every step of the design process, from
discussion and collaboration. `;

export const PROJECTS = [
	{
		projectID: 1,
		image: DevTechImg,
		projectTitle: "Dev!Tech Blog and Ebooks",
		projectDescription:
			"A comprehensive blogging platform focusing on technology-related topics. Users can explore a wide range of ebooks and blogs. It provides a user-friendly interface to navigate through different sections of the web App. It also as a feature where users access OpenAi.",
		technologiesUsed: ["React", "Tailwind Css"],
		liveDemo: "https://devtech-ebook-blog.netlify.app/",
		code: "https://github.com/mulbahoplanojames/Dev-Tech-Ebook---Blog",
	},
	{
		projectID: 2,
		image: DevTechImg,
		projectTitle: "Boldo Company website",
		projectDescription:
			"This Project is for a web application the allow client and to unit with other business partners to buy products and view some of the latest blog posts..",
		technologiesUsed: ["React", "Vanilla CSS", "JavaScript"],
		liveDemo: "https://boldo-com.vercel.app/",
		code: "https://github.com/mulbahoplanojames/Boldo.com",
	},
	{
		projectID: 3,
		image: DigitStemImg,
		projectTitle: "React E-commerce web app",
		projectDescription:
			"A React-based e-commerce web application designed to provide users with an intuitive and seamless shopping experience. It includes features such as product browsing, cart management, secure payments, and user authentication.",
		technologiesUsed: ["React", "JavaScript", "HTML", "CSS"],
	},
	{
		projectID: 4,
		image: DigitStemImg,
		projectTitle: "Car Rental React website",
		projectDescription:
			"A React-based website for a car rental service, allowing users to browse available vehicles, make reservations, and manage bookings. It integrates with backend systems to provide real-time availability and pricing information.",
		technologiesUsed: ["React", "Tailwind"],
	},

	{
		projectID: 5,
		image: DigitStemImg,
		projectTitle: "Podia Clone",
		projectDescription:
			"A clone of the Podia platform, offering creators the ability to sell online courses, digital downloads, and memberships. It includes features for content creation, marketing, and monetization to empower creators in sharing their knowledge and products.",
		technologiesUsed: ["React", "Tailwind"],
	},
];

export default ABOUT_ME;
