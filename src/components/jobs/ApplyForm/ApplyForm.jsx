import "./ApplyForm.css";
import { useState } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMapPin, FiBriefcase, FiDollarSign } from "react-icons/fi";
import jobsData from "../../../data/jobsData";

function ApplyForm() {

    const { id } = useParams();
    const navigate = useNavigate();

    const job = jobsData.find(
        (item) => item.id === Number(id)
    );

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        currentCTC: "",
        expectedCTC: "",
        noticePeriod: "",
        linkedin: "",
        portfolio: "",
        coverLetter: "",
        resume: null,
        terms: false,
    });

    if (!job) {
        return <Navigate to="/jobs" replace />;
    }

    const handleChange = (e) => {

        const { name, value, files, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : files
                    ? files[0]
                    : value,
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        // Future Django API
        // const form = new FormData();

        navigate("/application-success");

    };

    return (

        <section className="apply-page">

            <div className="container">

                <Link
                    to={`/jobs/${job.id}`}
                    className="back-job-details"
                >
                    <FiArrowLeft />
                    Back to Job Details
                </Link>

                <div className="apply-header">

                    <h1>Apply for {job.title}</h1>

                    <p>{job.company}</p>

                </div>

                <div className="job-summary">

                    <span>
                        <FiMapPin />
                        {job.location}
                    </span>

                    <span>
                        <FiBriefcase />
                        {job.experience}
                    </span>

                    <span>
                        <FiDollarSign />
                        {job.salary}
                    </span>

                </div>

                <form
                    className="apply-form"
                    onSubmit={handleSubmit}
                >

                    <div className="apply-grid">

                        <div className="form-group">

                            <label>Full Name</label>

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Email Address</label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Phone Number</label>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Current Location</label>

                            <input
                                type="text"
                                name="location"
                                placeholder="Current city"
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Experience</label>

                            <select
                                name="experience"
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option>Fresher</option>
                                <option>1 Year</option>
                                <option>2 Years</option>
                                <option>3 Years</option>
                                <option>5+ Years</option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label>Notice Period</label>

                            <select
                                name="noticePeriod"
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option>Immediate</option>
                                <option>15 Days</option>
                                <option>30 Days</option>
                                <option>60 Days</option>
                                <option>90 Days</option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label>Current CTC</label>

                            <input
                                type="text"
                                name="currentCTC"
                                placeholder="Current Salary"
                                onChange={handleChange}
                            />

                        </div>

                        <div className="form-group">

                            <label>Expected CTC</label>

                            <input
                                type="text"
                                name="expectedCTC"
                                placeholder="Expected Salary"
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label>LinkedIn Profile</label>

                        <input
                            type="url"
                            name="linkedin"
                            placeholder="https://linkedin.com/in/..."
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Portfolio / GitHub</label>

                        <input
                            type="url"
                            name="portfolio"
                            placeholder="https://github.com/..."
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">

                        <label>Resume</label>

                        <input
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Cover Letter</label>

                        <textarea
                            rows="6"
                            name="coverLetter"
                            placeholder="Write your cover letter..."
                            onChange={handleChange}
                        />

                    </div>

                    <label className="terms-check">

                        <input
                            type="checkbox"
                            name="terms"
                            onChange={handleChange}
                            required
                        />

                        I confirm that the information provided is accurate.

                    </label>

                    <button
                        className="submit-application-btn"
                        type="submit"
                    >
                        Submit Application
                    </button>

                </form>

            </div>

        </section>

    );

}

export default ApplyForm;