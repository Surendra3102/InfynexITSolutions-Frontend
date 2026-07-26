import "./AboutCTA.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function AboutCTA() {
  return (
    <section className="about-cta">

      <div className="container">

        <div className="about-cta-content">

          <span className="section-badge">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Ready to Build Your Team or Find Your Dream Job?
          </h2>

          <p>
            Whether you're looking to hire exceptional talent or searching for
            your next career opportunity, Infynex Global IT Solutions is here
            to make the journey simple, efficient, and successful.
          </p>

          <div className="about-cta-buttons">

            <Link to="/employers" className="primary-btn">
              Hire Talent
              <FiArrowRight />
            </Link>

            <Link to="/contact" className="secondary-btn">
              Find Jobs 
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;