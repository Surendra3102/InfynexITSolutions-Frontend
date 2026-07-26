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
import api from "../../../api/axios"; // axios instance pointing to Django backend

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
  const [errors, setErrors] = useState({}); // field-level errors

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      const res = await api.post("/contact/", { type, ...formData });
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
        setErrors(data.errors); // store field errors
      }
    }
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="container">
        {/* LEFT */}
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>
          <p>
            Fill out the form below and our recruitment team will get back to you as soon as possible.
          </p>

          <div className="contact-tabs">
            <button className={type === "hiring" ? "active" : ""} onClick={() => setType("hiring")}>
              I'm Hiring
            </button>
            <button className={type === "seeker" ? "active" : ""} onClick={() => setType("seeker")}>
              Job Seeker
            </button>
            <button className={type === "general" ? "active" : ""} onClick={() => setType("general")}>
              General Inquiry
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="input-box">
                <FiUser />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                {errors.name && errors.name.map((err, i) => (
                  <span key={i} className="error">{err}</span>
                ))}
              </div>

              <div className="input-box">
                <FiMail />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                {errors.email && errors.email.map((err, i) => (
                  <span key={i} className="error">{err}</span>
                ))}
              </div>

              <div className="input-box">
                <FiPhone />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                {errors.phone && errors.phone.map((err, i) => (
                  <span key={i} className="error">{err}</span>
                ))}
              </div>

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

            <div className="input-box full">
              <FiMessageSquare />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={subjectPlaceholder[type]}
              />
              {errors.subject && errors.subject.map((err, i) => (
                <span key={i} className="error">{err}</span>
              ))}
            </div>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={messagePlaceholder[type]}
            ></textarea>
            {errors.message && errors.message.map((err, i) => (
              <span key={i} className="error">{err}</span>
            ))}

            <button className="submit-btn">Send Message</button>
          </form>

          {response && (
            <p className={response.success ? "success-msg" : "error-msg"}>
              {response.message || "Something went wrong."}
            </p>
          )}
        </div>

        {/* RIGHT */}
        <div className="contact-info-box">
          <h3>Contact Information</h3>
          <p>
            Reach out to us through any of the following channels. Our team is happy to assist employers and job seekers.
          </p>

          <div className="info-item">
            <FiPhone />
            <div>
              <h4>Phone</h4>
              <span>+91 XXXXX XXXXX</span>
            </div>
          </div>

          <div className="info-item">
            <FiMail />
            <div>
              <h4>Email</h4>
              <span>hr@infynexglobal.com</span>
            </div>
          </div>

          <div className="info-item">
            <FiMapPin />
            <div>
              <h4>Office</h4>
              <span>Kukatpally, Hyderabad, Telangana</span>
            </div>
          </div>

          <div className="info-item">
            <FiClock />
            <div>
              <h4>Working Hours</h4>
              <span>Mon – Sat | 9:00 AM – 6:00 PM</span>
            </div>
          </div>

          <div className="why-contact">
            <h4>Why Contact Infynex?</h4>
            <ul>
              <li>✔ Fast Response</li>
              <li>✔ Expert Recruitment Team</li>
              <li>✔ IT & Non-IT Hiring</li>
              <li>✔ Dedicated Client Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
