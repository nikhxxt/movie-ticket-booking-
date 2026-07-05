import { useState } from "react";
import "../styles/Support.css";

function Support({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState("faq");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      id: 1,
      question: "How do I book a movie ticket?",
      answer:
        "Go to Movies section, select a movie, choose your preferred showtime, select seats, and complete payment.",
    },
    {
      id: 2,
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel bookings from My Bookings section up to 1 hour before the showtime.",
    },
    {
      id: 3,
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, and digital wallets including UPI.",
    },
    {
      id: 4,
      question: "How do I get my refund?",
      answer:
        "Refunds are processed within 3-5 business days to your original payment method.",
    },
    {
      id: 5,
      question: "Can I modify my booking?",
      answer:
        "You can cancel your current booking and create a new one for your preferred seats/showtime.",
    },
    {
      id: 6,
      question: "Is there a student discount?",
      answer:
        "Yes, we offer 10% discount on bookings for valid student ID holders.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="support-page">
      <div className="support-header">
        <button className="back-btn" onClick={() => setCurrentPage("home")}>
          ← Back to Home
        </button>
        <h1>Help & Support</h1>
        <p>We're here to help you!</p>
      </div>

      <div className="support-container">
        <div className="support-tabs">
          <button
            className={`tab-btn ${activeTab === "faq" ? "active" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            ❓ FAQs
          </button>
          <button
            className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            ✉️ Contact Us
          </button>
        </div>

        <div className="support-content">
          {activeTab === "faq" && (
            <div className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqs.map((faq) => (
                  <details key={faq.id} className="faq-item">
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="contact-section">
              <h2>Contact Us</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-text">
                      <h4>Email</h4>
                      <p>support@cinebook.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📱</div>
                    <div className="info-text">
                      <h4>Phone</h4>
                      <p>+91 1234-567-890</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">⏰</div>
                    <div className="info-text">
                      <h4>Business Hours</h4>
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-text">
                      <h4>Office Location</h4>
                      <p>CineBook HQ, Mumbai, India</p>
                    </div>
                  </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Support;
