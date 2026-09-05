import React from "react";
import {
  MdArrowForward,
  MdCall,
  MdEmail,
  MdLocationOn,
  MdOpenInNew,
} from "react-icons/md";
import Styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={Styles.hero}>
      <svg
        className={Styles.topWave}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0H1440V28C1210 150 970 188 766 128C541 68 302 111 0 275V0Z" />
      </svg>

      <div className={Styles.heroInner}>
        <div className={Styles.profileContainer}>
          <img src="profile.jpg" alt="Bharat Aggarwal" />
        </div>

        <h1>Bharat Aggarwal</h1>
        <p className={Styles.role}>Full Stack Developer</p>

        <p className={Styles.summary}>
          Software engineer with ~6 years of experience building scalable,
          performant, and user-centric web applications using React, JavaScript,
          Node.js, Express, and Java.
        </p>

        <div className={Styles.actions}>
          <a className={Styles.primaryButton} href="#projects">
            View Projects <MdArrowForward aria-hidden="true" />
          </a>
          <a
            className={Styles.secondaryButton}
            href="https://drive.google.com/file/d/1GT1WfZrnXHN6ycmXxKFtBo4U7K6v30c9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume <MdOpenInNew aria-hidden="true" />
          </a>
        </div>

        <div className={Styles.socials}>
          <a
            href="https://www.linkedin.com/in/bharat-aggarwal-971160167/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <img src="linkedin.png" alt="" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/BharatAggarwal21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <img src="github.svg" alt="" />
            <span>GitHub</span>
          </a>
        </div>

        <div className={Styles.contactCards}>
          <a href="tel:+919650634597">
            <span className={Styles.contactIcon}>
              <MdCall aria-hidden="true" />
            </span>
            <small>Phone</small>
            <strong>+91 96506 34597</strong>
          </a>
          <a href="mailto:bharataggarwal631@gmail.com">
            <span className={Styles.contactIcon}>
              <MdEmail aria-hidden="true" />
            </span>
            <small>Email</small>
            <strong>bharataggarwal631@gmail.com</strong>
          </a>
          <div>
            <span className={Styles.contactIcon}>
              <MdLocationOn aria-hidden="true" />
            </span>
            <small>Location</small>
            <strong>Bengaluru, India</strong>
          </div>
        </div>
      </div>

      <div className={Styles.bottomWave} aria-hidden="true"></div>
    </div>
  );
}
