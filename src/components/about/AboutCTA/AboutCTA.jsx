import "./AboutCTA.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function AboutCTA() {
  return (
    <section className="about-cta">

      <div className="about-cta-container">

        <div className="about-cta-content">

          <span className="about-cta-badge">
            LET'S CONNECT
          </span>

          <h2 className="about-cta-title">
            Ready to Partner with Infynex?
          </h2>

          <p className="about-cta-description">
            Whether you're looking for skilled IT professionals,
            innovative software solutions, or a trusted technology
            partner, our team is ready to help your business grow.
            Let's build scalable solutions and long-term success together.
          </p>

          <div className="about-cta-buttons">

            <Link
              to="/contact"
              className="about-cta-primary"
            >
              Contact Us
              <FaArrowRight />
            </Link>

            <Link
              to="/services"
              className="about-cta-secondary"
            >
              Explore Services
              <FaArrowRight />
            </Link>

          </div>

          <div className="about-cta-features">

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
              <span>Digital Transformation</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;