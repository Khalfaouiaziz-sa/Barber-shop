
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            YOUR<span>BARBER</span>
          </a>

          <p>
            More than a haircut. An experience built on
            precision, confidence, and timeless style.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#booking">Book Appointment</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              TT
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} YOUR BARBER. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
