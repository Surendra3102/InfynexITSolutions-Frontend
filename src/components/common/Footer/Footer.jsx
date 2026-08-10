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

          {/*====================================================
                            COMPANY
          ====================================================*/}

          <div className="footer-company">

            <img
              src={logo}
              alt="Infynex Global IT Solutions"
              className="footer-logo"
            />

            <p>
              Infynex Global IT Solutions delivers recruitment,
              staffing, and workforce solutions that connect
              exceptional talent with forward-thinking businesses.
            </p>

            <div className="footer-social">

              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>

              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>

              <a href="#" aria-label="Twitter">
                <FiTwitter />
              </a>

            </div>

          </div>


          {/*====================================================
                            QUICK LINKS
          ====================================================*/}

          <div className="footer-links">

            <h4>
              Quick Links
            </h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/services">
              Services
            </Link>

            <Link to="/industries">
              Industries
            </Link>

            <Link to="/employers">
              Employers
            </Link>

            <Link to="/careers">
              Careers
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>


          {/*====================================================
                            CONTACT
          ====================================================*/}

          <div className="footer-contact">

            <h4>
              Contact
            </h4>


            {/* Hyderabad */}

            <div className="footer-contact-location">

              <FiMapPin />

              <div>

                <strong>
                  Hyderabad Office
                </strong>

                <span>
                  RAM SVR, Plot No 4/2, Sector 1,
                  Madhapur, HUDA Techno Enclave,
                  HITEC City, Hyderabad,
                  Telangana, India
                </span>

              </div>

            </div>


            {/* Italy */}

            <div className="footer-contact-location">

              <FiMapPin />

              <div>

                <strong>
                  Italy Office
                </strong>

                <span>
                  Via degli Umbri, 10,
                  00185 Roma RM, Italy
                </span>

              </div>

            </div>


            {/* Vijayawada */}

            <div className="footer-contact-location">

              <FiMapPin />

              <div>

                <strong>
                  Vijayawada Office
                </strong>

                <span>
                  G-1, Jaya Prakash Nagar,
                  LIC Colony, Prashant Nagar,
                  Vijayawada,
                  Andhra Pradesh 520008, India
                </span>

              </div>

            </div>


            {/* Phone */}

            <div className="footer-contact-item">

              <FiPhone />

              <span>
                +91 8008-933379
              </span>

            </div>


            {/* Email */}

            <div className="footer-contact-item">

              <FiMail />

              <span>
                hr@infynexit.com
              </span>

            </div>


            {/* Contact Button */}

            <Link
              to="/contact"
              className="footer-contact-btn"
            >
              Contact Us
              <FiArrowUpRight />
            </Link>

          </div>

        </div>


        {/*====================================================
                            FOOTER BOTTOM
        ====================================================*/}

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