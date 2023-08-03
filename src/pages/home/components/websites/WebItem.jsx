import React from "react";
import "./websites.scss";

const WebItem = ({ imgSrc, header, details, url }) => {
  return (
    <div className="item">
      <img src={imgSrc} alt="img" />
      <div>
        <h3>{header}</h3>
        <hr />
        <p>{details}</p>
        <form target="_blank" action={url}>
          <button>Go</button>
        </form>
      </div>
    </div>
  );
};

export default WebItem;
