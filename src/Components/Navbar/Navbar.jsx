import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo_white from "../../Assets/logo_white.png";
import github from "../../Assets/github.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [model, setModel] = useState(false);

  const modelOpenHandler = () => {
    setModel(true);
  };
  const modelCloseHandler = () => {
    setModel(false);
  };
  return (
    <>
      {model && (
        <div onClick={modelCloseHandler} className={classes.model}>
          <div className={classes.model_div}>
            <di className={classes.cross}>
              <ion-icon name="add-outline"></ion-icon>
            </di>
            <a
              href="https://github.com/Spyware007/YouTube-Timeline-Bookmarker-Product-Page"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.model_link}
            >
              <button className={classes.btn}> Product Page</button>
            </a>
            <a
              href="https://github.com/Sriver27/YouTube-Timeline-Bookmarker"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.model_link}
            >
              <button className={classes.btn}> Extension</button>
            </a>
          </div>
        </div>
      )}
      <nav className={classes.navbar}>
        <div className={classes.img_container}>
          <img src={logo_white} alt="" className={classes.img} />
        </div>
        <ul className={classes.nav_links_container}>
          <HashLink smooth to="#home" className={classes.nav_link_container}>
            HOME
          </HashLink>
          <HashLink smooth to="#about" className={classes.nav_link_container}>
            ABOUT
          </HashLink>
          <HashLink
            smooth
            to="#extension"
            className={classes.nav_link_container}
          >
            EXTENSION
          </HashLink>
          <HashLink smooth to="#footer" className={classes.nav_link_container}>
            CONTACT US
          </HashLink>
        </ul>
        <div onClick={modelOpenHandler} className={classes.github_container}>
          <img src={github} alt="" className={classes.github_img} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
