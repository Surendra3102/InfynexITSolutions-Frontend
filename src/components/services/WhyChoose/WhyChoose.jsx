import "./WhyChoose.css";
import {
  FiClock,
  FiCheckCircle,
  FiUsers,
  FiGlobe,
  FiHeadphones,
  FiTrendingUp,
} from "react-icons/fi";

const features = [
  {
    icon: <FiClock />,
    title: "Faster Hiring",
    description:
      "Quick turnaround time to help you fill critical positions without delays.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Quality Screening",
    description:
      "Every candidate is carefully evaluated to match your business requirements.",
  },
  {
    icon: <FiUsers />,
    title: "Expert Recruiters",
    description:
      "Experienced hiring specialists with expertise across multiple industries.",
  },
  {
    icon: <FiGlobe />,
    title: "PAN India Hiring",
    description:
      "Connecting businesses with top talent from across India.",
  },
  {
    icon: <FiHeadphones />,
    title: "Dedicated Support",
    description:
      "Personalized recruitment assistance throughout your hiring journey.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Scalable Solutions",
    description:
      "Flexible hiring solutions that grow with your organization's needs.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">

        <span className="section-badge">
          WHY CHOOSE US
        </span>

        <h2 className="section-title">
          Why Choose <span>Infynex</span>
        </h2>

        <p className="section-description">
          We help organizations build high-performing teams through
          efficient recruitment, expert guidance, and dependable hiring
          solutions tailored to every business.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;