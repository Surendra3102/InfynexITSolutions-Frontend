import "./LoginForm.css";
import { FcGoogle } from "react-icons/fc";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiUser,
  FiBriefcase,
} from "react-icons/fi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../../common/Input/Input";

import api from "../../../api/axios";
import { AuthContext } from "../../../context/AuthContext";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userType, setUserType] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (serverError) {
      setServerError("");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let error = "";

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        error = "Enter a valid email";
      }
    }

    if (name === "password") {
      if (!value.trim()) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      toast.warning("Please fill all required fields.");

      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const res = await api.post("/accounts/login/", {
        email: formData.email.trim(),
        password: formData.password,
        role: userType,
      });

      login(
        res.data.user,
        res.data.access,
        res.data.refresh
      );

      toast.success("Login successful!");

      navigate("/");

    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Invalid email or password.";

      setServerError(message);

      toast.error(message);

    } finally {
      setLoading(false);
    }
  };
    return (
    <div className="login-form-card">
      <h1>Welcome Back</h1>

      <p>Sign in to your Infynex account.</p>

      <div className="user-type-tabs">

        <button
          type="button"
          className={userType === "candidate" ? "active" : ""}
          onClick={() => setUserType("candidate")}
          disabled={loading}
        >
          <FiUser />
          Candidate
        </button>

        <button
          type="button"
          className={userType === "employer" ? "active" : ""}
          onClick={() => setUserType("employer")}
          disabled={loading}
        >
          <FiBriefcase />
          Employer
        </button>

      </div>

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

        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
          icon={<FiLock />}
          rightIcon={showPassword ? <FiEyeOff /> : <FiEye />}
          rightIconLabel={
            showPassword ? "Hide password" : "Show password"
          }
          onRightIconClick={() =>
            setShowPassword((prev) => !prev)
          }
          error={errors.password}
          autoComplete="current-password"
          disabled={loading}
          required
        />

        <div className="login-options">

          <label>

            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              disabled={loading}
            />

            Remember Me

          </label>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

        </div>

        <button
          className="login-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            "Signing In..."
          ) : (
            <>
              Sign In
              <FiArrowRight />
            </>
          )}
        </button>

        <div className="register-link">

          <p>

            Don't have an account?{" "}

            <Link to="/register">
              Create Account
            </Link>

          </p>

        </div>

      </form>

      {serverError && (
        <p className="error-msg">
          {serverError}
        </p>
      )}

    </div>
  );
}

export default LoginForm;