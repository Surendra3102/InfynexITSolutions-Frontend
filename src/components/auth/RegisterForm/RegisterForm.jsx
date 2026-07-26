import "./RegisterForm.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api/axios";


import {
    FiUser,
    FiBriefcase,
    FiMail,
    FiPhone,
    FiLock,
    FiEye,
    FiEyeOff,
    FiGlobe,
    FiArrowRight,
} from "react-icons/fi";

import Input from "../../common/Input/Input";

import {
    validateName,
    validateEmail,
    validatePhone,
    validatePassword,
    validateConfirmPassword,
    getPasswordStrength,
} from "../../../utils/validation";

function RegisterForm() {

    const navigate = useNavigate();

    const [serverError, setServerError] = useState("");
    
    const [userType, setUserType] = useState("candidate");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        currentRole: "",

        companyName: "",
        hrName: "",
        website: "",

        password: "",
        confirmPassword: "",

        acceptTerms: false,
    });

    const [errors, setErrors] = useState({});

    const passwordStrength = getPasswordStrength(
        formData.password
    );

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleBlur = (e) => {

        const { name, value } = e.target;

        let error = "";

        switch (name) {

            case "fullName":
            case "hrName":
                error = validateName(value);
                break;

            case "email":
                error = validateEmail(value.trim());
                break;

            case "phone":
                if (value) {
                    error = validatePhone(value);
                }
                break;

            case "password":
                error = validatePassword(value);
                break;

            case "confirmPassword":
                error = validateConfirmPassword(
                    formData.password,
                    value
                );
                break;

            default:
                break;
        }

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const newErrors = {};

        if (userType === "candidate") {

            newErrors.fullName =
                validateName(formData.fullName);

            newErrors.phone =
                validatePhone(formData.phone);

        } else {

            newErrors.companyName =
                formData.companyName.trim()
                    ? ""
                    : "Company name is required.";

            newErrors.hrName =
                validateName(formData.hrName);
        }

        newErrors.email =
            validateEmail(formData.email.trim());

        newErrors.password =
            validatePassword(formData.password);

        newErrors.confirmPassword =
            validateConfirmPassword(
                formData.password,
                formData.confirmPassword
            );

        if (!formData.acceptTerms) {

            newErrors.acceptTerms =
                "Please accept the Terms & Conditions.";
        }

        Object.keys(newErrors).forEach((key) => {

            if (!newErrors[key]) {
                delete newErrors[key];
            }

        });

        if (Object.keys(newErrors).length) {

            setErrors(newErrors);

            return;
        }

        setErrors({});

        const registerData =
            userType === "candidate"
                ? {
                      role: "candidate",
                      full_name: formData.fullName.trim(),
                      email: formData.email.trim(),
                      phone: formData.phone,
                      current_role:
                          formData.currentRole.trim(),
                      password: formData.password,
                  }
                : {
                      role: "employer",
                      company_name:
                          formData.companyName.trim(),
                      hr_name:
                          formData.hrName.trim(),
                      email: formData.email.trim(),
                      phone: formData.phone,
                      website:
                          formData.website.trim(),
                      password: formData.password,
                  };

        try {
    setLoading(true);
    setServerError("");

    const response = await api.post(
        "/accounts/register/",
        registerData
    );

    console.log(response.data);

    navigate("/login", { replace: true });

} catch (error) {

    console.error(error);

    if (error.response?.data) {

        const data = error.response.data;

        if (typeof data === "object") {

            const backendErrors = {};

            Object.entries(data).forEach(([key, value]) => {

                backendErrors[key] = Array.isArray(value)
                    ? value[0]
                    : value;

            });

            setErrors(backendErrors);

        }

        setServerError(
            data.detail ||
            data.message ||
            "Registration failed. Please try again."
        );

    } else {

        setServerError(
            "Unable to connect to the server."
        );

    }

} finally {

    setLoading(false);

}
    };
        return (
        <div className="register-card">

            <h1>Create Account</h1>

            <p>
                Join Infynex IT Solutions and start your journey today.
            </p>

            <div className="register-tabs">

                <button
                    type="button"
                    className={userType === "candidate" ? "active" : ""}
                    onClick={() => setUserType("candidate")}
                    disabled={loading}
                >
                    <FiUser aria-hidden="true" />
                    Candidate
                </button>

                <button
                    type="button"
                    className={userType === "employer" ? "active" : ""}
                    onClick={() => setUserType("employer")}
                    disabled={loading}
                >
                    <FiBriefcase aria-hidden="true" />
                    Employer
                </button>

            </div>

            <form onSubmit={handleSubmit} noValidate>

                {userType === "candidate" ? (

                    <>

                        <Input
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your full name"
                            icon={<FiUser />}
                            error={errors.fullName}
                            autoComplete="name"
                            disabled={loading}
                            required
                        />

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
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your phone number"
                            icon={<FiPhone />}
                            error={errors.phone}
                            autoComplete="tel"
                            maxLength={10}
                            disabled={loading}
                            required
                        />

                        <Input
                            label="Current Role"
                            name="currentRole"
                            value={formData.currentRole}
                            onChange={handleChange}
                            placeholder="Software Engineer"
                            icon={<FiBriefcase />}
                            autoComplete="organization-title"
                            disabled={loading}
                        />

                    </>

                ) : (

                    <>

                        <Input
                            label="Company Name"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Company Name"
                            icon={<FiBriefcase />}
                            error={errors.companyName}
                            autoComplete="organization"
                            disabled={loading}
                            required
                        />

                        <Input
                            label="HR Name"
                            name="hrName"
                            value={formData.hrName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="HR Name"
                            icon={<FiUser />}
                            error={errors.hrName}
                            autoComplete="name"
                            disabled={loading}
                            required
                        />

                        <Input
                            label="Company Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Company Email"
                            icon={<FiMail />}
                            error={errors.email}
                            autoComplete="email"
                            disabled={loading}
                            required
                        />

                        <Input
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Phone Number"
                            icon={<FiPhone />}
                            error={errors.phone}
                            autoComplete="tel"
                            maxLength={10}
                            disabled={loading}
                        />

                        <Input
                            label="Website"
                            name="website"
                            type="url"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="https://company.com"
                            icon={<FiGlobe />}
                            autoComplete="url"
                            disabled={loading}
                        />

                    </>

                )}

                <Input
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Create Password"
                    icon={<FiLock />}
                    rightIcon={
                        showPassword
                            ? <FiEyeOff />
                            : <FiEye />
                    }
                    rightIconLabel={
                        showPassword
                            ? "Hide password"
                            : "Show password"
                    }
                    onRightIconClick={() =>
                        setShowPassword((prev) => !prev)
                    }
                    error={errors.password}
                    autoComplete="new-password"
                    disabled={loading}
                    required
                />

                {formData.password && (

                    <p
                        className={`password-strength ${passwordStrength.toLowerCase()}`}
                    >
                        Password Strength: {passwordStrength}
                    </p>

                )}

                <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    type={
                        showConfirmPassword
                            ? "text"
                            : "password"
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                    icon={<FiLock />}
                    rightIcon={
                        showConfirmPassword
                            ? <FiEyeOff />
                            : <FiEye />
                    }
                    rightIconLabel={
                        showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                    }
                    onRightIconClick={() =>
                        setShowConfirmPassword((prev) => !prev)
                    }
                    error={errors.confirmPassword}
                    autoComplete="new-password"
                    disabled={loading}
                    required
                />

                <label className="register-check">

                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        disabled={loading}
                    />

                    <span>
                        I agree to the Terms & Conditions
                    </span>

                </label>

                {errors.acceptTerms && (

                    <small className="input-error-text">
                        {errors.acceptTerms}
                    </small>

                )}

                {/* Server Error */}
                {serverError && (
                <div className="server-error">
                {serverError}
                </div>
                )}

                <button
                    type="submit"
                    className="register-btn"
                    disabled={loading}
                >

                    {loading
                        ? "Creating Account..."
                        : "Create Account"}

                    {!loading && (
                        <FiArrowRight aria-hidden="true" />
                    )}

                </button>

            </form>

            <p className="register-footer">

                Already have an account?

                <Link to="/login">

                    Login

                </Link>

            </p>

        </div>
    );
}
export default RegisterForm;