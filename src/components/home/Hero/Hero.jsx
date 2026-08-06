import "./Hero.css";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import desktopHero from "../../../assets/about-hero.png";
import mobileHero from "../../../assets/mobile-hero2.png";


function Hero() {
  return (
    <section className="hero">

      {/* Background Image */}

      <picture className="hero-picture">

        <source
          media="(max-width:768px)"
          srcSet={mobileHero}
        />

        <img
          src={desktopHero}
          alt="Infynex Global"
          className="hero-image"
        />

      </picture>

      {/* Gradient Overlay */}

      <div className="hero-overlay"></div>

      {/* Hero Content */}

      <div className="container">

        <div className="hero-content">

          <span className="hero-tag">
            Recruitment • Staffing • Technology
          </span>

          <h1>
            Connecting Exceptional
            <br />
            <span>Talent</span> with
            <br />
            <span>Growing Businesses</span>
          </h1>

          <p>
            Helping businesses build high-performing teams through
            recruitment, staffing, executive hiring, and technology
            solutions tailored for sustainable business growth.
          </p>

          <div className="hero-buttons">

            <Link
              to="/employers"
              className="hero-btn-primary"
            >
              Hire Talent

              <FiArrowRight />

            </Link>

            <Link
              to="/services"
              className="hero-btn-secondary"
            >
              Explore Services

              <FiArrowRight />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;