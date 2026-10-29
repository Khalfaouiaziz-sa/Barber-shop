
import "./Gallery.css";

const images = [
  "/images/pexels-clark07-27467943.jpg",
  "/images/pexels-clark07-27497935.jpg",
  "/images/pexels-lukas-kosc-525097851-16474397.jpg",
  "/images/pexels-mk7-bober-41368449-11169551.jpg",
  "/images/pexels-rdne-7697665.jpg",
  "/images/pexels-mk7-bober-41368449-11169551.jpg",
  
];

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Gallery</h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Barbershop style ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
