import './About.css'
import about_img from '../../assets/img/institute.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about_img'/>
        </div>
        <div className='about-right'>
            <h4>[ABOUT GURUSEWANA]</h4>
            <h2>WHO WE ARE</h2>
            <p>Established in 2000, as a secondary educational institute catering to the young individuals waiting to contribute to the growth of the country,
               Gurusewana is perhaps the most common name that comes to the minds of both parents and students in search of assistance in studies.</p>
        </div>
    </div>
  )
}

export default About