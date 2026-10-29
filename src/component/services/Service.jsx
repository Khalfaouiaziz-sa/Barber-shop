
import './Services.css'


function Service () {
    const services = [
  {
    number : "01",
    image : '/images/pexels-clark07-27467943.jpg',
    name: "Classic Haircut",
    description:
      "A timeless haircut, tailored to your style and personality.",
    price: "20 DT",
  },
  {
    number : "02",
    image : "/images/pexels-mk7-bober-41368449-11169551.jpg",
    name: "Beard Trim",
    description:
      "Precise beard shaping for a clean and confident look.",
    price: "10 DT",
  },
  {
    number : "03",
    image : '/images/pexels-rebornfilmes-33461079.jpg',
    name: "Skin Fade",
    description:
      "A sharp, modern fade crafted with precision and detail.",
    price: "20 DT",
  },
  {
    number : "04",
    image :'/images/pexels-vlady-b-462525121-16997937.jpg',
    name: "Haircut & Beard",
    description:
      "The complete grooming experience for a refined appearance.",
    price: "25 DT",
  },
   {
    number : "01",
    image : '/images/pexels-clark07-27467943.jpg',
    name: "Classic Haircut",
    description:
      "A timeless haircut, tailored to your style and personality.",
    price: "20 DT",
  },
  {
    number : "02",
    image : "/images/pexels-mk7-bober-41368449-11169551.jpg",
    name: "Beard Trim",
    description:
      "Precise beard shaping for a clean and confident look.",
    price: "10 DT",
  },
  {
    number : "03",
    image : '/images/pexels-rebornfilmes-33461079.jpg',
    name: "Skin Fade",
    description:
      "A sharp, modern fade crafted with precision and detail.",
    price: "20 DT",
  },
  {
    number : "04",
    image :'/images/pexels-vlady-b-462525121-16997937.jpg',
    name: "Haircut & Beard",
    description:
      "The complete grooming experience for a refined appearance.",
    price: "25 DT",
  },
  {
    number : "04",
    image :'/images/pexels-vlady-b-462525121-16997937.jpg',
    name: "Haircut & Beard",
    description:
      "The complete grooming experience for a refined appearance.",
    price: "25 DT",
  },
  
];
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-label">
          WHAT WE OFFER
        </span>

        <h2>
          Our <span>Services</span>
        </h2>

        <p>
          Premium grooming services designed around your style.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-number">
                {service.number}
              </span>

              <span className="service-arrow">↗</span>
            </div>

            <img src={service.image} />

            <h3>{service.name}</h3>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-card-bottom">
              <span className="service-price">
                {service.price}
              </span>

              <a href="#contact" className="service-book">
                Book Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service;
