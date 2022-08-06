import React from "react";
import classes from "./Extension.module.css";
import extensionImg from "../../Assets/extension.png";

const Extension = () => {
  return (
    <>
      <div className={classes.extension_section}>
        <div className={classes.content}>
          <h1 className={classes.content_header}>
            How to add it to your browser?
          </h1>
          <p className={classes.content_para}>
            Currently we are not available at chrome web store.
          </p>
        </div>
        <div className={classes.bottom_section}>
          <div className={classes.list_container}>
            <ul className={classes.list_items}>
              <li className={classes.list_item}>
                Download the source Code from here and save it on your local
                machine.
              </li>
              <li className={classes.list_item}>
                Open Browser and go to settings.
              </li>
              <li className={classes.list_item}>
                Go to extensions and activate developer mode (at top right
                corner).
              </li>
              <li className={classes.list_item}>
                Now click on Load unpacked on left side of the window!
              </li>
              <li className={classes.list_item}>
                Search and select the directory where you downloaded the code!
              </li>
            </ul>
          </div>
          <div>
            <img className={classes.img} src={extensionImg} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Extension;
