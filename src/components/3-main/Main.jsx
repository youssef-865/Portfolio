import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

export default function Main() {
  const [currentActive, setActive] = useState("all");
  const [arr, setArr] = useState(myProjects.flatMap(category => category.projects));

  const handleClick = (category) => {
    setActive(category);
    if (category === "all") {
      setArr(myProjects.flatMap(category => category.projects));
    } else {
      const filteredProjects = myProjects
        .filter(item => item.category.some(cat => cat.toLowerCase() === category.toLowerCase()))
        .flatMap(item => item.projects);
      setArr(filteredProjects);
    }
  };

  return (
    <main className="flex">
      <section id="main" className="left-section flex">
        <button onClick={() => handleClick("all")} className={currentActive === "all" ? "active" : null}>
        My Projects
        </button>

        <button onClick={() => handleClick("css")} className={currentActive === "css" ? "active" : null}>
          HTML & CSS
        </button>

        <button onClick={() => handleClick("bootstrap")} className={currentActive === "bootstrap" ? "active" : null}>
          Bootstrap        </button>

        <button onClick={() => handleClick("tailwind")} className={currentActive === "tailwind" ? "active" : null}>
          Tailwind
        </button>

        {/* <button onClick={() => handleClick("jquery")} className={currentActive === "jquery" ? "active" : null}>
          jQuery
        </button> */}

        <button onClick={() => handleClick("javascript")} className={currentActive === "javascript" ? "active" : null}>
          JavaScript
        </button>

        <button onClick={() => handleClick("react")} className={currentActive === "react" ? "active" : null}>
          React
        </button>
      </section>

      <section className="flex right-section">
        {arr.map((project, index) => (
          <article key={index} className="card">
            <img 
              width={256} 
              src={project.imgPath} 
              alt={project.name} 
            />

            <div className="box" style={{ width: "256px" }}>
              <h1 className="title">{project.name}</h1>
              <p className="subtitle">{project.description || "A great project showcasing modern development techniques."}</p>

              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="icon-github">
                      <i className="fab fa-github"></i>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>

                {project.liveDemo && (
                  <a className="link flex" href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    More
                    <span className="icon-arrow-right-thick"></span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
