import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Netskope",
    role: "Senior Software Engineer",
    logo: "/netskope.png",
    duration: "Oct 2024 - Present",
    location: "Remote",
    skills: [
      "React",
      "JavaScript",
      "Java",
      "Angular",
      "Microservices",
      "Agentic AI",
      "SDD",
      "REST APIs",
      "Cypress",
      "Webpack",
    ],
    points: [
      <>
        <strong>Logs Streaming feature</strong>: Lead the UI development from{" "}
        <strong>scratch</strong> and contributed to backend{" "}
        <strong>REST APIs</strong> to forward logs from Netskope Engine to
        user's cloud destinations, ensuring almost real-time log delivery which
        is used by more than <strong>8 customers</strong> like AirBnB.
      </>,
      <>
        <strong>AI Agents</strong>: Led the migration of old legacy SkopeIT
        pages into Microfrontend repo (Angular → React) with AI agents and{" "}
        <strong>SDD</strong> aproach, reducing the migration time from 4 months
        to 2 months.
      </>,
      <>
        <strong>Microservice Architecture</strong>: Enhanced the core
        functionality around <strong>config-driven development</strong> for
        SkopeIT micro-frontend, reducing the redundant work and speeding up
        feature delivery.
      </>,
    ],
  },
  {
    company: "VMware",
    role: "Member of Technical Staff 2",
    logo: "/vmware.png",
    duration: "Apr 2021 - Oct 2024",
    location: "Bengaluru, India",
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "Jest",
      "REST APIs",
      "Enzyme",
      "RTL",
    ],
    achievements: [
      {
        title: "At Our Best Award",
        file: "/documents/atourbest.pdf",
      },
      {
        title: "Hackathon Winner",
        file: "/documents/hackathon.jpeg",
      },
    ],
    points: [
      <>
        <strong>Crown Jewel feature</strong>: Lead the development from scratch
        which brought in <strong>10 customers</strong> like Optum. Got{" "}
        <strong>promoted</strong> to MTS 2 after this.
      </>,
      <>
        <strong>Applications Feature</strong>: Amongst top features of the
        product. Enhanced discovery methods like flow based, revamped Overview
        and Single App Dashboard which{" "}
        <strong>increased the customer engagement by 60%</strong> and honoured
        the feedback based on telemetry data.
      </>,
      <>
        <strong>Dynamic Table framework</strong>: Developed a wrapper table over
        the Table component. It has capabilities for internally handling
        sorting, filtering, data fetching API, etc. Reducing{" "}
        <strong>redundant code by 80%</strong>.
      </>,
    ],
  },
  {
    company: "SAP Labs",
    role: "Software Developer",
    logo: "/sap.png",
    duration: "Dec 2020 - Mar 2021",
    location: "Bengaluru, India",
    skills: ["JavaScript", "React", "HTML", "CSS", "UI5", "Agile"],
    points: [
      "Developed frontend features for enterprise applications using SAP UI5.",
      "Improved the Unit tests coverage for the code base from 65% to 78%.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
    ],
  },
];

const Experience = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Experience</h1>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.dot}></div>

            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.companyHeader}>
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={styles.companyLogo}
                  />

                  <div className={styles.companyHeaderContent}>
                    <h2>{exp.company}</h2>
                    <h3>{exp.role}</h3>
                  </div>
                </div>

                <div className={styles.meta}>
                  <span className={styles.duration}>{exp.duration}</span>

                  <span className={styles.duration}>{exp.location}</span>
                </div>
              </div>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                {exp.skills.map((skill, i) => (
                  <span className={styles.tag} key={i}>
                    {skill}
                  </span>
                ))}
              </div>

              {exp.achievements && (
                <div className={styles.achievements}>
                  <div className={styles.docs}>
                    {exp.achievements.map((achievement, i) => (
                      <a
                        key={i}
                        href={achievement.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.docBtn}
                      >
                        {achievement.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
