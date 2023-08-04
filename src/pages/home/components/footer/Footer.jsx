import React from "react";
import "./footer.scss";
import { owner } from "../../../../data/owner";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <h4>
          <em>{owner?.name}</em>
        </h4>
        <ul>
          <p>Some Links</p>
          <ul>
            <li>
              <a href={owner?.github + "/portfolio"}>Source Code</a>
            </li>
            <li>
              <a href={owner?.github}>Github Page</a>
            </li>
            <li>
              <a href={owner?.facebook}>Facebook Page</a>
            </li>
          </ul>
        </ul>
      </footer>
      <h6>tahosan habib</h6>
    </div>
  );
};

export default Footer;
