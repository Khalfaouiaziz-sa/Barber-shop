import { useState } from "react";
import "./Booking.css";

const services = [
  { name: "Classic Haircut", price: 20 },
  { name: "Beard Trim", price: 10 },
  { name: "Skin Fade", price: 20 },
  { name: "Haircut & Beard", price: 25 },
];

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

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

    if (formData.date < today) {
      setStatus("Please select a future date.");
      return;
    }

    setStatus(
      "Your form is ready! Connect a backend to save and confirm your booking."
    );

    console.log("Booking details:", formData);
  }

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        <div className="booking-info">
          <span className="booking-label">RESERVE YOUR EXPERIENCE</span>

          <h2>
            Book Your <span>Appointment</span>
          </h2>

          <p className="booking-description">
            Take a moment for yourself. Choose your service,
            select your preferred time, and let us take care
            of the rest.
          </p>

          <div className="booking-detail">
            <span className="booking-icon">✂</span>
            <div>
              <h3>Premium Grooming</h3>
              <p>Professional service tailored to your style.</p>
            </div>
          </div>

          <div className="booking-detail">
            <span className="booking-icon">◷</span>
            <div>
              <h3>Your Time Matters</h3>
              <p>Choose the date and time that suit you.</p>
            </div>
          </div>

          <div className="booking-detail">
            <span className="booking-icon">◆</span>
            <div>
              <h3>Attention to Detail</h3>
              <p>Every cut deserves precision and care.</p>
            </div>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-form-heading">
            <span>YOUR APPOINTMENT</span>
            <h3>Make a Reservation</h3>
          </div>

          <div className="booking-fields">
            <div className="booking-field">
              <label htmlFor="booking-name">Full Name</label>
              <input
                id="booking-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                maxLength={80}
                autoComplete="name"
                required
              />
            </div>

            <div className="booking-field">
              <label htmlFor="booking-phone">Phone Number</label>
              <input
                id="booking-phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                maxLength={25}
                autoComplete="tel"
                required
              />
            </div>

            <div className="booking-field booking-field-full">
              <label htmlFor="booking-service">Choose Service</label>
              <select
                id="booking-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>

                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} — {service.price} DT
                  </option>
                ))}
              </select>
            </div>

            <div className="booking-field">
              <label htmlFor="booking-date">Preferred Date</label>
              <input
                id="booking-date"
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="booking-field">
              <label htmlFor="booking-time">Preferred Time</label>
              <select
                id="booking-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
                <option value="18:00">06:00 PM</option>
              </select>
            </div>

            <div className="booking-field booking-field-full">
              <label htmlFor="booking-message">
                Additional Notes (Optional)
              </label>
              <textarea
                id="booking-message"
                name="message"
                placeholder="Tell us about your preferred style..."
                rows="3"
                maxLength={500}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="booking-submit">
            REQUEST APPOINTMENT <span>↗</span>
          </button>

          {status && (
            <p className="booking-status" role="status">
              {status}
            </p>
          )}

          <p className="booking-note">
            Your appointment is not confirmed until the
            barbershop confirms your request.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Booking;