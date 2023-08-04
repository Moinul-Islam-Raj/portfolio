import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import Searchbar from "./Searchbar";
import { owner } from "../../data/owner";

const Navbar = () => {
  const loc = useLocation();
  const isHome =
    loc.pathname.endsWith("/portfolio") || loc.pathname.endsWith("/portfolio/");
  const isAbout =
    loc.pathname.endsWith("/about") || loc.pathname.endsWith("/about/");
  const [dark, setDark] = useState(
    localStorage.getItem("dark-theme") === "true" ? true : false
  );

  useEffect(() => {
    localStorage.setItem("dark-theme", dark);
    document.querySelector(".home")?.classList.toggle("theme-dark", dark);
    document.querySelector(".about")?.classList.toggle("theme-dark", dark);
  }, [dark]);

  return (
    <nav className={"navbar " + (dark ? "theme-dark-nav" : "")}>
      <div>
        <div className="left">
          <span>
            <img src={owner.logoUrl} alt="logo" />
            <span>{owner.name}</span>
          </span>
          <Searchbar className={""} />
        </div>
        <div className="right">
          <img
            src="https://img.icons8.com/?size=1x&id=59841&format=png"
            alt="dark"
            width="30px"
            height="30px"
            style={{
              display: dark ? "inline" : "none",
              backgroundColor: "grey",
              borderRadius: "50%",
            }}
            onClick={() => setDark((d) => !d)}
          />
          <img
            src="https://img.icons8.com/?size=512&id=82718&format=png"
            alt="light"
            width="30px"
            height="30px"
            style={{
              display: dark ? "none" : "inline",
              backgroundColor: "rebeccapurple",
              borderRadius: "50%",
            }}
            onClick={() => setDark((d) => !d)}
          />
          <Link
            className={isHome ? "active" : ""}
            style={{ textDecoration: "none" }}
            to="/portfolio/"
          >
            <span>Home</span>
          </Link>
          <Link
            className={isAbout ? "active" : ""}
            style={{ textDecoration: "none" }}
            to="/portfolio/about/"
          >
            <span>About</span>
          </Link>
        </div>
      </div>
      <Searchbar className={"mob"} />
    </nav>
  );
};

export default Navbar;
