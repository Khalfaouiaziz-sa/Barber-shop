import './App.css'
import About from './component/about/About'
import Booking from './component/booking/Booking'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Gallery from './component/gallery/Gallery'
import HeroSection from './component/herosection/HeroSection'
import NavBar from './component/navbar/NavBar'
import Service from './component/services/Service'
import Testimonials from './component/testimonials/Testimonials'

function App() {
 

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Service/>
      <Gallery/>
      <Testimonials/>
      <Booking/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
