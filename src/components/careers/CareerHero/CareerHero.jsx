import "./CareerHero.css";

import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiCpu,
} from "react-icons/fi";

import heroImage from "../../../assets/careers/career-hero.png";

function CareerHero() {

  const highlights = [

    {
      icon: <FiTrendingUp />,
      title: "Career Growth",
    },

    {
      icon: <FiUsers />,
      title: "Collaborative Teams",
    },

    {
      icon: <FiAward />,
      title: "Continuous Learning",
    },

    {
      icon: <FiCpu />,
      title: "Innovation Driven",
    },

  ];

    return (

    <section className="career-hero">

      <div className="container">

        <div className="career-hero-grid">

          {/* LEFT CONTENT */}

          <div className="career-hero-content">

            <span className="career-badge">

              CAREERS AT INFYNEX GLOBAL

            </span>

            <h1>

              Build the Future.
              <span> Build Your Career.</span>

            </h1>

            <p>

              Join a workplace where innovation,
              collaboration, and continuous learning
              create opportunities to grow personally
              and professionally. Discover exciting
              career paths and become part of our
              journey toward excellence.

            </p>

            <div className="career-hero-buttons">

              <a
                href="#career-domains"
                className="career-primary-btn"
              >

                Explore Careers

                <FiArrowRight />

              </a>

              <Link
                to="/contact"
                className="career-secondary-btn"
              >

                Contact HR

              </Link>

            </div>

            {/* Floating Highlights */}

            <div className="career-highlights">

              {highlights.map((item, index) => (

                <div
                  key={index}
                  className="career-highlight-card"
                >

                  <div className="career-highlight-icon">

                    {item.icon}

                  </div>

                  <span>

                    {item.title}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="career-hero-image">

            <div className="career-image-wrapper">

              <img
                src={heroImage}
                alt="Career at Infynex"
              />

              <div className="floating-box box-one">

                <h4>

                  Career Growth

                </h4>

                <span>

                  Learn • Grow • Lead

                </span>

              </div>

              <div className="floating-box box-two">

                <h4>

                  Modern Workplace

                </h4>

                <span>

                  Innovation Everyday

                </span>

              </div>

              <div className="floating-box box-three">

                <h4>

                  Opportunities

                </h4>

                <span>

                  Multiple Career Paths

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default CareerHero;