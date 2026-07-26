import "./ContactHero.css";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="container">

        <span className="contact-badge">
          GET IN TOUCH
        </span>

        <h1>
          Let's Start a
          <span> Conversation</span>
        </h1>

        <p>
          Whether you're hiring exceptional talent or looking for your next
          career opportunity, our team is ready to help. We'd love to hear
          from you.
        </p>

        <div className="contact-hero-buttons">

          <a href="#contact-form" className="contact-primary-btn">
            Contact Us
            <FiArrowRight />
          </a>

          <Link to="/employers" className="contact-secondary-btn">
            Hire Talent
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;