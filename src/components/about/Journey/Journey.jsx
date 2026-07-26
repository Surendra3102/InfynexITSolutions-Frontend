import "./Journey.css";
import {
  FiFlag,
  FiBriefcase,
  FiMapPin,
  FiTrendingUp,
} from "react-icons/fi";

const journeyData = [
  {
    year: "2026",
    title: "Company Founded",
    icon: <FiFlag />,
    description:
      "Infynex IT Solutions was established with a vision to simplify recruitment through trust, transparency, and innovation.",
  },
  {
    year: "2026",
    title: "Recruitment Services Started",
    icon: <FiBriefcase />,
    description:
      "Started delivering IT and Non-IT recruitment solutions for startups, SMEs, and growing businesses.",
  },
  {
    year: "Future",
    title: "Expansion Across India",
    icon: <FiMapPin />,
    description:
      "Building a nationwide recruitment network connecting employers with skilled professionals.",
  },
  {
    year: "Vision",
    title: "Long-Term Growth",
    icon: <FiTrendingUp />,
    description:
      "Continuously expanding our services, technology, and partnerships to become a trusted recruitment brand.",
  },
];

function Journey() {
  return (
    <section className="journey-section">

      <div className="container">

        <div className="journey-header">

          <span className="section-badge">
            OUR JOURNEY
          </span>

          <h2>Growing with Purpose</h2>

          <p>
            Every milestone reflects our commitment to connecting businesses
            with exceptional talent while creating meaningful career
            opportunities.
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

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;