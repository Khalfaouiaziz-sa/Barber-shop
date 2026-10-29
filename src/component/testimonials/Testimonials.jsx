import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Ben Ali",
    role: "Regular Client",
    rating: 5,
    text: "Excellent service and attention to detail. The barber understood exactly what I wanted. Definitely coming back!",
    initials: "AB",
  },
  {
    id: 2,
    name: "Youssef Karim",
    role: "Regular Client",
    rating: 5,
    text: "One of the best barbershops I've visited. The atmosphere is premium, the staff are professional, and the results are perfect.",
    initials: "YK",
  },
  {
    id: 3,
    name: "Mohamed Sami",
    role: "Happy Client",
    rating: 5,
    text: "Great haircut, perfect fade, and excellent customer service. You can tell they care about every detail.",
    initials: "MS",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-heading">
        <span className="testimonials-label">
          CLIENT EXPERIENCES
        </span>

        <h2>
          What Our <span>Clients Say</span>
        </h2>

        <p>
          Your satisfaction is our greatest achievement.
          Here's what our clients think about us.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-top">
              <span className="testimonial-quote">“</span>

              <div
                className="testimonial-stars"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {"★".repeat(testimonial.rating)}
              </div>
            </div>

            <p className="testimonial-text">
              {testimonial.text}
            </p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {testimonial.initials}
              </div>

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="testimonials-footer">
        <span className="footer-star">★</span>
        <strong>Every client. Every detail. Every time.</strong>
      </div>
    </section>
  );
}

export default Testimonials;