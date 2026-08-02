import "./Industries.css";

import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaIndustry,
  FaTruck,
  FaBroadcastTower,
  FaGraduationCap,
  FaCapsules,
  FaCar,
  FaShieldAlt,
  FaLandmark,
  FaRocket,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaHospital />,
    title: "Healthcare",
    description:
      "Healthcare technology, hospitals, diagnostics and medical solutions.",
    color: "#2563EB",
  },
  {
    icon: <FaUniversity />,
    title: "Banking & Finance",
    description:
      "Digital banking, fintech, financial services and compliance.",
    color: "#7C3AED",
  },
  {
    icon: <FaShoppingCart />,
    title: "Retail & E-Commerce",
    description:
      "Retail platforms, online marketplaces and customer experiences.",
    color: "#06B6D4",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    description:
      "Industrial automation, ERP and smart manufacturing solutions.",
    color: "#F59E0B",
  },
  {
    icon: <FaTruck />,
    title: "Logistics",
    description:
      "Transportation, warehouse and supply chain management.",
    color: "#16A34A",
  },
  {
    icon: <FaBroadcastTower />,
    title: "Telecommunications",
    description:
      "Telecom software, infrastructure and digital connectivity.",
    color: "#0EA5E9",
  },
  {
    icon: <FaGraduationCap />,
    title: "Education",
    description:
      "Learning platforms and digital education technologies.",
    color: "#2563EB",
  },
  {
    icon: <FaCapsules />,
    title: "Pharma",
    description:
      "Pharmaceutical software and healthcare compliance systems.",
    color: "#DC2626",
  },
  {
    icon: <FaCar />,
    title: "Automotive",
    description:
      "Automotive software and connected mobility solutions.",
    color: "#EA580C",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insurance",
    description:
      "Insurance platforms, claims and digital policy management.",
    color: "#0F766E",
  },
  {
    icon: <FaLandmark />,
    title: "Government",
    description:
      "Secure public sector digital transformation initiatives.",
    color: "#4338CA",
  },
  {
    icon: <FaRocket />,
    title: "Startups",
    description:
      "Helping startups scale with talent and technology.",
    color: "#EC4899",
  },
];

function Industries() {
  return (
    <section className="home-industries">

      <div className="home-industries-container">

        <div className="home-industries-header">

          <span className="home-industries-badge">
            INDUSTRIES
          </span>

          <h2 className="home-industries-title">
            Industries We Serve
          </h2>

          <p className="home-industries-subtitle">
            We deliver IT staffing and software development
            solutions across diverse industries, helping
            organizations accelerate innovation and business
            growth.
          </p>

        </div>

        <div className="home-industries-grid">

          {industries.map((item, index) => (

            <div
              className="home-industry-card"
              key={index}
            >

              <div
                className="home-industry-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h3 className="home-industry-title">
                {item.title}
              </h3>

              <p className="home-industry-description">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Industries;