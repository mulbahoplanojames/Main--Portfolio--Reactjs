import React from "react";
import "/src/Components/NavigationBar/Navbar.css";
import oplanoimg from "/src/assets/oplano.jpeg.jpg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={oplanoimg} alt="My photo" className="img" />
        </div>

        <div className="nav_links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Experience</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
