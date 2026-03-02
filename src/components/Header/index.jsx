import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="parallax">
      <div className="header-container">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={mobileMenuOpen ? "open" : ""} />
          <span className={mobileMenuOpen ? "open" : ""} />
          <span className={mobileMenuOpen ? "open" : ""} />
        </button>
        <nav className={`header-nav ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </a>
        </nav>
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
