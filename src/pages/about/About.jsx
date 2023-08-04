import React from "react";
import "./about.scss";

const About = () => {
  let theme = localStorage.getItem("dark-theme") === "true" ? "theme-dark" : "";
  return (
    <div className={"about " + theme}>
      <h1 style={{ marginTop: "0" }}>404</h1>
      <h3>Not Found</h3>
      <h6>This page is not ready - raj</h6>
    </div>
  );
};

export default About;
