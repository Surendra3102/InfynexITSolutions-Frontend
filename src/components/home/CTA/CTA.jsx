import "./CTA.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        <div className="cta-content">

          <h2>Need Skilled Professionals?</h2>

          <p>
            Tell us your hiring needs and our team will connect you with
            top-tier talent within <strong>72 hours.</strong>
          </p>

          <div className="cta-buttons">

            <Link to="/contact#contact-form" className="btn-primary" >
              Contact Our Team
              <FiArrowRight />
            </Link>

            <Link to="/Employers#employe-form" className="btn-outline">
              Request Talent
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;