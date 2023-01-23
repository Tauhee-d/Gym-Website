import React from 'react'
import './Reasons.css'
import img1 from '../../Assets/images/gym1.jpeg'
import img2 from '../../Assets/images/gym2.jpeg'
import img3 from '../../Assets/images/gym3.jpeg'
import img4 from '../../Assets/images/gym4.jpeg'
import img5 from '../../Assets/images/gym5.jpeg'
import tick from '../../Assets/images/tick.png'

const Reasons = () => {
  return (
    <div className="reasons" id='Reasons '>
        <div className="left-r">
            <img src={img4} alt="" />
            <img src={img2} alt="" />
            <img src={img1} alt="" />
            <img src={img3} alt="" />
        </div>
        <div className="right-r">
            <span >some reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>
            <div className="details-r">
                <div><img src={tick} alt=""></img>
                <span>over 140+ expert coachs</span></div>
                <div><img src={tick} alt="" />
                <span>train smarter and faster than before</span></div>
                <div><img src={tick} alt="" />
                <span>one free program for new member</span></div>
                <div><img src={tick} alt="" />
                <span>reliable partners</span></div>
            </div>
        </div>
    </div>
    )
}

export default Reasons