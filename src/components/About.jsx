import React from "react";
import "./About.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import Resume from "../resume-pdf/M.B Resume.pdf";
export default function About() {
  return (
    <div>
      <section id="about">
        <h2 className="section-title">About</h2>
      </section>

      <div className="about-section">
        <section className="about-section-content">
          <div className="about-grid-container">
            <div className="profile-badge">
              <div className="card-image">
                <div className="card-avatar">
                  <div className="card-content">
                    <div className="card-header">
                      <h2 className="card-title">Michael Bekoe</h2>
                    </div>
                    <div className="card-subtitle">
                      Software Engineer II @ <br />
                      Bank of the West
                    </div>
                    <div className="card-body">
                      <p className="card-body-text">
                        Bachelors in International Relations & <br />
                        Economics at SUNY Geneseo
                      </p>
                      <p>Phoenix, Arizona</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <a href="https://github.com/Mbekoe24">
                  <img className="github icon" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/michaelbekoe/">
                  <img className="linkedin icon" src={linkedin} alt="github" />
                </a>
                <a className="resume-link" href={Resume}>
                  <button>Resume</button>
                </a>
              </div>
            </div>
            <div className="about-text">
              <p>
                I am a multidisciplinary Software Engineer and Visual Designer
                who loves designing vibrant websites and applications. Currently
                I am an Software Engineer II at Bank of the West, in Phoenix
                Arizona.
              </p>
              <p>
                As a lifelong learner and passionate tech-enthusiast, I am
                constantly searching for new trends in the industry in order to
                create cutting edge products. I seek the opportunity to leverage
                my creative and analytical skills to create great products with
                real users in mind.
              </p>

              <p>
                I have direct experience converting hi-fidelity prototypes into
                full-stack applications and websites that priortize eloquent
                visual design. I focus much on providing the best user
                experience on any device like mobile, desktop, tv, etc.
              </p>
              <p>
                I have a passion for Web Development, Big Data, Vibrant Designs,
                Internet of Things(IoT), and Network Security. In my free time,
                I love watching sports, boxing, working out and playing outdoor
                activities like basketball, football, soccer, etc.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
