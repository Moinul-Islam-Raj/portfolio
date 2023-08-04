import React from "react";
import "./intro.scss";
import { introData } from "../../../../data/intro";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>{introData?.heading}</h1>
        <p>{introData?.details}</p>
      </div>
    </div>
  );
};

export default Intro;
