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
          image="admin-dashboard.png"
          title="E-Commerce Admin Dashboard"
          description="Admin-only dashboard for managing products, orders, and customers, with real-time sales analytics."
          techStack={[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
          ]}
          liveLink="https://bharataggarwal21.github.io/ecommerce-admin-dashboard"
          githubLink="https://github.com/BharatAggarwal21/ecommerce-admin-dashboard"
        />
        <ProjectCard
          image="api-sentinel.png"
          title="API Sentinel"
          description="A Postman-style API tester and uptime monitor in one place — request builder, saved collections, scheduled health checks, and response analytics."
          techStack={[
            "React",
            "Java",
            "Spring Boot",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
          ]}
          liveLink="https://bharataggarwal21.github.io/API-Monitoring"
          githubLink="https://github.com/BharatAggarwal21/API-Monitoring"
        />
        <ProjectCard
          image="todo1.png"
          title="Task Manager"
          description="A full-stack to-do app with JWT authentication to organize, track, and complete your daily tasks."
          techStack={[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "JWT",
          ]}
          liveLink="https://bharataggarwal21.github.io/ToDoApp/"
          githubLink="https://github.com/BharatAggarwal21/ToDoApp"
        />
        <ProjectCard
          image={"covid.png"}
          title="COVID-19 Live Tracker"
          description="A real-time analytics dashboard visualizing global COVID-19 case data with country-specific charts."
          techStack={["React", "Chart.js", "Public API", "HTML", "CSS"]}
          liveLink="https://BharatAggarwal21.github.io/covid-dashboard"
          githubLink="https://github.com/BharatAggarwal21/covid-dashboard"
        />
        <ProjectCard
          image="pix.png"
          title="Pix & Clips"
          description="A media discovery platform to browse and explore stock photos and videos from creators worldwide."
          techStack={["React", "Axios", "Public API", "HTML", "CSS"]}
          liveLink="https://BharatAggarwal21.github.io/pix-clips"
          githubLink="https://github.com/BharatAggarwal21/pix-clips"
        />
        <ProjectCard
          image="gdp.jpg"
          title="GDP Analysis"
          techStack={["Python", "Machine Learning", "Algorithms"]}
          description="Machine Learning analysis to predict GDP of various countries for years based on economical factors"
          liveLink=""
          githubLink="https://github.com/BharatAggarwal21/GDP-Analysis"
        />
      </div>
    </div>
  );
}
