import { MdOpenInNew } from "react-icons/md";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Netskope",
    role: "Senior Software Engineer",
    logo: "/netskope.png",
    duration: "Oct 2024 - Present",
    location: "Bengaluru, India",
    skills: [
      "React.js",
      "JavaScript",
      "Java",
      "REST APIs",
      "Node.js",
      "MariaDB",
      "MySQL",
      "Microservices",
      "Kubernetes",
      "Kafka",
    ],
    points: [
      <>
        <strong>Events Streaming feature</strong>: Led end-to-end development
        from scratch, building the UI with React.js and JavaScript, REST APIs
        for the Java microservice using design patterns, and secure
        configuration storage with Vault DB. Reduced delivery time from 2 hours
        to 5 minutes and delivered multiple production deployments used by{" "}
        <strong>8+ enterprise customers</strong>, including Airbnb.
      </>,
      <>
        <strong>Config-driven Architecture</strong>: Architected and implemented
        a design-pattern-based architecture for the SkopeIT microservice,
        reducing boilerplate code and accelerating feature development by{" "}
        <strong>60%</strong>. Mentored two engineers working on the
        microservice.
      </>,
      <>
        <strong>AI Agents</strong>: Developed and leveraged AI agents with an
        SDD approach to migrate legacy Angular pages to React microfrontends,
        legacy PHP code to Java, and Node.js microservices, reducing the
        migration timeline from <strong>3 months to 2 weeks</strong>.
      </>,
      <>
        Served as the <strong>on-call engineer</strong>, troubleshooting
        production issues using Sumo Logic, Grafana, and Kubernetes.
      </>,
    ],
  },
  {
    company: "VMware",
    role: "Software Engineer 2",
    logo: "/vmware.png",
    duration: "Apr 2021 - Oct 2024",
    location: "Bengaluru, India",
    skills: ["React", "JavaScript", "Java", "REST APIs", "Kubernetes"],
    achievements: [
      {
        title: "At Our Best Award",
        file: "/documents/atourbest.pdf",
      },
      {
        title: "Hackathon - 3rd Place",
        file: "/documents/hackathon.jpeg",
      },
    ],
    points: [
      <>
        <strong>Crown Jewel feature</strong>: Led end-to-end development using
        React.js and responsive topologies on the frontend. Developed a Java
        traffic-analysis algorithm and REST APIs for critical entities, reducing
        security attacks on them by <strong>70%</strong>.
      </>,
      <>
        <strong>Applications feature</strong>: Revamped the Single App Dashboard
        and developed flow-based application discovery methods, achieving{" "}
        <strong>95% accuracy</strong> using VMs and Kubernetes services.
      </>,
      <>
        <strong>Dynamic Table Framework</strong>: Designed a reusable framework
        with built-in sorting, filtering, pagination, and API integration,
        reducing duplicate code by <strong>80%</strong>.
      </>,
      <>
        Received the <strong>At Our Best Award</strong> and secured{" "}
        <strong>3rd place in the Hackathon</strong>.
      </>,
    ],
  },
  {
    company: "SAP",
    role: "Software Engineer",
    logo: "/sap.png",
    duration: "Jul 2020 - Mar 2021",
    location: "Bengaluru, India",
    skills: ["SAP UI5", "JavaScript", "Unit Testing"],
    points: [
      "Developed product learning guides under the Help section for features using SAP UI5.",
      <>
        Improved unit test coverage for the codebase from{" "}
        <strong>81% to 89%</strong>.
      </>,
    ],
  },
  {
    company: "IIT Bombay",
    role: "Summer Intern",
    duration: "May 2019 - Jul 2019",
    location: "Mumbai, India",
    skills: ["Web Development", "Online Assessments"],
    points: [
      "Developed an online assessment platform with distinct user interfaces tailored to students and professors.",
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
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className={styles.companyLogo}
                    />
                  )}

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
                        <MdOpenInNew className={styles.docBtnIcon} />
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
