import "./Journey.css";
import {
  FiFlag,
  FiUsers,
  FiCode,
  FiCloud,
  FiGlobe,
} from "react-icons/fi";

const journeyData = [
  {
    year: "2026",
    title: "Company Founded",
    icon: <FiFlag />,
    description:
      "Infynex Global IT Solutions Pvt. Ltd. was established with a vision to empower businesses through exceptional talent and innovative technology solutions.",
  },
  {
    year: "2026",
    title: "IT Recruitment Services",
    icon: <FiUsers />,
    description:
      "Started delivering end-to-end IT staffing, permanent hiring, contract staffing, executive search, and recruitment solutions for startups, SMEs, and enterprises.",
  },
  {
    year: "Growth",
    title: "Software Development",
    icon: <FiCode />,
    description:
      "Expanded into custom software development, web applications, mobile applications, enterprise solutions, and API development for modern businesses.",
  },
  {
    year: "Today",
    title: "Cloud & Digital Solutions",
    icon: <FiCloud />,
    description:
      "Helping organizations embrace cloud technologies, AI, automation, and digital transformation through scalable technology solutions.",
  },
  {
    year: "Future",
    title: "Global Expansion",
    icon: <FiGlobe />,
    description:
      "Our vision is to become a globally trusted partner for IT talent, software development, and digital transformation services.",
  },
];

function Journey() {
  return (
    <section className="journey-section">

      <div className="journey-container">

        <div className="journey-header">

          <span className="journey-badge">
            OUR JOURNEY
          </span>

          <h2 className="journey-title">
            Growing Through Talent & Technology
          </h2>

          <p className="journey-subtitle">
            Every milestone reflects our commitment to helping businesses
            grow through world-class IT recruitment, innovative software
            development, and long-term technology partnerships.
          </p>

        </div>

        <div className="journey-wrapper">

          {journeyData.map((item, index) => (

            <div className="journey-item" key={index}>

              <div className="journey-circle">

                {item.icon}

              </div>

              <div className="journey-card">

                <span className="journey-year">

                  {item.year}

                </span>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;