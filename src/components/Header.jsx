import React from "react";
import "./Header.css";

function header() {
  return (
    <div className="parallax">
      <div className="header-container">
        <header>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </header>
      </div>
      <div className="grid-container">
        <h1 className="my-name">Michael Bekoe</h1>
        <div className="info-container">
          <div className="sub-titles">
            <p className="position-name">Web Developer</p>
            <p className="position-name">Front End Engineer</p>
            <p className="position-name">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
