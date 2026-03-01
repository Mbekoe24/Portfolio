import React from "react";
import "./About.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import Resume from "../resume-pdf/M.B Resume.pdf";

export default function About() {
  return (
    <section id="about" className="about-column">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="profile-badge">
          <div className="card-image">
            <div className="card-avatar" />
            <div className="card-content">
              <h2 className="card-title">Michael Bekoe</h2>
              <div className="card-subtitle">Software Engineer II 
              </div>
              <div className="card-body">
                <p className="card-body-text">
                  Bachelors in International Relations & Economics at SUNY
                  Geneseo
                </p>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <a href="https://github.com/Mbekoe24" aria-label="GitHub">
              <img className="icon" src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/michaelbekoe/" aria-label="LinkedIn">
              <img className="icon" src={linkedin} alt="LinkedIn" />
            </a>
            <a className="resume-link" href={Resume}>
              <button>Resume</button>
            </a>
          </div>
        </div>
        <div className="about-text">
          <p>
            I am a Software Engineer and Front End Engineer with experience building
            scalable, user-focused applications in fintech and enterprise
            environments. I've delivered digital banking platforms and front-end
            solutions at BMO Harris Bank, Bank of the West, and Robert Half.
          </p>
          <p>
            I specialize in React, TypeScript, and modern JavaScript turning
            high-fi prototypes into production ready full-stack apps with
            clean architecture, performance, and responsive design.
          </p>
          <p>
            I leverage AI tools like Claude and Cursor for refactoring, testing,
            and faster delivery without sacrificing code quality or thoughtful
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
