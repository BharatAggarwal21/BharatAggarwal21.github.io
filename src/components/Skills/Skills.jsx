import React from "react";
import Styles from "./Skills.module.css";

const skills = [
  { icon: "react.svg", label: "React" },
  { icon: "js.svg", label: "JavaScript" },
  { icon: "redux.svg", label: "Redux" },
  { icon: "Angular.png", label: "Angular" },
  { icon: "html-5.svg", label: "HTML" },
  { icon: "css.svg", label: "CSS" },
  { icon: "java.png", label: "Java" },
  { icon: "node.png", label: "Node.js" },
  { icon: "mongo.png", label: "MongoDB" },
  { icon: "microservices.png", label: "Microservice/Monotlithic" },
  { icon: "ux.webp", label: "UI/UX" },
  { icon: "jest.png", label: "Jest" },
];

export default function Skills() {
  return (
    <div className="my-5 container-fluid">
      <div className={`mb-5 ${Styles.heading}`}>Skills</div>

      <div className={`row justify-content-center ${Styles.skills}`}>
        {skills.map(({ icon, label }) => (
          <div className="col-4 col-sm-3 col-md-2" key={label}>
            <img src={icon} alt={label}></img>
            <div>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
