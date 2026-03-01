import React, { useState, useCallback, useEffect } from "react";
import "./Projects.css";
import Mac from "../images/macbook.png";
import Anchoi from "../images/an-choi.png";
import Instapic from "../images/instapic.png";
import Weather from "../images/weather.png";
import Nba from "../images/nbadatabase.png";
import Poke from "../images/pokeapptest.png";
import Recipe from "../images/recipebook.png";
import Netflix from "../images/netflixclone.png";

const PROJECTS = [

  {
    id: 1,
    title: "Netflix Clone 2.0",
    image: Netflix,
    imageAlt: "Netflix",
    description:
      "A responsive, Netflix-inspired movie discovery app built with React. Browse trending movies and TV shows, watch trailers, and explore content by genre—all powered by The Movie Database (TMDB) API.",
    tech: ["React", "Javascript", "CursorAI", "SCSS"],
    link: "https://github.com/Mbekoe24/netflix-clone",
  },
  {
    id: 2,
    title: "Anchoi Restaurant Website",
    image: Anchoi,
    imageAlt: "Anchoi Restaurant",
    description:
      "Collaborated with UX Design team to convert hi-fidelity prototype into full-stack website for local Brooklyn eatery.",
    tech: ["React", "Javascript", "CSS"],
    link: "https://an-choi.netlify.app/",
  },
  {
    id: 3,
    title: "Instapic",
    image: Instapic,
    imageAlt: "Instapic",
    description:
      "Created a full-stack, full-CRUD app, with Auth utilizing a RESTful JSON API information to construct an Instagram Clone.",
    tech: ["React", "Ruby on Rails", "PostgreSQL", "Javascript", "CSS"],
    link: "https://instapic.surge.sh/",
  },
  {
    id: 4,
    title: "Poké App",
    image: Poke,
    imageAlt: "Poké App",
    description:
      "Built a Pokémon trivia game using data from the PokéAPI that generates multiple choice questions where users guess “Who’s That Pokémon?",
    tech: ["Vanilla JS", "HTML", "CSS"],
    link: "https://pokeapptest.surge.sh/",
  },
  {
    id: 5,
    title: "NBA Database 2017-18",
    image: Nba,
    imageAlt: "NBA Database",
    description:
      "Created an NBA database app that pulls API data to display player bios and 2017–18 season stats in a searchable interface.",
    tech: ["React", "Javascript", "CSS", "Storybook"],
    link: "https://github.com/Mbekoe24/NBADatabase",
  },
  {
    id: 6,
    title: "Recipe Book",
    image: Recipe,
    imageAlt: "Recipe Book",
    description:
      "Built full-stack recipe website using React.JS, MongoDB, Express.JS (back-end) and HTML, CSS, and JavaScript (front-end) and custom API",
    tech: ["React", "Express.js", "MongoDB", "Mongoose", "Javascript", "CSS"],
    link: "https://my-recipebook.surge.sh/",
  },
  {
    id: 7,
    title: "Temperature App",
    image: Weather,
    imageAlt: "Temperature App",
    description:
      "Built a temperature app that converts fahrenheit and celsius temperatures while rendering different background images.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://mikebweatherapp.surge.sh/",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = PROJECTS.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext]);

  return (
    <section id="projects" className="projects-column">
    <div className="projects-wrapper">
      <h2 className="section-title">Projects</h2>

      <div className="carousel-section">
        <button
          className="carousel-btn carousel-btn-prev"
          onClick={goToPrev}
          aria-label="Previous project"
        >
          ‹
        </button>

        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PROJECTS.map((project) => (
              <div key={project.id} className="carousel-slide">
                <div className="project-card">
                  <div className="project-mockup">
                    <img className="mac-image" src={Mac} alt="Mac" />
                    <div className="inner-image">
                      <img src={project.image} alt={project.imageAlt} />
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-details">{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn carousel-btn-next"
          onClick={goToNext}
          aria-label="Next project"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {PROJECTS.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
