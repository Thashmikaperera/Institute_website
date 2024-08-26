import './Testimonials.css';
import next_icon from '../../assets/img/rightArrow .png';
import back_icon from '../../assets/img/leftArrow.png';
import user_1 from '../../assets/img/mountain.jpg';
import user_2 from '../../assets/img/mountain.jpg';
import user_3 from '../../assets/img/mountain.jpg';
import user_4 from '../../assets/img/mountain.jpg';
import { useRef } from 'react';

const Testimonials = () => {
  const slider = useRef<HTMLUListElement | null>(null);
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideForward} alt="Next" />
      <img src={back_icon} className='back-btn' onClick={slideBackward} alt="Back" />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>Thashmika</h3>
                  <span>Eduty, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                praesentium eos, in eveniet sunt cum deleniti, libero beatae saepe
                amet accusamus minima. Nemo natus perferendis rem delectus harum quae
                quia.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Kasun</h3>
                  <span>Eduty, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                praesentium eos, in eveniet sunt cum deleniti, libero beatae saepe
                amet accusamus minima. Nemo natus perferendis rem delectus harum quae
                quia.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Shanu</h3>
                  <span>Eduty, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                praesentium eos, in eveniet sunt cum deleniti, libero beatae saepe
                amet accusamus minima. Nemo natus perferendis rem delectus harum quae
                quia.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Madu</h3>
                  <span>Eduty, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                praesentium eos, in eveniet sunt cum deleniti, libero beatae saepe
                amet accusamus minima. Nemo natus perferendis rem delectus harum quae
                quia.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;