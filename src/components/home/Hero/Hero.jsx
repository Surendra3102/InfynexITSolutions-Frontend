import "./Hero.css";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import desktopHero from "../../../assets/about-hero.png";
import mobileHero from "../../../assets/mobile-hero2.png";

function Hero() {
  return (
    <section className="newhomebanner">

      {/* Background Image */}

      <picture className="newhomebanner-picture">

        <source
          media="(max-width:768px)"
          srcSet={mobileHero}
        />

        <img
          src={desktopHero}
          alt="Infynex Global"
          className="newhomebanner-image"
        />

      </picture>

      {/* Overlay */}

      <div className="newhomebanner-overlay"></div>

      {/* Content */}

      <div className="newhomebanner-container">

        <div className="newhomebanner-content">

          <span className="newhomebanner-tag">
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

          <div className="newhomebanner-buttons">

            <Link
              to="/employers"
              className="newhomebanner-btn-primary"
            >
              Hire Talent
              <FiArrowRight />
            </Link>

            <Link
              to="/services"
              className="newhomebanner-btn-secondary"
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