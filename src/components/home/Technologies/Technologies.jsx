import "./Technologies.css";
import {
  FaReact,
  FaServer,
  FaCloud,
  FaDatabase,
  FaDocker,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

const technologies = [
  {
    icon: <FaReact />,
    title: "Frontend",
    color: "#2563EB",
    techs: [
      "React",
      "Angular",
      "Vue.js",
      "JavaScript",
    ],
  },
  {
    icon: <FaServer />,
    title: "Backend",
    color: "#7C3AED",
    techs: [
      "Python",
      "Java",
      "Node.js",
      ".NET",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud",
    color: "#06B6D4",
    techs: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    color: "#16A34A",
    techs: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    icon: <FaDocker />,
    title: "DevOps",
    color: "#F59E0B",
    techs: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    icon: <FaRobot />,
    title: "AI & Automation",
    color: "#4F46E5",
    techs: [
      "Machine Learning",
      "Generative AI",
      "Automation",
      "Data Analytics",
    ],
  },
];

function Technologies() {
  return (
    <section className="home-technologies">

      <div className="home-technologies-container">

        {/* Heading */}

        <div className="home-technologies-header">

          <span className="home-technologies-badge">
            TECHNOLOGIES
          </span>

          <h2 className="home-technologies-title">
            Technologies We Work With
          </h2>

          <p className="home-technologies-subtitle">
            We leverage modern technologies, cloud platforms,
            AI capabilities, and agile development practices
            to build secure, scalable, and future-ready
            digital solutions for businesses worldwide.
          </p>

        </div>

        {/* Grid */}

        <div className="home-technologies-grid">

          {technologies.map((item, index) => (

            <div
              className="home-technology-card"
              key={index}
            >

              {/* Icon */}

              <div
                className="home-technology-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="home-technology-title">
                {item.title}
              </h3>

              {/* Technologies */}

              <ul className="home-technology-list">

                {item.techs.map((tech, i) => (

                  <li key={i}>

                    <span className="home-tech-dot"></span>

                    {tech}

                  </li>

                ))}

              </ul>

              {/* Footer */}

        

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Technologies;