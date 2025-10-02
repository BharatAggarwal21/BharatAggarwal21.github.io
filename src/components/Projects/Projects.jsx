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
          image="Lrc.png"
          title="Library Management"
          description="Library website, the user can see his details and the admin has access to the user's data and can make changes to them accordingly."
          liveLink=""
          githubLink=""
        />

        <ProjectCard
          image="Shopping.png"
          title="Shopping Cart"
          description=" This website is a one-stop-shop for all your fashion and
                  lifestyle needs, build using React & Express-js"
          liveLink=""
          githubLink=""
        />

        <ProjectCard
          image="SpecialIssue.png"
          title="VentureBeat Clone"
          description="A leading source for transformative tech news and events that
                  provide the deep context to make smart decisions."
          liveLink=""
          githubLink=""
        />

        <ProjectCard
          image="milap.png"
          title="Milap Clone"
          description="Crowdfunding platform related to healthcare, education,
                  sports, disaster relief, and other personal causes"
          liveLink=""
          githubLink=""
        />

        <ProjectCard
          image={"covid.png"}
          title="Covid-19 Tracker"
          description="Website to display current covid-19 cases across the world including total confirmed, active cases, recovered cases, and death toll."
          liveLink=""
          githubLink=""
        />

        <ProjectCard
          image="todo.png"
          title="Todiost Clone"
          description="Todoist an app that helps millions of people organize work and life now has grown from a personal side project to a market-leading Swiss Army Knife of life organization."
          liveLink=""
          githubLink=""
        />
      </div>
    </div>
  );
}
