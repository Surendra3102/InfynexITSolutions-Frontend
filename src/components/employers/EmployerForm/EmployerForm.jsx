import "./EmployerForm.css";
import { useState } from "react";
import { toast } from "react-toastify";

import api from "../../../api/axios";

function EmployerForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    hiringType: "",
    positions: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/contact/request/", formData);

      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        company: "",
        contactPerson: "",
        email: "",
        phone: "",
        hiringType: "",
        positions: "",
        timeline: "",
        message: "",
      });
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Unable to submit your request. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="employer-form-section" id="employer-form">
      <div className="container">

        <div className="employer-form-heading">
          <span>REQUEST TALENT</span>

          <h2>Let's Build Your Team Together</h2>

          <p>
            Tell us about your hiring needs and our recruitment specialists
            will get in touch to discuss the best hiring solution for your
            organization.
          </p>
        </div>

        <form
          className="employer-form"
          onSubmit={handleSubmit}
        >
          <div className="employer-form-grid">

            <div className="employer-input-group">
              <label>Company Name</label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                required
              />
            </div>

            <div className="employer-input-group">
              <label>Contact Person</label>

              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="employer-input-group">
              <label>Business Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="company@email.com"
                required
              />
            </div>

            <div className="employer-input-group">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div className="employer-input-group">
              <label>Hiring Requirement</label>

              <select
                name="hiringType"
                value={formData.hiringType}
                onChange={handleChange}
                required
              >
                <option value="">Select Requirement</option>
                <option>Permanent Hiring</option>
                <option>Contract Staffing</option>
                <option>Bulk Hiring</option>
                <option>Executive Hiring</option>
              </select>
            </div>

            <div className="employer-input-group">
              <label>Number of Positions</label>

              <input
                type="number"
                name="positions"
                value={formData.positions}
                onChange={handleChange}
                placeholder="e.g. 10"
                required
              />
            </div>

            <div className="employer-input-group employer-full-width">
              <label>Hiring Timeline</label>

              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
              >
                <option value="">Select Timeline</option>
                <option>Immediate</option>
                <option>Within 2 Weeks</option>
                <option>Within 1 Month</option>
                <option>Flexible</option>
              </select>
            </div>

            <div className="employer-input-group employer-full-width">
              <label>Additional Details</label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your hiring requirements..."
              />
            </div>

          </div>

          <button
            type="submit"
            className="employer-submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Request Consultation"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default EmployerForm;