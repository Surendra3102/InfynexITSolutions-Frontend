import "./Leadership.css";

import chairmanImg from "../../../assets/chairman.png";
import directorImg from "../../../assets/director.png";
import ceoImg from "../../../assets/ceo.png";

const leaders = [
  {
    image: chairmanImg,
    role: "Chairman",
    name: "Lokesh Reddy Molakala",
    description:
      "Providing strategic leadership and long-term vision while driving corporate excellence, strong governance, and sustainable business growth for Infynex.",
    tags: ["Vision", "Leadership", "Governance"],
  },
  {
    image: ceoImg,
    role: "Founder & Managing Director",
    name: "Sridevi Arekapudi",
    description:
      "Leading Infynex with innovation, strategic direction, and a client-centric approach to deliver exceptional workforce and business solutions.",
    tags: ["Innovation", "Growth", "Strategy"],
  },
  {
    image: directorImg,
    role: "Director – Talent Acquisition",
    name: "Venkatesh Prasad Naidu",
    description:
      "Driving talent acquisition excellence by connecting exceptional professionals with leading organizations while building high-performing teams.",
    tags: ["Talent", "Recruitment", "Workforce"],
  },
];

function Leadership() {
  return (
    <section className="leadership">
      <div className="container">
        {/* Header */}
        <div className="leadership-header">
          <span className="section-badge">OUR LEADERSHIP</span>

          <h2>Meet the Visionaries Behind Infynex</h2>

          <p>
            Our leadership team brings together deep industry expertise,
            strategic thinking, and a shared commitment to empowering
            businesses through innovative workforce and technology solutions.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <article className="leader-card" key={index}>
              {/* Image */}
              <div className="leader-image-box">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leader-image"
                />

                <div className="leader-overlay">
                  <span>{leader.role}</span>
                </div>
              </div>

              {/* Content */}
              <div className="leader-content">
                <span className="leader-badge">{leader.role}</span>

                <h3>{leader.name}</h3>

                <p>{leader.description}</p>

                <div className="leader-tags">
                  {leader.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="leader-card-glow"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;