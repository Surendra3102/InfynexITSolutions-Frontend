import "./MissionVision.css";
import { FiTarget, FiEye } from "react-icons/fi";

function MissionVision() {
  return (
    <section className="mission-vision">

      <div className="container">

        <div className="mission-heading">

          <span className="section-badge">
            OUR PURPOSE
          </span>

          <h2>
            Mission & Vision
          </h2>

          <p>
            Guided by our purpose and driven by innovation, we help businesses
            find exceptional talent while empowering professionals to build
            successful careers.
          </p>

        </div>

        <div className="mission-grid">

          {/* Mission Card */}

          <div className="mission-card">

            <div className="mission-icon">
              <FiTarget />
            </div>

            <h3>Our Mission</h3>

            <p>
              To simplify recruitment by connecting organizations with skilled
              professionals through transparent, efficient, and technology-driven
              hiring solutions while helping individuals build rewarding careers.
            </p>

          </div>

          {/* Vision Card */}

          <div className="vision-card">

            <div className="mission-icon">
              <FiEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become one of India's most trusted recruitment partners by
              building long-term relationships, delivering exceptional hiring
              experiences, and creating opportunities that help businesses and
              professionals grow together.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;