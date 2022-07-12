import React from "react";
import classes from "./Footer.module.css";

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
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=omgawande&button_colour=fff&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=282828" />
            </a>
            {/* <btn></btn> */}
          </div>
        </div>
        {/* Bottom */}
        {/* <div className={classes.}>
          <div className={classes.}></div>
          <div className={classes.}></div>
          <div className={classes.}></div>
          <div className={classes.}></div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
