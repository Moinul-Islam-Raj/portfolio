import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const inputRef = useRef();
  const clearInput = () => (inputRef.current.value = "");
  return (
    <div className="navbar">
      <div className="left">
        <span>
          <img src="" alt="logo" />
          <span>Moinul Islam Raj</span>
        </span>
      </div>
      <div className="right">
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
