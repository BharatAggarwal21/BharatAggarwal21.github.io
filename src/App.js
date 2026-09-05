import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Proficiencies from "./components/Proficiencies/Proficiencies";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="site-nav__brand" href="#about">
            BA
          </a>
          <div className="site-nav__links">
            <a href="#about">About</a>
            <a href="#proficiencies">Proficiencies</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>

        <main>
          <section id="about" className="page-section">
            <HomePage />
          </section>
          <hr></hr>
          <section id="proficiencies" className="page-section">
            <Proficiencies />
          </section>
          <hr></hr>
          <section id="skills" className="page-section">
            <Skills />
          </section>
          <section id="experience" className="page-section">
            <Experience />
          </section>
          <section id="projects" className="page-section">
            <Projects />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
