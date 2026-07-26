import "./ApplicationSuccess.css";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiHome, FiBriefcase } from "react-icons/fi";

function ApplicationSuccess() {

    return (

        <section className="application-success-page">

            <div className="container">

                <div className="application-success-card">

                    <div className="success-icon">
                        <FiCheckCircle />
                    </div>

                    <h1>Thank You for Applying!</h1>

                    <p>
                        Your application has been submitted successfully.
                        Our recruitment team will review your profile and
                        contact you if your qualifications match the job
                        requirements.
                    </p>

                    <div className="success-actions">

                        <Link
                            to="/jobs"
                            className="browse-jobs-btn"
                        >
                            <FiBriefcase />
                            Browse More Jobs
                        </Link>

                        <Link
                            to="/"
                            className="home-btn"
                        >
                            <FiHome />
                            Back to Home
                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default ApplicationSuccess;