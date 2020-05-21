import React from "react";
import "./Footer.css";
import github from "../images/git.png";
import linkedin from "../images/link.png";
import heart from "../images/heart.png";
import react from "../images/logo512.png";
import netlify from "../images/netlify.png";

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <footer>
          <section>
            <div className="image-row">
              <div className="social-medias">
                <a href="https://github.com/Mbekoe24">
                  <img className="github-icon" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/michaelbekoe/">
                  <img className="linkedin-icon" src={linkedin} alt="github" />
                </a>
              </div>
            </div>
            <div className="footer-caption">
              <p>
                Website built with
                <img className="heart" src={heart} alt="heart" />
                <span className="caption-span">
                  using <img className="react-icon" src={react} alt="react" />{" "}
                  and hosted on{" "}
                  <img className="netlify-icon" src={netlify} alt="netlify" />
                </span>
              </p>
            </div>
            <p className="copyright"> © 2020 Michael Bekoe </p>
          </section>
        </footer>
      </div>
    </div>
  );
}
