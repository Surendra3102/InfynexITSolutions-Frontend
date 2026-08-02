import "./MissionVision.css";

import {
  FaEye,
  FaBullseye,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaGraduationCap,
} from "react-icons/fa";

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Integrity",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
  },
  {
    icon: <FaUsers />,
    title: "Customer Success",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
  },
  {
    icon: <FaHandshake />,
    title: "Transparency",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
  },
];

function VisionMission() {
  return (
    <section className="vision-mission">

      <div className="vision-mission-container">

        <div className="vision-mission-header">

          <span className="vision-mission-badge">
            OUR PURPOSE
          </span>

          <h2 className="vision-mission-title">
            Vision, Mission & Core Values
          </h2>

          <p className="vision-mission-subtitle">
            Everything we do is guided by a clear vision,
            a meaningful mission, and values that define
            who we are as an organization.
          </p>

        </div>

        <div className="vision-mission-grid">

          {/* Vision */}

          <div className="vision-card">

            <div className="vision-icon">

              <FaEye />

            </div>

            <h3>Our Vision</h3>

            <p>
              To become a globally trusted partner
              for IT talent and digital transformation.
            </p>

          </div>

          {/* Mission */}

          <div className="mission-card">

            <div className="mission-icon">

              <FaBullseye />

            </div>

            <h3>Our Mission</h3>

            <p>
              To connect businesses with exceptional
              talent while delivering innovative
              technology solutions that create
              long-term value.
            </p>

          </div>

        </div>

        <div className="core-values">

          <h3 className="core-values-title">

            Core Values

          </h3>

          <div className="core-values-grid">

            {values.map((item, index) => (

              <div
                key={index}
                className="core-value-card"
              >

                {item.icon}

                <span>{item.title}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default VisionMission;