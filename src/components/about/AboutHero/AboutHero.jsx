import "./AboutHero.css";

import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaBuilding,
} from "react-icons/fa";

import heroImage from "../../../assets/about-hero.png";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-container">

        {/* Left */}

        <div className="about-hero-content">

          <span className="about-hero-badge">
            ABOUT INFYNEX
          </span>

          <h1 className="about-hero-title">
            Your Growth Partner in
            <span> Talent & Technology</span>
          </h1>

          <p className="about-hero-description">

            At <strong>Infynex Global IT Solutions Pvt. Ltd.</strong>,
            we believe every successful business is built on
            exceptional people and innovative technology.

            We help startups, SMEs and enterprises accelerate
            growth through IT staffing, recruitment,
            software development and digital transformation.

          </p>

          <div className="about-hero-buttons">

            <Link
              to="/contact"
              className="about-primary-btn"
            >
              Contact Us

              <FaArrowRight />

            </Link>

            <Link
              to="/services"
              className="about-secondary-btn"
            >
              Our Services
            </Link>

          </div>

          <div className="about-hero-highlights">

            <div>

              <FaBuilding />

              <span>IT Staffing</span>

            </div>

            <div>

              <FaBuilding />

              <span>Software Development</span>

            </div>

            <div>

              <FaBuilding />

              <span>Cloud Solutions</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="about-hero-image">

          <img
            src={heroImage}
            alt="About Infynex"
          />

        </div>

      </div>

    </section>
  );
}

export default AboutHero;