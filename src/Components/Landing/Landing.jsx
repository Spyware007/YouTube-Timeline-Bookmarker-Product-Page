import React from "react";
import classes from "./Landing.module.css";
import spider from "../../Assets/spider.png";
import harsh from "../../Assets/harsh.png";
import sapna from "../../Assets/sapna.png";
import a from "../../Assets/1.png";

const creators = [
  {
    img: spider,
    name: "Om Gawande",
  },
  {
    img: harsh,
    name: "Harsh Jain",
  },
  {
    img: sapna,
    name: "Sapna Kul",
  },
];

const Creator = () => {
  return creators.map((creator, key) => (
    <div key={key} className={classes.creator_container}>
      <div className={classes.creator_img_container}>
        <img alt="creator" className={classes.creator_img} src={creator.img} />
      </div>
      <h1 className={classes.creator_name}>{creator.name}</h1>
    </div>
  ));
};

const Landing = () => {
  return (
    <>
      <div id="home" className={classes.container}>
        <div className={classes.left_container}>
          <div className={classes.title}>
            <h1 className={classes.title_text}>
              <span className={classes.title_red}>B</span>ookmark
            </h1>
            <h1 className={classes.title_text}>
              <span className={classes.title_red}>Y</span>our
            </h1>
            <h1 className={classes.title_text}>
              <span className={classes.title_red}>T</span>imelines
            </h1>
            <div className={classes.dash}></div>
          </div>
          <div className={classes.description_container}>
            <p className={classes.description_text}>
              Bookmark important timelines in a youtube video, so that you never
              have to hustle to find out the one event you are looking for when
              you are revisting the video.
            </p>
          </div>
          <div className={classes.btn_container}>
            <button className={classes.btn}>Get Started &rarr;</button>
          </div>
          <div className={classes.creator_section}>
            <h1 className={classes.creators_heading}>Creators</h1>
            <div className={classes.creators_container}>
              <Creator />
            </div>
          </div>
        </div>
        <div className={classes.right_container}>
          <img src={a} alt="" className={classes.img1} />
        </div>
      </div>
    </>
  );
};

export default Landing;
