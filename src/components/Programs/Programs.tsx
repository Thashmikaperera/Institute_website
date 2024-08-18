import './Programs.css'
import program_1 from '../../assets/img/akila.jpg'
import program_2 from '../../assets/img/dinesh.jpg'
import program_3 from '../../assets/img/bandara.png'
const Programs = () => {
  return (
    <div className='programs' >
        <div className='programs'>
          <div className='program'>
            <img src={program_1} />
            <div className='caption'>
              <h2>Akila Vimanga</h2>
              <p>[Sinhala]</p>
            </div>
          </div>
          <div className='program'>
            <img src={program_2} />
            <div className='caption'>
              <h2>Dinesh Muthugala</h2>
              <p>[Biology]</p>
            </div>
          </div>
          <div className='program'>
            <img src={program_3} />
            <div className='caption'>
            <h2>Bandara Dissanayake</h2>
            <p>[Economics,Business Studies]</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Programs