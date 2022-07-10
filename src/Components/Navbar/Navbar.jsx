import React from "react";
import logo_white from "../../Assets/logo_white.png";
import github from "../../Assets/github.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.img_container}>
          <img src={logo_white} alt="" className={classes.img} />
        </div>
        <ul className={classes.nav_links_container}>
          <li className={classes.nav_link_container}>HOME</li>
          <li className={classes.nav_link_container}>ABOUT</li>
          <li className={classes.nav_link_container}>EXTENSION</li>
          <li className={classes.nav_link_container}>CONTACT US</li>
        </ul>
        <div className={classes.github_container}>
          <img src={github} alt="" className={classes.github_img} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
