import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Styles from "./Projects.module.css";

export default function Project() {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.section_header}>
        <span className={Styles.eyebrow}>Selected work</span>
        <h1 className={Styles.heading}>Projects at a Glance</h1>
        <p>
          Full-stack products and data-driven experiences built from idea to
          deployment.
        </p>
      </div>
      <div className={Styles.container_fluid}>
        <ProjectCard
          image="api-sentinel.png"
          title="API Sentinel"
          description="An API tester and uptime monitor in one place — request builder, scheduled health checks, and response analytics."
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
          image="admin-dashboard.png"
          title="Seller Admin Dashboard"
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
          image="documentquery.png"
          title="Document Query App"
          description="A full-stack app for uploading PDFs, extracting structured data, tracking processing, and finding explainable document matches."
          techStack={[
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
          ]}
          liveLink="https://bharataggarwal21.github.io/document-query-app/"
          githubLink="https://github.com/BharatAggarwal21/document-query-app"
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
