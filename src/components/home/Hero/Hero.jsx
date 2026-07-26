import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import heroImage from "../../../assets/hero.png";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        {/* Left Side */}

        <div className="hero-left">


          <h1>
            Connecting <span>Exceptional Talent</span><br />
            with Leading Companies
          </h1>

          <p>
            We help businesses hire top talent while helping professionals
            discover rewarding career opportunities.
          </p>

          <div className="hero-buttons">

          
            <Link to="/employers#employer-form" className="primary-btn">
            Hire Talent
            <FaArrowRight />
            </Link>
            
            <Link to="/contact#contact-form" className="secondary-btn">
            <FaSearch/>
            FInd Jobs
            </Link>

          </div>

          <div className="hero-stats">

            <div>
              <h3>500+</h3>
              <p>Clients</p>
            </div>

            <div>
              <h3>5K+</h3>
              <p>Placements</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Satisfaction</p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-right">

          <img src={heroImage} alt="Recruitment" />

          <div className="floating-card top-card">

            <FiTrendingUp />

            <div>
              <h4>98%</h4>
              <span>Client Satisfaction</span>
            </div>

          </div>

          <div className="floating-card bottom-card">

            <HiOutlineBriefcase />

            <div>

              <h4>Why Choose Us</h4>

              <span>Verified Employers</span>

              <span>Fast Hiring</span>

              <span>Career Support</span>

            </div>

          </div>

        </div>

      </div>

      

    </section>
  );
}

export default Hero;