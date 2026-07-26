import "./ServicesCTA.css";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";

function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="container">

        <div className="cta-content">

          <span className="cta-badge">
            LET'S BUILD YOUR TEAM
          </span>

          <h2>
            Ready to Find the Right Talent?
          </h2>

          <p>
            Whether you're hiring one professional or building an entire team,
            Infynex is here to simplify your recruitment process with reliable,
            fast, and customized hiring solutions.
          </p>

          <div className="cta-buttons">

            <Link to="/contact" className="cta-primary-btn">
              Schedule Free Consultation
              <FiArrowRight />
            </Link>

            <Link to="/contact" className="cta-secondary-btn">
              <FiPhoneCall />
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesCTA;