import "./ServicesHero.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function ServicesHero() {
  return (
    <section className="services-hero">

      <div className="container">

        <span className="section-badge">
          WHAT WE DO
        </span>

        <h1>
          Full-Spectrum Recruitment
          <span>& HR Services</span>
        </h1>

        <p>
          We provide end-to-end recruitment and HR solutions that help
          organizations hire smarter, faster, and with confidence. From
          permanent hiring to RPO, our expert team supports every stage of
          your talent acquisition journey.
        </p>

        <div className="hero-buttons">

          <a href="#services" className="primary-btn">
            Explore Services
            <FiArrowRight />
          </a>

          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServicesHero;