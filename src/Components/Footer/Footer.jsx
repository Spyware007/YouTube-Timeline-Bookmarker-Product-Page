import React from "react";
import classes from "./Footer.module.css";
import logo from "../../Assets/logo_dark.png";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer_top}>
          <div className={classes.footer_content}>
            <p className={classes.footer_content1}>
              Help us publish this extension on Chrome!
            </p>
            <p className={classes.footer_content2}>Thank you !</p>
          </div>
          <div className={classes.footer_btn}>
            <a href="https://www.buymeacoffee.com/omgawande">
              <img
                alt="buymeacoffee"
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=omgawande&button_colour=fff&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=282828"
              />
            </a>
            {/* <btn></btn> */}
          </div>
        </div>
        {/* Bottom */}
        <div className={classes.footer_bottom}>
          <div className={classes.divider}>
            <div className={classes.footer_copywrite}>
              <img src={logo} alt="logo" className={classes.footer_logo} />
              <h4>
                <span className={classes.grey}>©</span> 2022
              </h4>
            </div>
            <div className={classes.footer_bottom_content}>
              <h2 className={classes.content_top}>Our Creators</h2>
              <div>
                <h1 className={classes.links}>Spider</h1>
                <h1 className={classes.links}>Sriver</h1>
                <h1 className={classes.links}>Dream</h1>
              </div>
            </div>
          </div>
          <div className={classes.divider}>
            <div className={classes.footer_bottom_content}>
              <h2 className={classes.content_top}>Links</h2>
              <div>
                <h1 className={classes.links}>Home</h1>
                <h1 className={classes.links}>About Us</h1>
                <h1 className={classes.links}>Extension</h1>
              </div>
            </div>
            <div className={classes.footer_bottom_content}>
              <h2 className={classes.content_top}>⭐️ Repos</h2>
              <div>
                <h1 className={classes.links}>Extension Page</h1>
                <h1 className={classes.links}>Extension</h1>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={classes.dash}></div>
        <h4 className={classes.dash_content}>©2022 by YTTB</h4>
      </div>
    </>
  );
};

export default Footer;
