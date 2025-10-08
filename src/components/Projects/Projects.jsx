import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Styles from "./Projects.module.css";

export default function Project() {
  return (
    <div className={Styles.main_container}>
      <h1 className={Styles.heading}>Projects at Glance</h1>
      <br></br>
      <div className={Styles.container_fluid}>
        <ProjectCard
          image="todo1.png"
          title="To-Do App"
          description="Organize, track, and complete your tasks effortlessly."
          liveLink="https://bharataggarwal21.github.io/ToDoApp/"
          githubLink="https://github.com/BharatAggarwal21/ToDoApp"
        />
        <ProjectCard
          image="pix.png"
          title="Pix & Clips"
          description="Get view of stock photos and videos shared by talented creators."
          liveLink="https://BharatAggarwal21.github.io/pix-clips"
          githubLink="https://github.com/BharatAggarwal21/pix-clips"
        />
        <ProjectCard
          image={"covid.png"}
          title="Covid-19 Dashboard"
          description="Covid-19 cases across the world with specific charts for country-wise data."
          liveLink="https://BharatAggarwal21.github.io/covid-dashboard"
          githubLink="https://github.com/BharatAggarwal21/covid-dashboard"
        />
        <ProjectCard
          image="gdp.jpg"
          title="GDP Analysis"
          description="Machine Learning analysis to predict GDP of various countries."
          liveLink=""
          githubLink="https://github.com/BharatAggarwal21/GDP-Analysis"
        />
      </div>
    </div>
  );
}
