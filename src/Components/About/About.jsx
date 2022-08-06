import React from "react";
import classes from "./About.module.css";
import aboutimg from "../../Assets/aboutimg.png";
import bookmark from "../../Assets/bookmark.png";

const About = () => {
  return (
    <>
      <div id="about" className={classes.about_section}>
        <div className={classes.about_top}>
          <h1 className={classes.about_text}>About</h1>
          <div className={classes.content1}>
            <img className={classes.about_img} src={aboutimg} alt="" />
            <p className={classes.about_para}>
              YouTube provides you the options to bookmark videos and playlists
              so that you can easily acces them later without any trouble. But
              what if you want to save the particular timestamps in a long
              video.Youtube Timeline Bookmarker allows you to do this.
            </p>
          </div>
        </div>
        <div className={classes.about_bottom}>
          <div className={classes.content2}>
            <h1 className={classes.content2_heading}>
              Perfect for bookmarking:
            </h1>
            <ul className={classes.list_items}>
              <li className={classes.list_item}>Great movie moments</li>
              <li className={classes.list_item}>Lecture highlights</li>
              <li className={classes.list_item}>
                Coding tricks in long coding videos
              </li>
              <li className={classes.list_item}>
                Instructions in cooking videos
              </li>
              <li className={classes.list_item}>Favourite song moments</li>
              <li className={classes.list_item}>Sport highlights</li>
              <li className={classes.list_item}>
                {" "}
                &amp; many more amazing things...
              </li>
            </ul>
          </div>
          <div>
            <img className={classes.bookmark_img} src={bookmark} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
