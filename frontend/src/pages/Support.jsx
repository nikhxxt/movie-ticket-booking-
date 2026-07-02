import "../styles/Support.css";

function Support({ setCurrentPage }) {
  const faqs = [
    {
      id: 1,
      question: "How do I book tickets?",
      answer: "Navigate to the Movies section, select a movie, choose your seats, and proceed to payment.",
    },
    {
      id: 2,
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel bookings up to 30 minutes before the show time from your My Bookings section.",
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, debit cards, UPI, and digital wallets.",
    },
    {
      id: 4,
      question: "How do I get a refund?",
      answer: "Refunds are processed within 5-7 business days after cancellation.",
    },
  ];

  return (
    <div className="support-page">
      <div className="support-header">
        <h1>Help & Support</h1>
        <p>We're here to help you!</p>
        <button className="back-btn" onClick={() => setCurrentPage("home")}>
          ← Back to Home
        </button>
      </div>

      <div className="support-container">
        {/* Contact Section */}
        <div className="contact-section">
          <h2>Get in Touch</h2>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>1-800-CINEMA</p>
              <p className="contact-time">Mon-Fri: 9 AM - 9 PM</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>support@cinebook.com</p>
              <p className="contact-time">Response within 24 hours</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h3>Live Chat</h3>
              <p>Available Now</p>
              <button className="chat-btn">Start Chat</button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
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

        {/* Feedback Section */}
        <div className="feedback-section">
          <h2>Send us your Feedback</h2>
          <form className="feedback-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Issue Type</option>
                <option value="bug">Bug Report</option>
                <option value="suggestion">Suggestion</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
