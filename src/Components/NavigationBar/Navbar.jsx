import React from "react";
import Styles from "/src/Components/NavigationBar/Navbar.module.css";
import oplanoimg from "/src/assets/oplano.jpeg.jpg";
import { MdOutlineMenu, MdOutlineCancelPresentation } from "react-icons/md";
import { useState, useEffect } from "react";

const Navbar = () => {
  // const [navLinksStyle, setNavLinksStyle] = useState({ top: "90px" });
  // const [navLinksStyle2, setNavLinksStyle2] = useState({ top: "-400px" });

  // const handleHideMenu = () => {
  //   setNavLinksStyle({ top: "-400px" });
  // };

  // useEffect(() => {
  //   const hideMenu = document.querySelector(".hideMenu");
  //   hideMenu.addEventListener("click", handleHideMenu);

  //   return () => {
  //     hideMenu.removeEventListener("click", handleHideMenu);
  //   };
  // }, []);

  // const handleShowMenu = () => {
  //   setNavLinksStyle2({ top: "90px" });
  // };

  // useEffect(() => {
  //   const showMenu = document.querySelector(".showMenu");
  //   showMenu.addEventListener("click", handleShowMenu);

  //   return () => {
  //     showMenu.removeEventListener("click", handleShowMenu);
  //   };
  // }, []);
  return (
    <>
      <nav>
        <div className={Styles.logo}>
          <img src={oplanoimg} alt="My photo" className={Styles.img} />
        </div>

        <div
          className={Styles.nav_links}
          // style={(navLinksStyle, navLinksStyle2)}
        >
          <MdOutlineCancelPresentation
            className={Styles.hideMenu}
            // onClick={handleHideMenu}
          />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#works">Work</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <MdOutlineMenu className={Styles.showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
