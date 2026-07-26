import "./ForgotPasswordForm.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiArrowRight, FiArrowLeft } from "react-icons/fi";

import api from "../../../api/axios";
import Input from "../../common/Input/Input";
import { validateEmail } from "../../../utils/validation";

function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({
      email: e.target.value,
    });

    setErrors({});
    setServerError("");
    setServerMessage("");
  };

  const handleBlur = () => {
    const error = validateEmail(formData.email.trim());

    setErrors({
      email: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email.trim());

    if (emailError) {
      setErrors({
        email: emailError,
      });
      return;
    }

    try {
      setLoading(true);
      setServerError("");
      setServerMessage("");

      const res = await api.post("/accounts/forgot-password/", {
        email: formData.email.trim(),
      });

      setServerMessage(res.data.message);

      setFormData({
        email: "",
      });
    } catch (err) {
      setServerError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-card">
      <h1>Forgot Password?</h1>

      <p>
        Enter your registered email address and we'll send you a password reset
        link.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
          icon={<FiMail />}
          error={errors.email}
          autoComplete="email"
          disabled={loading}
          required
        />

        <button
          className="forgot-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}

          {!loading && <FiArrowRight />}
        </button>
      </form>

      {serverMessage && (
        <p className="success-msg">
          {serverMessage}
        </p>
      )}

      {serverError && (
        <p className="error-msg">
          {serverError}
        </p>
      )}

      <Link
        to="/login"
        className="back-login"
      >
        <FiArrowLeft />
        Back to Login
      </Link>
    </div>
  );
}

export default ForgotPasswordForm;