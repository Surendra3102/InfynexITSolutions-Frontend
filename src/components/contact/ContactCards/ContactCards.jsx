import "./ContactCards.css";

import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { useEffect, useState } from "react";

const locations = [
  {
    city: "Hyderabad",
    country: "India",
    title: "Hyderabad Office",
    address: "HUDA Techno Enclave, Madhapur",
    details: "Hyderabad, Telangana, India",
  },
  {
    city: "Rome",
    country: "Italy",
    title: "Italy Office",
    address: "Via degli Umbri, 10",
    details: "00185 Roma RM, Italy",
  },
  {
    city: "Vijayawada",
    country: "India",
    title: "Vijayawada Office",
    address: "G-1, Jaya Prakash Nagar",
    details:
      "LIC Colony, Prashant Nagar, Vijayawada, Andhra Pradesh 520008, India",
  },
];

function ContactCards() {
  const [activeLocation, setActiveLocation] = useState(0);

  const nextLocation = () => {
    setActiveLocation((prev) =>
      prev === locations.length - 1 ? 0 : prev + 1
    );
  };

  const prevLocation = () => {
    setActiveLocation((prev) =>
      prev === 0 ? locations.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) =>
        prev === locations.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="contact-cards-section">
      <div className="contact-cards-container">

        {/* PHONE */}
        <div className="contact-card">
          <div className="contact-card-icon phone">
            <FiPhoneCall />
          </div>

          <div className="contact-card-content">
            <span>Call Us</span>

            <h3>+91 8008-933379</h3>

            <p>Mon – Fri | 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* EMAIL */}
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

        {/* OFFICE LOCATIONS */}
        <div className="contact-location-slider">

          <div className="location-bg-glow"></div>

          {/* HEADER */}
          <div className="location-slider-header">
            <div>
              <span className="location-section-label">
                OUR LOCATIONS
              </span>

              <h3>Visit Our Offices</h3>
            </div>

            <div className="location-counter">
              <span>
                {String(activeLocation + 1).padStart(2, "0")}
              </span>

              <small>
                / {String(locations.length).padStart(2, "0")}
              </small>
            </div>
          </div>

          {/* SLIDER */}
          <div className="location-slider-window">
            <div
              className="location-slider-track"
              style={{
                transform: `translateX(-${activeLocation * 100}%)`,
              }}
            >
              {locations.map((location, index) => (
                <div
                  className="location-slide"
                  key={index}
                >
                  <div className="location-slide-icon">
                    <FiMapPin />
                  </div>

                  <div className="location-slide-content">
                    <span className="location-country">
                      {location.country}
                    </span>

                    <h4>{location.title}</h4>

                    <p className="location-address">
                      {location.address}
                    </p>

                    <p className="location-details">
                      {location.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="location-slider-controls">

            <div className="location-dots">
              {locations.map((location, index) => (
                <button
                  key={index}
                  type="button"
                  className={`location-dot ${
                    activeLocation === index ? "active" : ""
                  }`}
                  onClick={() => setActiveLocation(index)}
                  aria-label={`View ${location.title}`}
                />
              ))}
            </div>

            <div className="location-arrows">

              <button
                type="button"
                className="location-arrow"
                onClick={prevLocation}
                aria-label="Previous location"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                className="location-arrow"
                onClick={nextLocation}
                aria-label="Next location"
              >
                <FiChevronRight />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactCards;