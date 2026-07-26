import "./JobHero.css";
import { FiSearch, FiMapPin } from "react-icons/fi";

function JobHero() {
  return (
    <section className="job-hero">

      <div className="job-hero-overlay"></div>

      <div className="container">

        <div className="job-hero-content">

          <h1>
            Find Your <span>Dream Career</span>
          </h1>

          <p>
            Discover exciting opportunities from leading companies across
            India. Search jobs by title, skills, or location and apply with
            confidence.
          </p>

          <div className="job-search-box">

            <div className="job-search-field">
              <FiSearch />

              <input
                type="text"
                placeholder="Job title, skills or keywords"
              />
            </div>

            <div className="job-search-field">

              <FiMapPin />

              <select>
                <option>All Locations</option>
                <option>Hyderabad</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Pune</option>
              </select>

            </div>

            <button>
              Search Jobs
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default JobHero;