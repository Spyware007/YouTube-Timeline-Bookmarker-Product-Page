import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader_slide}>
      <svg className={classes.svg}>
        <circle cx="57" cy="57" r="52" className={classes.circle} />

        <circle cx="57" cy="57" r="52" className={classes.loader} />
      </svg>
    </div>
  );
};

export default Loader;
