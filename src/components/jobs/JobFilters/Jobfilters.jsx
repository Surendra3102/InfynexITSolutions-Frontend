import "./JobFilters.css";
import { FiRefreshCw } from "react-icons/fi";

function JobFilters() {
  return (
    <section className="job-filters-section">
      <div className="container">

        <div className="job-filters">

          <select>
            <option>Industry</option>
            <option>Information Technology</option>
            <option>Healthcare</option>
            <option>Finance</option>
            <option>Manufacturing</option>
          </select>

          <select>
            <option>Job Type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>

          <select>
            <option>Experience</option>
            <option>Fresher</option>
            <option>1-2 Years</option>
            <option>3-5 Years</option>
            <option>5+ Years</option>
          </select>

          <select>
            <option>Location</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Pune</option>
          </select>

          <select>
            <option>Salary</option>
            <option>3-5 LPA</option>
            <option>5-8 LPA</option>
            <option>8-12 LPA</option>
            <option>12+ LPA</option>
          </select>

          <select>
            <option>Sort By</option>
            <option>Newest</option>
            <option>Highest Salary</option>
            <option>Experience</option>
          </select>

          <button className="clear-btn">
            <FiRefreshCw />
            Clear
          </button>

        </div>

      </div>
    </section>
  );
}

export default JobFilters;