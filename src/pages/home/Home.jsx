import React from "react";
import "./home.scss";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import Websites from "./components/websites/Websites";

const Home = () => {
  let theme = localStorage.getItem("dark-theme") === "true" ? "theme-dark" : "";
  return (
    <div className={"home " + theme}>
      <Intro />
      <Websites />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
