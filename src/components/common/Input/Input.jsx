import "./Input.css";
import PropTypes from "prop-types";

function Input({
    label,
    type = "text",
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    icon,
    error,
    rightIcon,
    rightIconLabel = "",
    onRightIconClick,
    required = false,
    disabled = false,
    autoComplete,
    maxLength,
    ...props
}) {
    return (
        <div className="input-group">
            {label && (
                <label htmlFor={name} className="input-label">
                    {label}
                    {required && <span>*</span>}
                </label>
            )}

            <div className={`input-wrapper ${error ? "input-error" : ""}`}>
                {icon && (
                    <div
                        className="input-left-icon"
                        aria-hidden="true"
                    >
                        {icon}
                    </div>
                )}

                <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                    {...props}
                />

                {rightIcon && (
                    <button
                        type="button"
                        className="input-right-icon"
                        onClick={onRightIconClick}
                        aria-label={rightIconLabel}
                    >
                        {rightIcon}
                    </button>
                )}
            </div>

            {error && (
                <small
                    id={`${name}-error`}
                    className="input-error-text"
                >
                    {error}
                </small>
            )}
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    error: PropTypes.string,
    rightIcon: PropTypes.node,
    rightIconLabel: PropTypes.string,
    onRightIconClick: PropTypes.func,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.string,
    maxLength: PropTypes.number,
};

export default Input;