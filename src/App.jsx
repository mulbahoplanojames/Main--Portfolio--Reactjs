import React from "react";
import Navigation from "./Components/Navbar/Navigation";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/About/AboutMe";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Service/Services";
import Projects from "./Components/Projects/Projects";
import Testimonial from "./Components/Testimonial/Testimonial";
import ContactMe from "./Components/ContactMe/ContactMe";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <Experience />
      <Services />
      <Projects />
      <Testimonial />
      <ContactMe />
    </>
  );
};

export default App;
