import Button from "../button/Button"
import './About.css'
 function About () {
    return(
      
    <section className="about-section">
      <div className="about-content">
        <span className="about-label">Our story</span>
        <h2>About Us</h2>
        <p>
          We believe every haircut tells a story. Our barbers combine skill, precision, and passion to deliver exceptional haircuts and grooming services tailored to your personality.
         From modern fades to classic cuts, we help you look sharp and feel confident.
        </p>
        <Button text="Discover Our Services" />
      </div>

      <div className="about-image">
        <img src="/images/aboutus.jpg" alt="Our chef preparing a dish" />
      </div>
    </section>
  
    )
}

export default About