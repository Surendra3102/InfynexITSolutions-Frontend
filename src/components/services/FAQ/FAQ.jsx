import { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaHeadset, FaArrowRight } from "react-icons/fa";

const faqData = [
  {
    question: "Do you provide both IT Recruitment and Software Development services?",
    answer:
      "Yes. Infynex Global IT Solutions offers end-to-end IT recruitment, staffing solutions, and custom software development services, helping businesses with both talent acquisition and digital transformation.",
  },
  {
    question: "What recruitment services do you offer?",
    answer:
      "We provide Permanent Staffing, Contract Staffing, Contract-to-Hire, Executive Search, Recruitment Process Outsourcing (RPO), Campus Hiring, Bulk Hiring, Remote Hiring, and Offshore Recruitment.",
  },
  {
    question: "What software development services do you provide?",
    answer:
      "Our development services include Custom Software Development, Enterprise Applications, Web & Mobile App Development, API Development, SaaS Solutions, Cloud Applications, Software Maintenance, and Legacy Application Modernization.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with React, Angular, Vue.js, Python, Java, .NET, Node.js, PHP, AWS, Azure, Google Cloud, Docker, Kubernetes, MySQL, PostgreSQL and MongoDB.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve IT, Banking, Healthcare, Retail, Manufacturing, Logistics, Education, Insurance, Government, Pharma, Automotive and Startups.",
  },
  {
    question: "How long does recruitment take?",
    answer:
      "The timeline depends on the role and project requirements, but our streamlined hiring process helps deliver qualified candidates quickly.",
  },
];

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <section className="faq-section">

      <div className="faq-container">

        <div className="faq-wrapper">

          {/* Left */}

          <div className="faq-left">

            <span className="faq-badge">

              FAQ

            </span>

            <h2>

              Frequently Asked
              Questions

            </h2>

            <p>

              Have questions about our recruitment,
              software development or technology
              services?

              Our team is always ready to help.

            </p>

            <div className="faq-contact-card">

              <FaHeadset />

              <h4>

                Need More Help?

              </h4>

              <p>

                Contact our experts and we'll guide
                you through the best solution.

              </p>

            </div>

            <Link
              to="/contact"
              className="faq-contact-btn"
            >

              Contact Us

              <FaArrowRight />

            </Link>

          </div>

          {/* Right */}

          <div className="faq-right">

            {faqData.map((item, index) => (

              <div
                key={index}
                className={`faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >

                  <span>

                    {item.question}

                  </span>

                  {activeIndex === index ? (
                    <FiMinus />
                  ) : (
                    <FiPlus />
                  )}

                </button>

                <div
                  className={`faq-answer ${
                    activeIndex === index ? "show" : ""
                  }`}
                >

                  <p>

                    {item.answer}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default FAQ;