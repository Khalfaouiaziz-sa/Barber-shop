import './HeroSection.css'
import Button from '../button/Button'

function HeroSection() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/barbervideo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        
<h1>
  The Art of a <br />
  Perfect Cut
</h1>

<p className="hero-description">
  Experience premium grooming, precision haircuts,
  and timeless style in every visit.
</p>


        <div className="buttons">
          <Button text="Reservation" />
          <Button
            text="Our Services"
            className="button-outline"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;