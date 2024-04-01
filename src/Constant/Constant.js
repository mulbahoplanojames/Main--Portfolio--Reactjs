import DigitStemImg from "/src/assets/digitstem.png";
import DevTechImg from "/src/assets/Dev!Tech_Blog.png";
import BoldImg from "/src/assets/Bold.png";
import Math4kidsImg from "/src/assets/math4kids.png";

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
		image: BoldImg,
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
		projectTitle: "DigitStem Clone Landing Page",
		projectDescription:
			"This project is a front-end clone of the Digitstem platform that connects vendors to buyers through active affiliates. It offers various features and services aimed at facilitating online business transactions.",
		technologiesUsed: ["HTML", "Vanilla CSS", "JavaScript"],
		liveDemo: "https://mulbahoplanojames.github.io/Digitstem-Clone/",
		code: "https://github.com/mulbahoplanojames/Digitstem-Clone",
	},
	{
		projectID: 4,
		image: Math4kidsImg,
		projectTitle: "Math 4 Kids, a math game for Kids",
		projectDescription:
			"This is a web application designed to help kids learn Mathematics in a fun and interactive way. This project makes kids to learn mathematics in an easy and simple way. The project utilizes HTML, CSS, and JavaScript.",
		technologiesUsed: ["HTML", "Vanilla CSS", "Vanilla JavaScript"],
		liveDemo: "https://mulbahoplanojames.github.io/Math-4-Kids/",
		code: "https://github.com/mulbahoplanojames/Math-4-Kids",
	},

	{
		projectID: 5,
		image: DigitStemImg,
		projectTitle: "Podia Clone",
		projectDescription:
			"A clone of the Podia platform, offering creators the ability to sell online courses, digital downloads, and memberships. It includes features for content creation, marketing, and monetization to empower creators in sharing their knowledge and products.",
		technologiesUsed: ["React", "Tailwind"],
		liveDemo: "https://boldo-com.vercel.app/",
		code: "https://github.com/mulbahoplanojames/Boldo.com",
	},
];

export default ABOUT_ME;
