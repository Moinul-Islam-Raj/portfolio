import React from "react";
import "./contacts.scss";
import { owner } from "../../../../data/owner";

const Contacts = () => {
  return (
    <>
      <h2>mail me</h2>
      <div className="contacts">
        <form
          action={"mailto:" + owner?.email}
          method="GET"
          encType="text/plain"
        >
          <input name="subject" placeholder="Subject" required type="text" />
          <textarea name="body" placeholder="Enter Text..."></textarea>
          <div>
            <input type="submit" value={"Mail"} />
            <input type="reset" value={"Reset"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contacts;
