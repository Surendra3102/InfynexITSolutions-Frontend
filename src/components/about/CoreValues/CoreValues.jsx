import "./CoreValues.css";

import {
  FiShield,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiRefreshCw,
} from "react-icons/fi";

const values = [
  {
    icon: <FiShield />,
    title: "Integrity",
    description:
      "We build trust through honesty, transparency, and ethical recruitment practices.",
  },
  {
    icon: <FiAward />,
    title: "Excellence",
    description:
      "We strive to deliver high-quality hiring solutions that exceed expectations.",
  },
  {
    icon: <FiUsers />,
    title: "People First",
    description:
      "Every client and candidate deserves respect, equal opportunity, and personalized support.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth",
    description:
      "We help organizations and professionals grow together through meaningful opportunities.",
  },
  {
    icon: <FiHeart />,
    title: "Commitment",
    description:
      "We stay dedicated to delivering reliable recruitment services and long-term partnerships.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Innovation",
    description:
      "We embrace technology and continuously improve our hiring process for better results.",
  },
];

function CoreValues() {
  return (
    <section className="core-values">

      <div className="container">

        <div className="section-title">

          <span className="section-badge">
            OUR VALUES
          </span>

          <h2>What Drives Us</h2>

          <p>
            Our values define how we work, collaborate, and create lasting
            relationships with both employers and job seekers.
          </p>

        </div>

        <div className="values-grid">

          {values.map((value, index) => (
            <div className="value-card" key={index}>

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default CoreValues;