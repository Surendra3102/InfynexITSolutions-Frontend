import "./Hero.css";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCode,
  FaCloud,
} from "react-icons/fa";
import {
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";

import heroImage from "../../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        {/* ================= Left Side ================= */}

        <div className="hero-left">

          <h1>
            Empowering Businesses
            <br />
            with <span>Talent & Technology</span>
          </h1>

          <p>
            Infynex Global IT Solutions Pvt. Ltd. helps businesses accelerate growth through world-class IT staffing and innovative software development services.
          </p>

          <div className="hero-buttons">

            <Link
              to="/employers#employer-form"
              className="primary-btn"
            >
              Hire Talent
              <FaArrowRight />
            </Link>

            <Link
              to="/contact#contact-form"
              className="secondary-btn"
            >
              Start Your Project
              <FaAngleDoubleRight />
            </Link>

          </div>

          {/* Service Highlights */}

          <div className="hero-features">

            <div>
              <HiOutlineBriefcase />
              <span>IT Recruitment</span>
            </div>

            <div>
              <FaCode />
              <span>Software Development</span>
            </div>

            <div>
              <FaCloud />
              <span>Cloud Solutions</span>
            </div>

          </div>

          <h3 className="trusted-title">
            Trusted By
          </h3>

          <div className="hero-stats">

            <div>
              <h4>Startups</h4>
            </div>

            <div>
              <h4>SMEs</h4>
            </div>

            <div>
              <h4>Enterprises</h4>
            </div>

          </div>

        </div>

        {/* ================= Right Side ================= */}

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Infynex Global IT Solutions"
          />

          {/* Floating Card 1 */}

          <div className="floating-card top-card">

            <FiTrendingUp />

            <div>
              <h4>100+</h4>
              <span>Projects Delivered</span>
            </div>

          </div>

          {/* Floating Card 2 */}

          <div className="floating-card bottom-card">

            <FiUsers />

            <div>

              <h4>Our Expertise</h4>

              <span>✔ IT Staffing</span>

              <span>✔ Software Development</span>

              <span>✔ Cloud & AI Solutions</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;