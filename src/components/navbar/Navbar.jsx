import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const inputRef = useRef();
  const [dark, setDark] = useState(localStorage.getItem("dark-theme"));
  const clearInput = () => {
    inputRef.current.value = "";
  };
  useEffect(() => {
    localStorage.setItem("dark-theme", dark);
    document.querySelector(".navbar")?.classList.toggle("theme-dark-nav", dark);
    document.querySelector(".home")?.classList.toggle("theme-dark", dark);
    document.querySelector(".about")?.classList.toggle("theme-dark", dark);
  }, [dark]);
  return (
    <div className="navbar">
      <div className="left">
        <span>
          <img src="" alt="logo" />
          <span>Moinul Islam Raj</span>
        </span>
        <form
          onSubmit={clearInput}
          target="_blank"
          action="https://www.google.com/search"
        >
          <input
            required
            ref={inputRef}
            name="q"
            placeholder="Search"
            type="search"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="right">
        <img
          src="https://img.icons8.com/?size=1x&id=59841&format=png"
          alt="moon"
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
          alt="moon"
          width="30px"
          height="30px"
          style={{
            display: dark ? "none" : "inline",
            backgroundColor: "rebeccapurple",
            borderRadius: "50%",
          }}
          onClick={() => setDark((d) => !d)}
        />
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
