import "./ResetPasswordForm.css";

import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";

import api from "../../../api/axios";
import Input from "../../common/Input/Input";

import {
  validatePassword,
  validateConfirmPassword,
} from "../../../utils/validation";

function ResetPasswordForm() {
  const navigate = useNavigate();
  const { uid, token } = useParams();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({});
    setServerError("");
    setServerMessage("");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let error = "";

    if (name === "password") {
      error = validatePassword(value);
    }

    if (name === "confirm_password") {
      error = validateConfirmPassword(
        formData.password,
        value
      );
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword(formData.password);

    const confirmError = validateConfirmPassword(
      formData.password,
      formData.confirm_password
    );

    if (passwordError || confirmError) {
      setErrors({
        password: passwordError,
        confirm_password: confirmError,
      });
      return;
    }

    try {
      setLoading(true);

      const res = await api.post(
        "/accounts/reset-password/",
        {
          uid,
          token,
          password: formData.password,
          confirm_password: formData.confirm_password,
        }
      );

      setServerMessage(res.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setServerError(
        err.response?.data?.message ||
          "Unable to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-card">

      <h1>Reset Password</h1>

      <p>
        Create a new password for your account.
      </p>

      <form onSubmit={handleSubmit} noValidate>

        <Input
          label="New Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter new password"
          icon={<FiLock />}
          rightIcon={showPassword ? <FiEyeOff /> : <FiEye />}
          rightIconLabel={
            showPassword
              ? "Hide password"
              : "Show password"
          }
          onRightIconClick={() =>
            setShowPassword(!showPassword)
          }
          error={errors.password}
          disabled={loading}
          required
        />

        <Input
          label="Confirm Password"
          name="confirm_password"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm new password"
          icon={<FiLock />}
          rightIcon={
            showConfirmPassword ? (
              <FiEyeOff />
            ) : (
              <FiEye />
            )
          }
          rightIconLabel={
            showConfirmPassword
              ? "Hide password"
              : "Show password"
          }
          onRightIconClick={() =>
            setShowConfirmPassword(
              !showConfirmPassword
            )
          }
          error={errors.confirm_password}
          disabled={loading}
          required
        />

        <button
          className="reset-btn"
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Resetting..."
            : "Reset Password"}

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

export default ResetPasswordForm;