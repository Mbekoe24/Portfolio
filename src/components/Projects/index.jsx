import React, { useState, useCallback, useEffect } from "react";
import "./Projects.css";
import Mac from "../../images/macbook.png";
import { PROJECTS } from "../../data/projects";

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
