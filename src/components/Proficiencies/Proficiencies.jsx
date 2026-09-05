import React from "react";
import Styles from "./Proficiencies.module.css";

export default function Proficiencies() {
  return (
    <div className={`${Styles.section} container-fluid`}>
      <div className={`mb-5 ${Styles.heading}`}>Proficiencies</div>

      <div className={`row justify-content-center ${Styles.proficiencies}`}>
        <div className="col-sm-12 col-md-5 col-lg-2">
          <img src="front.svg" alt="img"></img>
          <div>Frontend</div>
        </div>

        <div className="col-sm-12 col-md-5 col-lg-2">
          <img src="back.svg" alt="img"></img>
          <div>Backend</div>
        </div>

        <div className="col-sm-12 col-md-5 col-lg-2">
          <img src="database.svg" alt="img"></img>
          <div>Database</div>
        </div>

        <div className="col-sm-12 col-md-5 col-lg-2">
          <img
            src="agentic-ai.webp"
            alt="AI Agents"
            className={Styles.aiImage}
          ></img>
          <div>AI Agents</div>
        </div>
      </div>
    </div>
  );
}
