import "./Footer.css";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiSend,
} from "react-icons/fi";

import logo from "../../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company */}

        <div className="footer-column">

          <img
            src={logo}
            alt="Infynex"
            className="footer-logo"
          />

          <p className="footer-description">
            India's premier HR & Recruitment partner connecting exceptional
            talent with industry-leading companies through innovative hiring
            solutions and workforce excellence.
          </p>

        </div>

        {/* Links */}

        {/* Links & Services */}

<div className="footer-column">

  <div className="footer-links-grid">

    <div>

      <h3>Quick Links</h3>

      <ul>

        <li><a href="/">Home</a></li>

        <li><a href="/about">About Us</a></li>

        <li><a href="/services">Services</a></li>

        <li><a href="/Employers">Employers</a></li>

        <li><a href="/Contact">Contact</a></li>

      </ul>

    </div>

    <div>

      <h3>Services</h3>

      <ul>

        <li><a href="/services">Permanent Hiring</a></li>

        <li><a href="/services">IT Recruitment</a></li>

        <li><a href="/services">Executive Hiring</a></li>

        <li><a href="/services">HR Outsourcing</a></li>

      </ul>

    </div>

  </div>

</div>

        
        {/* Stay Updated */}

        <div className="footer-column">

          <h3>Stay Updated</h3>

          <p className="footer-news-text">
            Subscribe to receive job openings and HR insights.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Your email"
            />

            <button>

              <FiSend />

            </button>

          </div>

          <ul className="contact-list">

            <li>

              <FiMapPin />

              <span>
                Kakatiya Hills, Madhapur,
                Hyderabad – 500085
              </span>

            </li>

            <li>

              <FiPhone />

              <span>
                +91 80 4567 8900
              </span>

            </li>

            <li>

              <FiMail />

              <span>
                hello@infynex.in
              </span>

            </li>

          </ul>

          <div className="social-icons">

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

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © 2026 Infynex IT Solutions Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="footer-links">

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Cookie Policy</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;