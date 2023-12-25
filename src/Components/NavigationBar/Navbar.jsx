import React from "react";
import Styles from "/src/Components/NavigationBar/Navbar.module.css";
import oplanoimg from "/src/assets/oplano.jpeg.jpg";
import { MdOutlineMenu, MdOutlineCancelPresentation } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  const showMenu = () => {
    setMenuVisibility(true);
  };

  const navLinkStyle = {
    top: isMenuVisible ? "80px" : "-320px",
  };

  return (
    <>
      <nav>
        <Link to="/">
          <div className={Styles.logo}>
            <img src={oplanoimg} alt="My photo" className={Styles.img} />
          </div>
        </Link>

        <MdOutlineMenu className={Styles.showMenu} onClick={showMenu} />
        <div className={Styles.nav_links} style={navLinkStyle}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <MdOutlineCancelPresentation
            className={Styles.hideMenu}
            onClick={hideMenu}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
