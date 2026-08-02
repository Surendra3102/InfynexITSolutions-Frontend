import "./ServicesCTA.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function ServicesCTA() {

  return (

    <section className="services-cta">

      <div className="services-cta-container">

        <div className="services-cta-content">

          <span className="services-cta-badge">

            LET'S WORK TOGETHER

          </span>

          <h2 className="services-cta-title">

            Ready to Build Your Next
            Digital Success Story?

          </h2>

          <p className="services-cta-description">

            Whether you're looking to hire exceptional
            IT professionals or build innovative software
            solutions, our experienced team is ready
            to help you achieve your business goals.

          </p>

          <div className="services-cta-buttons">

            <Link
              to="/contact"
              className="services-cta-primary"
            >

              Request Consultation

              <FaArrowRight />

            </Link>

            <Link
              to="/contact"
              className="services-cta-secondary"
            >

              Contact Us

            </Link>

          </div>

          <div className="services-cta-features">

            <div>

              <FaCheckCircle />

              <span>

                IT Recruitment

              </span>

            </div>

            <div>

              <FaCheckCircle />

              <span>

                Software Development

              </span>

            </div>

            <div>

              <FaCheckCircle />

              <span>

                Cloud Solutions

              </span>

            </div>

            <div>

              <FaCheckCircle />

              <span>

                AI & Automation

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ServicesCTA;