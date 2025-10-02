import React from "react";
import Styles from "./HomePage.module.css";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          left: 0,
          zIndex: 0,
        }}
      >
        <path
          fill="#f8c831"
          fillOpacity="0.7"
          d="M1440,96L1360,112C1280,128,1120,160,960,149.3C800,139,640,85,480,96C320,107,160,181,80,218.7L0,256L0,0L80,0C160,0,320,0,480,0C640,0,800,0,960,0C1120,0,1280,0,1360,0L1440,0Z"
        />
      </svg>

      <div style={{ paddingTop: "9px", position: "relative", zIndex: 1 }}>
        <div className={`my-3 position-relative ${Styles.profile_container}`}>
          <img src="profile.jpg" alt="profile"></img>
        </div>

        <div className={Styles.name}>Bharat Aggarwal</div>

        <div className={Styles.profession}>Full Stack Developer</div>
        <br></br>

        <div>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/bharat-a-971160167/",
            }}
            target="_blank"
          >
            <img
              src="linkedin.png"
              className="mx-4"
              alt="logo"
              width="40px"
            ></img>
          </Link>
          <Link
            to={{ pathname: "https://github.com/BharatAggarwal21" }}
            target="_blank"
          >
            <img
              src="github.svg"
              className="mx-4"
              alt="logo"
              width="40px"
            ></img>
          </Link>
        </div>

        <div className={`row m-5 ${Styles.details}`}>
          <div className="col-sm-12 col-lg-4">
            <MdCall size="40px" color="rgb(255, 200, 49)" />
            <br></br>
            +91 9650634597
          </div>

          <div className="col-sm-12 col-lg-4">
            <MdEmail size="40px" color="rgb(255, 200, 49)" />
            <br></br>
            bharataggarwal631@gmail.com
          </div>

          <div className="col-sm-12 col-lg-4">
            <MdLocationOn size="40px" color="rgb(255, 200, 49)" />
            <br></br>
            Bangalore, India
          </div>
        </div>

        <div className={`mb-5 px-5 ${Styles.details}`}>
          Software engineer with ~6 years of professional experience in
          developing Web applications. Adept at developing user-friendly design
          to meet customer requirements and increase company revenue.
          <br />
          <br />
          <Link
            to={{
              pathname:
                "https://drive.google.com/file/d/1iUa4t9h-OOhIrdJsIYSjKPhHD5H4nRqJ/view?usp=drive_link",
            }}
            target="_blank"
            rel="noopener noreferrer"
            className={Styles.buttonLink}
          >
            Resume
          </Link>
        </div>

        <div className={`container ${Styles.skills}`}>
          <img src="react.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img src="js.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img src="html-5.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img src="css.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img src="redux.svg" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img
            src="bootstrap.svg"
            className="mx-2 mx-lg-5 my-3"
            alt="logo"
          ></img>
          <img src="node.png" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img
            src="express.png"
            className=" mx-2 mx-lg-5 my-3"
            alt="logo"
          ></img>
          <img src="mongo.png" className=" mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img src="jest.png" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
          <img src="github.svg" className="mx-2 mx-lg-5 my-3" alt="logo"></img>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
