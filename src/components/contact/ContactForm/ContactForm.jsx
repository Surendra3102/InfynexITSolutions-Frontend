import "./ContactForm.css";
import { useState } from "react";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMessageSquare,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

import api from "../../../api/axios";

function ContactForm() {
  const [type, setType] = useState("hiring");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState({});

  const subjectPlaceholder = {
    hiring: "Hiring React Developers",
    seeker: "Applying for Frontend Developer",
    general: "How can we help you?",
  };

  const messagePlaceholder = {
    hiring: "Tell us about your hiring requirements...",
    seeker: "Tell us about your skills and experience...",
    general: "Write your message here...",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setResponse(null);

    try {
      const res = await api.post("/contact/", {
        type,
        ...formData,
      });

      setResponse(res.data);

      if (res.data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      const data = err.response?.data;

      setResponse(data);

      if (data?.errors) {
        setErrors(data.errors);
      }
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">

        {/*====================================================
                            LEFT
        ====================================================*/

        <div className="contact-form-box">

          <h2>Send Us a Message</h2>

          <p className="contact-form-intro">
            Fill out the form below and our recruitment team will get back
            to you as soon as possible.
          </p>

          {/* Contact Type Tabs */}
          <div className="contact-tabs">

            <button
              type="button"
              className={type === "hiring" ? "active" : ""}
              onClick={() => setType("hiring")}
            >
              I'm Hiring
            </button>

            <button
              type="button"
              className={type === "seeker" ? "active" : ""}
              onClick={() => setType("seeker")}
            >
              Job Seeker
            </button>

            <button
              type="button"
              className={type === "general" ? "active" : ""}
              onClick={() => setType("general")}
            >
              General Inquiry
            </button>

          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              {/* Full Name */}
              <div className="input-box">

                <FiUser />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                />

                {errors.name &&
                  errors.name.map((err, i) => (
                    <span key={i} className="error">
                      {err}
                    </span>
                  ))}

              </div>

              {/* Email */}
              <div className="input-box">

                <FiMail />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />

                {errors.email &&
                  errors.email.map((err, i) => (
                    <span key={i} className="error">
                      {err}
                    </span>
                  ))}

              </div>

              {/* Phone */}
              <div className="input-box">

                <FiPhone />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />

                {errors.phone &&
                  errors.phone.map((err, i) => (
                    <span key={i} className="error">
                      {err}
                    </span>
                  ))}

              </div>

              {/* Company */}
              <div className="input-box">

                <FiBriefcase />

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (Optional)"
                />

              </div>

            </div>

            {/* Subject */}
            <div className="input-box full">

              <FiMessageSquare />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={subjectPlaceholder[type]}
              />

              {errors.subject &&
                errors.subject.map((err, i) => (
                  <span key={i} className="error">
                    {err}
                  </span>
                ))}

            </div>

            {/* Message */}
            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={messagePlaceholder[type]}
            ></textarea>

            {errors.message &&
              errors.message.map((err, i) => (
                <span key={i} className="error">
                  {err}
                </span>
              ))}

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn"
            >
              Send Message
            </button>

          </form>

          {/* Response */}
          {response && (
            <p
              className={
                response.success
                  ? "success-msg"
                  : "error-msg"
              }
            >
              {response.message || "Something went wrong."}
            </p>
          )}

        </div>


        /*====================================================
                            RIGHT
        ====================================================*/}

        <div className="contact-info-box">

          <h3>Contact Information</h3>

          <p className="contact-info-intro">
            Reach out to us through any of the following channels.
            Our team is happy to assist employers and job seekers.
          </p>


          {/*================================================
                            PHONE
          =================================================*/}

          <div className="info-item">

            <FiPhone />

            <div>
              <h4>Phone</h4>

              <span>
                +91 8008-933379
              </span>
            </div>

          </div>


          {/*================================================
                            EMAIL
          =================================================*/}

          <div className="info-item">

            <FiMail />

            <div>
              <h4>Email</h4>

              <span>
                hr@infynexit.com
              </span>
            </div>

          </div>


          {/*================================================
                        HYDERABAD OFFICE
          =================================================*/}

          <div className="info-item office-info">

            <FiMapPin />

            <div>

              <h4>
                Hyderabad Office
              </h4>

              <span>
                RAM SVR, Plot No 4/2, Sector 1,
                Madhapur, Huda Techno Enclave,
                HITEC City, Hyderabad,
                Telangana, India
              </span>

            </div>

          </div>


          {/*================================================
                            ROME OFFICE
          =================================================*/}

          <div className="info-item office-info">

            <FiMapPin />

            <div>

              <h4>
                Italy Office
              </h4>

              <span>
                Via degli Umbri, 10,
                00185 Roma RM, Italy
              </span>

            </div>

          </div>


          {/*================================================
                        VIJAYAWADA OFFICE
          =================================================*/}

          <div className="info-item office-info">

            <FiMapPin />

            <div>

              <h4>
                Vijayawada Office
              </h4>

              <span>
                G-1, Jaya Prakash Nagar,
                LIC Colony, Prashant Nagar,
                Vijayawada,
                Andhra Pradesh 520008, India
              </span>

            </div>

          </div>


          {/*================================================
                        WORKING HOURS
          =================================================*/}

          <div className="info-item">

            <FiClock />

            <div>

              <h4>
                Working Hours
              </h4>

              <span>
                Mon – Fri | 9:00 AM – 6:00 PM
              </span>

            </div>

          </div>


          {/*================================================
                        WHY CONTACT
          =================================================*/}

          <div className="why-contact">

            <h4>
              Why Contact Infynex?
            </h4>

            <ul>

              <li>
                ✔ Fast Response
              </li>

              <li>
                ✔ Expert Recruitment Team
              </li>

              <li>
                ✔ IT & Non-IT Hiring
              </li>

              <li>
                ✔ Dedicated Client Support
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;