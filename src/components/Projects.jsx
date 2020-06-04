import React from "react";
import "./Projects.css";
import Mac from "../images/macbook.png";
import Anchoi from "../images/an-choi.png";
import Instapic from "../images/instapic.png";
import Weather from "../images/weather.png";
import Nba from "../images/nbadatabase.png";
import Poke from "../images/pokeapptest.png";
import Recipe from "../images/recipebook.png";


export default function Projects() {
  return (
    <div>
      <section id="projects">
        <h2 className="section-title">Projects</h2>
      </section>

      <div className="project-section">
        <section className="project-section-content">
          <div className="project-container left-card">
            <div className="mockup">
              <img className="mac-image" src={Mac} alt="Mac" />

              <div className="inner-image">
                <img src={Anchoi} alt="anchoi" />
              </div>
            </div>

            <div className="project-border-content ">
              <div className="project-title"> Anchoi Resturant Website</div>

              <div className="project-info">
                <p className="project-details">
                  Collaborated with UX Design team to convert hi-fidelity
                  prototype into full-stack website for local Brooklyn eatery.
                </p>
                <p className="project-languages">
                  <span className="chip"> React</span>
                  <span className="chip"> Javascript</span>
                  <span className="chip"> CSS</span>
                </p>
                <div className="footer-section">
                  <button className="view-button">
                    <a
                      className="view-link"
                      href="https://an-choi.netlify.app/"
                    >
                      View
                    </a>
                 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-section-content">
          <div className="project-container left-card">
            <div className="mockup">
              <img className="mac-image" src={Mac} alt="Mac" />

              <div className="inner-image">
                <img src={Instapic} alt="weather" />
              </div>
            </div>

            <div className="project-border-content">
              <div className="project-title">Instapic</div>

              <div className="project-info">
                <p className="project-details">
                  Created a full-stack, full-CRUD app, with Auth utilizing a
                  RESTful JSON API information to construct an Instagram Clone.
                </p>
                <p className="project-languages">
                  <span className="chip"> React</span>
                  <span className="chip"> Ruby on Rails</span>
                  <span className="chip"> PostgreSQL</span>
                  <span className="chip"> Javascript</span>
                  <span className="chip"> CSS</span>
                </p>
                <div className="footer-section">
                  <button className="view-button">
                    <a className="view-link" href="http://instapic.surge.sh/">
                      View
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="project-container">
          <div className="mockup">
            <img className="mac-image" src={Mac} alt="Mac" />

            <div className="inner-image">
              <img src={Poke} alt="weather" />
            </div>
          </div>

          <div className="project-border-content">
            <div className="project-title">Poké App</div>

            <div className="project-info">
              <p className="project-details">
                Retrieved data from the PokéAPi to create Pokémon Trivia. A
                multiple choice game that requires you to figure out Who's that
                Pokémon?
              </p>
              <p className="project-languages">
                <span className="chip"> Javascript</span>
                <span className="chip"> HTML</span>
                <span className="chip"> CSS</span>
              </p>
              <div className="footer-section">
                <button className="view-button">
                  <a className="view-link" href="http://pokeapptest.surge.sh/">
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="mockup">
            <img className="mac-image" src={Mac} alt="Mac" />

            <div className="inner-image">
              <img src={Nba} alt="weather" />
            </div>
          </div>

          <div className="project-border-content">
            <div className="project-title">NBA Database</div>

            <div className="project-info">
              <p className="project-details">
                Retrieved API information to construct NBA Database. Which
                displays players bio's as well as stats for the 2017-18 season.
              </p>
              <p className="project-languages">
                <span className="chip"> React</span>
                <span className="chip"> Javascript</span>
                <span className="chip"> CSS</span>
                <span className="chip"> Storybook</span>
              </p>
              <div className="footer-section">
                <button className="view-button">
                  <a
                    className="view-link"
                    href="https://nbadatabase.netlify.app/"
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="mockup">
            <img className="mac-image" src={Mac} alt="Mac" />

            <div className="inner-image">
              <img src={Recipe} alt="weather" />
            </div>
          </div>

          <div className="project-border-content">
            <div className="project-title">Recipe Book</div>

            <div className="project-info">
              <p className="project-details">
                Built full-stack recipe website using React.JS, MongoDB,
                Express.JS (back-end) and HTML, CSS, and JavaScript (front-end)
                and custom API
              </p>
              <p className="project-languages">
                <span className="chip"> React</span>
                <span className="chip"> Express.js</span>
                <span className="chip"> MongoDB</span>
                <span className="chip"> Mongoose</span>
                <span className="chip"> Javascript</span>
                <span className="chip"> CSS</span>
              </p>
              <div className="footer-section">
                <button className="view-button">
                  <a
                    className="view-link"
                    href="http://my-recipebook.surge.sh/"
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="mockup">
            <img className="mac-image" src={Mac} alt="Mac" />

            <div className="inner-image">
              <img src={Weather} alt="weather" />
            </div>
          </div>

          <div className="project-border-content">
            <div className="project-title">Temperature App</div>

            <div className="project-info">
              <p className="project-details">
                Built a temperature app that converts fahrenheit and celsius
                temperatures while rendering different background images.
              </p>
              <p className="project-languages">
                <span className="chip"> HTML</span>
                <span className="chip"> CSS</span>
                <span className="chip"> Javascript</span>
              </p>
              <div className="footer-section">
                <button className="view-button">
                  <a
                    className="view-link"
                    href="http://mikebweatherapp.surge.sh/"
                  >
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
