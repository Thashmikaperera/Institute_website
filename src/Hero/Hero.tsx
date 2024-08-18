import { Link } from 'react-scroll'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Sustainable Learning for a Brighter Tomorrow</h1>
        <p>"Empowering future educators, our cutting-edge curriculum blends theoretical knowledge with practical 
          experiences, preparing students to excel and innovate in the dynamic landscape of education."</p>
        <button className='btn'><Link to="about" smooth={true} offset={-190} duration={500}>Read More</Link></button>
      </div>
    </div>
  )
}

export default Hero
