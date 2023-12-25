import React from "react";
import Navbar from "./Components/NavigationBar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Work from "./Components/Work/Work";
import Contactinfo from "./Components/ContactInfo/Contactinfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contactinfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
