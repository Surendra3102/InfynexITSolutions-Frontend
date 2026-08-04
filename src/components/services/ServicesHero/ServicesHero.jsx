import "./ServicesHero.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

import heroImage from "../../../assets/services-hero.png";

function ServicesHero() {
  return (
    <section className="services-hero">

      <div className="services-hero-container">

        {/* Left */}

        <div className="services-hero-content">

          <span className="services-hero-badge">
            OUR SERVICES
          </span>

          <h1 className="services-hero-title">
            IT Recruitment &
            <span> Software Development </span>
            Solutions
          </h1>

          <p className="services-hero-description">
            We help businesses accelerate growth through world-class
            IT staffing, innovative software development,
            cloud solutions, AI automation, and digital transformation.
            From hiring exceptional talent to building scalable software,
            Infynex is your trusted technology partner.
          </p>

          <div className="services-hero-buttons">

            <Link
              to="/contact"
              className="services-primary-btn"
            >
              Hire Talent
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="services-secondary-btn"
            >
              Build Software
            </Link>

          </div>

          <div className="services-hero-features">

            <div>
              <FaCheckCircle />
              <span>IT Recruitment</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Software Development</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Cloud Solutions</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>AI & Automation</span>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="services-hero-image">

          <img
            src={heroImage}
            alt="Infynex Services"
          />

        </div>

      </div>

    </section>
  );
}

export default ServicesHero;