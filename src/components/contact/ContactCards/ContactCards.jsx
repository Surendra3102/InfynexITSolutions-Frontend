import "./ContactCards.css";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

function ContactCards() {
  return (
    <section className="contact-cards">
      <div className="container">

        <div className="contact-card">

          <div className="contact-card-icon phone">
            <FiPhoneCall />
          </div>

          <div className="contact-card-content">
            <span>Call Us</span>
            <h3>+918008-933379</h3>
            <p>Mon – FRI | 9:00 AM – 6:00 PM</p>
          </div>

        </div>

        <div className="contact-card">

          <div className="contact-card-icon email">
            <FiMail />
          </div>

          <div className="contact-card-content">
            <span>Email Us</span>
            <h3>hr@infynexit.com</h3>
            <p>We'll reply within 24 hours</p>
          </div>

        </div>

        <div className="contact-card">

          <div className="contact-card-icon location">
            <FiMapPin />
          </div>

          <div className="contact-card-content">
            <span>Office</span>
            <h3>HUDA Techno Enclave, Madhapur</h3>
            <p>Hyderabad, Telangana</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactCards;