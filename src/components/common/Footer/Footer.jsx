import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";

import logo from "../../../assets/logo.png";

function Footer() {

  return (

    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          {/* Company */}

          <div className="footer-company">

            <img
              src={logo}
              alt="Infynex Global"
              className="footer-logo"
            />

            <p>

              Infynex Global IT Solutions delivers recruitment,
              staffing, and workforce solutions that connect
              exceptional talent with forward-thinking businesses.

            </p>

            <div className="footer-social">

              <a href="#">

                <FiFacebook />

              </a>

              <a href="#">

                <FiLinkedin />

              </a>

              <a href="#">

                <FiInstagram />

              </a>

              <a href="#">

                <FiTwitter />

              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-links">

            <h4>

              Quick Links

            </h4>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/industries">Industries</Link>

            <Link to="/employers">Employers</Link>

            <Link to="/careers">Careers</Link>

            <Link to="/contact">Contact</Link>

          </div>

          {/* Services */}

          <div className="footer-links">

            <h4>

              Services

            </h4>

            <Link to="/services">

              Permanent Recruitment

            </Link>

            <Link to="/services">

              Contract Staffing

            </Link>

            <Link to="/services">

              Executive Search

            </Link>

            <Link to="/services">

              HR Outsourcing

            </Link>

            <Link to="/services">

              RPO Services

            </Link>

          </div>

          {/* Contact */}

          <div className="footer-contact">

            <h4>

              Contact

            </h4>

            <div>

              <FiMapPin />

              <span>

                Madhapur,
                Hyderabad

              </span>

            </div>

            <div>

              <FiPhone />

              <span>

                +91 80 4567 8900

              </span>

            </div>

            <div>

              <FiMail />

              <span>

                hello@infynex.in

              </span>

            </div>

            <Link
              to="/contact"
              className="footer-contact-btn"
            >

              Contact Us

              <FiArrowUpRight />

            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

            © 2026 Infynex Global IT Solutions Pvt. Ltd.
            All rights reserved.

          </p>

          <div>

            <Link to="/privacy">

              Privacy

            </Link>

            <Link to="/terms">

              Terms

            </Link>

            <Link to="/cookies">

              Cookies

            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;