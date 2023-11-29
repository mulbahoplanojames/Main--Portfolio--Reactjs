import React from "react";
import Navbar from "./Components/NavigationBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Work from "./Components/Work/Work";
import Contactinfo from "./Components/ContactInfo/Contactinfo";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      <Contactinfo />
    </>
  );
};

export default App;
