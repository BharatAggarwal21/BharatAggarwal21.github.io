import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Proficiencies from "./components/Proficiencies/Proficiencies";
import Projects from "./components/Projects/Projects";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
        <hr></hr>
        <Proficiencies />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
