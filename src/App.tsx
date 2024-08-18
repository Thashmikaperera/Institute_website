import Navbar from './components/Navbar/Navbar'
import Hero from './Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Lecturers' title='Meet Our Professional Lecturers'/>
        <Programs />
        <About />
        <Title subtitle='Gallery' title=' Photos '/>
        <Gallery />
        <Title subtitle='TESTIMONIALS' title=' what student says '/>
        <Testimonials />
        <Title subtitle='Contact Us' title=' Get in Touch'/>
        <Contact />
        <Footer/>
      </div>
      
    </div>
  )
}

export default App