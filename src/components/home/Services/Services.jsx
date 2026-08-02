import "./Services.css";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaBriefcase />,
    title: "IT Staffing & Recruitment",
    description:
      "Permanent hiring, contract staffing, executive search and recruitment outsourcing for organizations of every size.",
    color: "#2563EB",
  },
  {
    icon: <FaCode />,
    title: "Software Development",
    description:
      "Custom web applications, enterprise software, SaaS products and scalable digital solutions.",
    color: "#4F46E5",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Android, iOS, Flutter and React Native applications built for performance and user experience.",
    color: "#06B6D4",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Cloud migration, DevOps, AWS, Azure infrastructure and scalable deployment services.",
    color: "#14B8A6",
  },
  {
    icon: <FaRobot />,
    title: "AI & Automation",
    description:
      "Artificial Intelligence, Machine Learning and intelligent automation solutions.",
    color: "#8B5CF6",
  },
  {
    icon: <FaUsers />,
    title: "Executive Search & RPO",
    description:
      "Leadership hiring, strategic talent acquisition and Recruitment Process Outsourcing.",
    color: "#F59E0B",
  },
];

function HomeServices() {
  return (
    <section className="home-services">

      <div className="home-services-container">

        <div className="home-services-header">

          <span className="home-services-badge">
            OUR SERVICES
          </span>

          <h2 className="home-services-title">
            Talent Solutions & Digital Innovation
          </h2>

          <p className="home-services-subtitle">
            Empowering businesses through expert IT recruitment,
            software engineering, cloud technologies, AI solutions
            and digital transformation services.
          </p>

        </div>

        <div className="home-services-grid">

          {services.map((service, index) => (

            <div
              className="home-service-card"
              key={index}
            >

              <div
                className="home-service-icon"
                style={{
                  background: service.color,
                }}
              >
                {service.icon}
              </div>

              <div className="home-service-content">

                <h3 className="home-service-title">
                  {service.title}
                </h3>

                <p className="home-service-description">
                  {service.description}
                </p>

              </div>

              <Link
                to="/services"
                className="home-service-link"
              >
                Learn More

                <FaArrowRight />

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HomeServices;