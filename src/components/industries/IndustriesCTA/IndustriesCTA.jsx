import "./IndustriesCTA.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import industryImage from "../../../assets/industries/industries-cta.png";

function IndustriesCTA() {

  return (

    <section className="industries-cta">

      <div className="industries-cta-container">

        <div className="industries-cta-content">

          <span className="industries-cta-badge">

            LET'S BUILD THE FUTURE

          </span>

          <h2>

            Industry-Focused Solutions
            That Drive Real Business Growth

          </h2>

          <p>

            Whether you're a startup, enterprise, healthcare provider,
            financial institution, or manufacturing company,
            Infynex delivers the right talent and technology
            to help your business grow faster.

          </p>

          <div className="industries-cta-points">

            <div>

              <FaCheckCircle />

              <span>Industry-Specific Expertise</span>

            </div>

            <div>

              <FaCheckCircle />

              <span>Experienced Recruitment Team</span>

            </div>

            <div>

              <FaCheckCircle />

              <span>Custom Software Development</span>

            </div>

            <div>

              <FaCheckCircle />

              <span>End-to-End Digital Solutions</span>

            </div>

          </div>

          <div className="industries-cta-buttons">

            <Link
              to="/contact"
              className="industries-primary-btn"
            >

              Get Started

              <FaArrowRight />

            </Link>

            <Link
              to="/contact"
              className="industries-secondary-btn"
            >

              Contact Our Team

            </Link>

          </div>

        </div>

        <div className="industries-cta-image">

          <img
            src={industryImage}
            alt="Industries Served"
          />

        </div>

      </div>

    </section>

  );

}

export default IndustriesCTA;