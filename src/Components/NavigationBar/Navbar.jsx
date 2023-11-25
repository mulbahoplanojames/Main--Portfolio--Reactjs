import React from "react";
import "/src/Components/NavigationBar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="" alt="" />
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
