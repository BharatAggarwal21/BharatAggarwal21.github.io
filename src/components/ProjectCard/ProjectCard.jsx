import React from "react";
import Styles from "./ProjectCard.module.css";

export default function ProjectCard({
  image,
  title,
  description,
  techStack,
  liveLink,
  githubLink,
}) {
  return (
    <div
      className={`card col-sm- col-md-9 col-lg-3 m-3 ${Styles.card_container}`}
    >
      <img src={image} className="card-img-top" alt="..."></img>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-block "
            >
              Live
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-block "
            >
              Github link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
