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
        <div className={classes.nav_links_container}>
          <div className={classes.nav_link_container}>HOME</div>
          <div className={classes.nav_link_container}>ABOUT</div>
          <div className={classes.nav_link_container}>EXTENSION</div>
          <div className={classes.nav_link_container}>CONTACT US</div>
        </div>
        <div className={classes.github_container}>
          <img src={github} alt="" className={classes.github_img} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
