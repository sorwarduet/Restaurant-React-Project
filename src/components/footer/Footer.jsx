import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Restaurant &#169; Copyright 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
