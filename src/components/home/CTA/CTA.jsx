import "./CTA.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function CTA() {
  return (
    <section className="home-cta">

      <div className="home-cta-container">

        <div className="home-cta-content">

          <span className="home-cta-badge">
            LET'S CONNECT
          </span>

          <h2 className="home-cta-title">
            Let's Build the Future Together
          </h2>

          <p className="home-cta-description">
            Whether you're looking to hire exceptional IT talent or develop
            innovative software solutions, Infynex Global IT Solutions Pvt.
            Ltd. is here to help. Partner with us to accelerate your business
            through technology, innovation, and world-class talent.
          </p>

          <div className="home-cta-buttons">

            <Link
              to="/employers#employer-form"
              className="home-cta-primary"
            >
              Hire Talent
              <FaArrowRight />
            </Link>

            <Link
              to="/contact#contact-form"
              className="home-cta-secondary"
            >
              Build Software
              <FaArrowRight />
            </Link>

          </div>

          <div className="home-cta-features">

            <div>
              <FaCheckCircle />
              <span>IT Staffing</span>
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

      </div>

    </section>
  );
}

export default CTA;