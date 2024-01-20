import React from "react";
import Styles from "/src/Components/NavigationBar/Navbar.module.css";
import oplanoimg from "/src/assets/oplano.jpeg.jpg";
import { MdOutlineMenu, MdOutlineCancelPresentation } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navLinks from "../../Constant/Constant";

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
            {navLinks.map((navink) => {
              return (
                <li key={navink.label}>
                  <Link to={navink.href}>{navink.label}</Link>
                </li>
              );
            })}
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
