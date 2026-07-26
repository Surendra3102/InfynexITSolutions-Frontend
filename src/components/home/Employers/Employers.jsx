import "./Employers.css";
import { FiCheckCircle, FiClock, FiArrowRight } from "react-icons/fi";
import employerImage from "../../../assets/employe.png";
import { Link } from "react-router-dom";
const features = [
  "Dedicated account manager for every engagement",
  "Pre-screened, interview-ready candidates",
  "Replacement guarantee within 90 days",
  "Flexible engagement models — retainer or contingency",
  "Real-time applicant tracking dashboard",
];

function Employers() {
  return (
    <section className="employers">

      <div className="container employers-grid">

        {/* Left Content */}

        <div className="employers-content">

          <span className="section-badge">
            FOR EMPLOYERS
          </span>

          <h2>
            Build World-Class Teams with Confidence
          </h2>

          <p className="intro">
            Partner with Infynex for a seamless, data-driven hiring
            experience. From startups to Fortune 500 companies —
            we scale with your hiring needs.
          </p>

          <div className="employer-features">

            {features.map((item, index) => (

              <div className="feature-row" key={index}>

                <FiCheckCircle className="tick" />

                <span>{item}</span>

              </div>

            ))}

          </div>

          <div className="employer-buttons">

            <Link to="/employers" className="primary-btn">
              Request Talent
              <FiArrowRight />
            </Link>

            <Link to="/contact" className="outline-btn" style={{textDecoration:"none"}}>
              Schedule a Call
            </Link>

          </div>

        </div>

        {/* Right Image */}

        <div className="employers-image">

          <img
            src={employerImage}
            alt="Employers"
          />

          <div className="hire-card">

            <div className="hire-icon">
              <FiClock />
            </div>

            <div>

              <h3>12 Days</h3>

              <p>Avg. Time-to-Hire</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Employers;