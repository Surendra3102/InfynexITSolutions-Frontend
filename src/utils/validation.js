// =================================
// Name Validation
// =================================

export const validateName = (name = "") => {

    const value = name.trim();

    if (!value) {
        return "Full name is required.";
    }

    if (value.length < 3) {
        return "Name must be at least 3 characters.";
    }

    if (!/^[A-Za-z ]+$/.test(value)) {
        return "Name can contain only letters and spaces.";
    }

    return "";

};

// =================================
// Email Validation
// =================================

export const validateEmail = (email = "") => {

    const value = email.trim();

    if (!value) {
        return "Email is required.";
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
        return "Please enter a valid email address.";
    }

    return "";

};

// =================================
// Phone Validation
// =================================

export const validatePhone = (phone = "") => {

    const value = phone.replace(/[\s-]/g, "");

    if (!value) {
        return "Phone number is required.";
    }

    const regex = /^[6-9]\d{9}$/;

    if (!regex.test(value)) {
        return "Enter a valid 10-digit mobile number.";
    }

    return "";

};

// =================================
// Password Validation
// =================================

export const validatePassword = (password = "") => {

    if (!password) {
        return "Password is required.";
    }

    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    if (!/\d/.test(password)) {
        return "Password must contain at least one number.";
    }

    if (!/[@$!%*?&]/.test(password)) {
        return "Password must contain at least one special character.";
    }

    return "";

};

// =================================
// Confirm Password
// =================================

export const validateConfirmPassword = (
    password = "",
    confirmPassword = ""
) => {

    if (!confirmPassword) {
        return "Please confirm your password.";
    }

    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }

    return "";

};

// =================================
// Required Field
// =================================

export const validateRequired = (
    value = "",
    fieldName = "Field"
) => {

    if (!value.trim()) {
        return `${fieldName} is required.`;
    }

    return "";

};

// =================================
// Password Strength
// =================================

export const getPasswordStrength = (password = "") => {

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    if (score <= 2) return "Weak";

    if (score <= 4) return "Medium";

    return "Strong";

};

export const validateLoginPassword = (password = "") => {
    if (!password.trim()) {
        return "Password is required.";
    }
    return "";
};