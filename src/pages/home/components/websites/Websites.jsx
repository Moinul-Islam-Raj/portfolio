import React from "react";
import "./websites.scss";
import WebItem from "./WebItem";
import { Projects } from "../../../../data/projects.js";

const Websites = () => {
  return (
    <>
      <h2>Projects</h2>
      <hr style={{ width: "90vw" }} />
      <div className="websites">
        {Projects.map((p, i) => {
          return (
            <WebItem
              key={i}
              imgSrc={p.imgSrc}
              header={p.header}
              details={p.details}
              url={p.url}
            />
          );
        })}
      </div>
      <hr style={{ width: "90vw" }} />
    </>
  );
};

export default Websites;
