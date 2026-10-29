import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Frontend test only: no message is sent yet.
    console.log("Contact message:", formData);

    setStatus(
      "Your message is ready! Connect a backend to send it."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span className="contact-label">GET IN TOUCH</span>

        <h2>
          Let's <span>Connect</span>
        </h2>

        <p>
          Have a question or need more information?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Visit Our Barbershop</h3>

          <p className="contact-description">
            Experience professional grooming in a
            welcoming atmosphere where every detail matters.
          </p>

          <div className="contact-item">
            <span className="contact-icon">⌖</span>
            <div>
              <h4>Our Location</h4>
              <p>Your barbershop address here</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">☎</span>
            <div>
              <h4>Phone Number</h4>
              <p>+216 XX XXX XXX</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <div>
              <h4>Email Address</h4>
              <p>yourbarbershop@example.com</p>
            </div>
          </div>

          <div className="contact-hours">
            <h4>Opening Hours</h4>

            <div>
              <span>Monday – Saturday</span>
              <span>09:00 – 19:00</span>
            </div>

            <div>
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <span>WE'RE HERE TO HELP</span>
            <h3>Send Us a Message</h3>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-name">Full Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              maxLength={80}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={254}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              maxLength={120}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              maxLength={2000}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            SEND MESSAGE <span>↗</span>
          </button>

          {status && (
            <p className="contact-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
