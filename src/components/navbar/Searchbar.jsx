import React, { useRef } from "react";

const Searchbar = ({ className }) => {
  const inputRef = useRef();

  const clearInput = () => {
    setTimeout(() => {
      inputRef.current.value = "";
    });
  };
  return (
    <form
      className={className}
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
  );
};

export default Searchbar;
