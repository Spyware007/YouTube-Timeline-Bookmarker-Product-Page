import React from "react";
import classes from "./Extension.module.css";
import extensionImg from "../../Assets/extension.png";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const Extension = () => {
  return (
    <>
      <div id="extension" className={classes.extension_section}>
        <div className={classes.content}>
          <h1 className={classes.content_header}>
            How to add it to your browser?
          </h1>
          <p className={classes.content_para}>
            Currently we are not available at chrome web store.
          </p>
        </div>
        <div className={classes.bottom_section}>
          <ul className={classes.list_items}>
            <li className={classes.list_item}>
              Download the source Code from{" "}
              <Link
                to="/extension_files/YTTB.zip"
                download
                target="_blank"
                className={classes.repo_link}
                data-tip="Click to download"
              >
                here
              </Link>{" "}
              <ReactTooltip place="top" type="dark" effect="float" />, unzip it
              and save it on your local machine.
            </li>
            <li className={classes.list_item}>
              Open Browser and go to settings.
            </li>
            <li className={classes.list_item}>
              Go to extensions (manage) and activate developer mode (at top
              right corner).
            </li>
            <li className={classes.list_item}>
              Now click on Load unpacked on left side of the window!
            </li>
            <li className={classes.list_item}>
              Search and select the directory where you downloaded the code!
            </li>
          </ul>

          <div className={classes.img_div}>
            <img className={classes.img} src={extensionImg} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Extension;
