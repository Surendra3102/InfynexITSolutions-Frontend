import "./JobCard.css";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

function JobCard({ job }) {
  return (
    <article className="job-card">

      {job.urgent && (
        <span className="job-urgent-badge">
          Urgent
        </span>
      )}

      <div className="job-card-header">

        <div className="job-company-logo">
          {job.logo}
        </div>

        <div className="job-company-info">

          <h3>{job.title}</h3>

          <p>{job.company}</p>

        </div>

      </div>

      <div className="job-meta">

        <span>
          <FiMapPin />
          {job.location}
        </span>

        <span>
          <FiBriefcase />
          {job.experience}
        </span>

        <span>
          <FiClock />
          {job.jobType}
        </span>

        <span>
          <FiDollarSign />
          {job.salary}
        </span>

      </div>

      <div className="job-skills">

        {job.skills.slice(0, 5).map((skill, index) => (

          <span key={index}>
            {skill}
          </span>

        ))}

      </div>

      <div className="job-footer">

        <small className="job-posted">
          Posted {job.posted}
        </small>

        <div className="job-buttons">

          <Link
            to={`/jobs/${job.id}`}
            className="job-view-btn"
          >
            View Details
          </Link>

          <Link
            to={`/jobs/${job.id}/apply`}
            className="job-apply-btn"
          >
            Apply
            <FiArrowRight />
          </Link>

        </div>

      </div>

    </article>
  );
}

export default JobCard;