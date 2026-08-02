import "./WhyInfynex.css";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCheckCircle,
  FaLaptopCode,
  FaCloud,
  FaHandshake,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import whyImage from "../../../assets/why_infynex.png";

const features = [
  {
    icon: <FaUsers />,
    title: "Experienced Recruitment Specialists",
  },
  {
    icon: <FaUsers />,
    title: "Access to a Large IT Talent Pool",
  },
  {
    icon: <FaCheckCircle />,
    title: "Fast Turnaround Time",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality-Driven Hiring Process",
  },
  {
    icon: <FaLaptopCode />,
    title: "Agile Software Development",
  },
  {
    icon: <FaCloud />,
    title: "Cost-Effective Engagement Models",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Communication",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Customer Support",
  },
];

function WhyInfynex() {
  return (
    <section className="home-why">

      <div className="home-why-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="home-why-content">

          <span className="home-why-badge">
            WHY CHOOSE INFYNEX
          </span>

          <h2 className="home-why-title">
            Your Trusted Partner in Talent & Technology
          </h2>

          <p className="home-why-description">
            At <strong>Infynex Global IT Solutions Pvt. Ltd.</strong>, we help
            businesses accelerate growth through expert IT recruitment,
            software engineering, cloud technologies, and digital
            transformation services. Our client-first approach,
            experienced professionals, and commitment to excellence
            make us a trusted technology and talent partner.
          </p>

          <div className="home-why-features">

            {features.map((feature, index) => (

              <div
                className="home-why-feature"
                key={index}
              >

                <div className="home-why-feature-icon">
                  {feature.icon}
                </div>

                <span>
                  {feature.title}
                </span>

              </div>

            ))}

          </div>

          <Link
            to="/about"
            className="home-why-btn"
          >
            Learn More

            <FaArrowRight />

          </Link>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="home-why-image">

          <img
            src={whyImage}
            alt="Infynex Global IT Solutions"
          />

          {/* Floating Card */}

          <div className="home-why-floating-card top-card">

            <h4>Fast Delivery</h4>

            <span>✔ Quick Hiring</span>

            <span>✔ Agile Development</span>

          </div>

          {/* Floating Card */}

          <div className="home-why-floating-card bottom-card">

            <h4>End-to-End Solutions</h4>

            <span>✔ IT Staffing</span>

            <span>✔ Software Development</span>

            <span>✔ Cloud & AI Services</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyInfynex;