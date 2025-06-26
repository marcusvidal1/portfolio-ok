import "../styles/projects.css";
import { useState } from "react";
import { projects } from '../config/links';
import iconGameLibrary from "../assets/icons/icon-gamelibrary.png";
import iconSecretNumber from "../assets/icons/icon-secretnumber.png";
import iconFocusTimer from "../assets/icons/icon-focustimer.png";
import iconPresente from "../assets/icons/icon-romanticgift.png";

const projectIcons = {
  iconGameLibrary,
  iconSecretNumber,
  iconFocusTimer,
  iconPresente,
};

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const abrirPopup = (url) => {
    window.open(
      url,
      "FocusTimer",
      "width=230,height=230,menubar=no,toolbar=no,location=no,status=no,scrollbars=no,resizable=no"
    );
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        Meus Projetos<span className="highlight-dot">.</span>
      </h2>

      <div className="projects-carousel" role="region" aria-label="Carrossel de projetos">
        <button
          className="nav-btn"
          onClick={prevSlide}
          onKeyDown={(e) => handleKeyDown(e, prevSlide)}
          aria-label="Ir para o projeto anterior"
        >
          ‹
        </button>

        <div className="cards-stack">
          {projects.map((project, index) => {
            const isActive = index === current;
            const isPrev = index === (current === 0 ? projects.length - 1 : current - 1);
            const isNext = index === (current === projects.length - 1 ? 0 : current + 1);

            if (!isActive && !isPrev && !isNext) return null;

            return (
              <div
                key={index}
                className={`project-card ${
                  isActive ? "active" : isPrev ? "prev" : "next"
                }`}
                aria-current={isActive ? "true" : "false"}
                role="group"
                aria-label={`Projeto ${project.title}${isActive ? ", atualmente exibido" : ""}`}
              >
                <img
                  src={projectIcons[project.icon]}
                  alt={`Ícone representando o projeto ${project.title}`}
                  className="project-icon"
                />

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código do projeto ${project.title} no GitHub`}
                  >
                    GitHub
                  </a>
                  {project.title === "Focus Timer" ? (
                    <button
                      className="popup-button"
                      onClick={() => abrirPopup(project.site)}
                      onKeyDown={(e) => handleKeyDown(e, () => abrirPopup(project.site))}
                      aria-label={`Abrir o site do projeto ${project.title} em uma janela popup`}
                    >
                      Ver site
                    </button>
                  ) : (
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar o site do projeto ${project.title}`}
                    >
                      Ver site
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="nav-btn"
          onClick={nextSlide}
          onKeyDown={(e) => handleKeyDown(e, nextSlide)}
          aria-label="Ir para o próximo projeto"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Projects;