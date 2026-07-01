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
        <HomePage />
        <hr></hr>
        <Proficiencies />
        <hr></hr>
        <Skills />
        <Experience />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
