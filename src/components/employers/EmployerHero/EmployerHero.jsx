import "./EmployerHero.css";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiUsers,
  FiShield,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

import heroImage from "../../../assets/employer-hero.png";

function EmployerHero() {
  return (
    <section className="employer-hero">

      <div className="container employer-hero-grid">

        {/* Left */}

        <div className="employer-hero-content">

          <span className="employer-badge">
            FOR EMPLOYERS
          </span>

          <h1>
            Hire the Best.
            <span> Hire with Infynex.</span>
          </h1>

          <p>
            Whether you're building a startup team or expanding your workforce,
            Infynex Global helps you connect with skilled IT and Non-IT
            professionals through a streamlined recruitment process.
          </p>

          <div className="employer-hero-buttons">

            <a href="#employer-form" className="employer-primary-btn">
              Request Talent
              <FiArrowRight />
            </a>

            <Link to="/contact" className="employer-secondary-btn">
              Talk to Our Team
            </Link>

          </div>

          <div className="employer-feature-grid">

            <div className="employer-feature-card">
              <FiUsers />
              <div>
                <h4>IT & Non-IT Recruitment</h4>
                <p>Qualified professionals across multiple industries.</p>
              </div>
            </div>

            <div className="employer-feature-card">
              <FiShield />
              <div>
                <h4>Candidate Screening</h4>
                <p>Carefully evaluated profiles to save hiring time.</p>
              </div>
            </div>

            <div className="employer-feature-card">
              <FiBriefcase />
              <div>
                <h4>Flexible Hiring</h4>
                <p>Permanent, contract and project-based hiring.</p>
              </div>
            </div>

            <div className="employer-feature-card">
              <FiCheckCircle />
              <div>
                <h4>Dedicated Support</h4>
                <p>Personalized assistance throughout recruitment.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="employer-hero-image">

          <img
            src={heroImage}
            alt="Employer Recruitment"
          />

        </div>

      </div>

    </section>
  );
}

export default EmployerHero;