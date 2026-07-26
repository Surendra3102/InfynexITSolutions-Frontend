import "./Services.css";
import {
  FaBriefcase,
  FaClock,
  FaCode,
  FaUsers,
  FaUserTie,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const services = [
  {
    icon: <FaBriefcase />,
    title: "Permanent Recruitment",
    desc: "Full-time placements aligned with your organization's culture and long-term vision.",
    color: "#2563EB",
  },
  {
    icon: <FaClock />,
    title: "Contract Staffing",
    desc: "Flexible workforce solutions for project-based and temporary requirements.",
    color: "#06B6D4",
  },
  {
    icon: <FaCode />,
    title: "IT Recruitment",
    desc: "Specialized talent acquisition for software engineers and IT leaders.",
    color: "#4F46E5",
  },
  {
    icon: <FaUsers />,
    title: "Executive Search",
    desc: "Identify and hire experienced executives for leadership positions.",
    color: "#7C3AED",
  },
  {
    icon: <FaUserTie />,
    title: "HR Consulting",
    desc: "Expert HR advisory services to improve workforce performance.",
    color: "#F59E0B",
  },
  {
    icon: <FaCog />,
    title: "Recruitment Process Outsourcing",
    desc: "Complete recruitment management from sourcing to onboarding.",
    color: "#F43F5E",
  },
];

function Services() {
  return (
    <section className="services">

      <div className="container">

        <div className="section-title">

          <span>OUR SERVICES</span>

          <h2>Comprehensive Recruitment Solutions</h2>

          <p>
            From executive search to mass hiring — we cover every recruitment
            need with precision and care.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div
                className="service-icon"
                style={{ background: service.color }}
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <Link to="/services">
                Learn More →
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;