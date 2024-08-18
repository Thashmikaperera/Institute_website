import './Gallery.css'
import gallery_1 from '../../assets/img/st.jpg'
import gallery_2 from '../../assets/img/st1.jpg'
import gallery_3 from '../../assets/img/st2.jpg'
import gallery_4 from '../../assets/img/st3.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='glry'>
            <img src={gallery_1} />
            <img src={gallery_2} />
            <img src={gallery_3} />
            <img src={gallery_4} />
        </div>
    </div>
  )
}

export default Gallery