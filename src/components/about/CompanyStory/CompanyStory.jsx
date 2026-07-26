import "./CompanyStory.css";
import officeImage from "../../../assets/about-office.png";

function CompanyStory() {
  return (
    <section className="company-story">

      <div className="container story-grid">

        {/* Left Content */}

        <div className="story-content">

          <span className="section-badge">
            OUR STORY
          </span>

          <h2>
            Built on Trust,
            <br />
            Powered by Expertise
          </h2>

          <p>
            Infynex IT Solutions was established with a clear mission—to simplify
            the hiring process for businesses while creating meaningful career
            opportunities for talented professionals.
          </p>

          <p>
            We believe recruitment is more than filling vacancies. It's about
            understanding people, company culture, and long-term success. Our
            team works closely with employers and job seekers to build
            relationships that create lasting value.
          </p>

          <p>
            As a growing recruitment partner, we are committed to delivering
            reliable hiring solutions with transparency, professionalism, and
            personalized service.
          </p>

          <div className="stats-grid">

            <div>
              <h3>100%</h3>
              <span>Client Commitment</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Recruitment Support</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Hiring Positions</span>
            </div>

            <div>
              <h3>Pan India</h3>
              <span>Hiring Reach</span>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div className="story-image">

          <img
            src={officeImage}
            alt="Infynex Office"
          />

          <div className="floating-stats">

            <div>
              <h3>100%</h3>
              <span>Client Focus</span>
            </div>

            <div>
              <h3>Quality</h3>
              <span>Hiring Solutions</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CompanyStory;