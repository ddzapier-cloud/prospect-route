import React from 'react'
import './Marquee.css'
import EnergyImg from '../../assets/marquee/energy.png'
import FocusImg from '../../assets/marquee/focus.png'
import PowerImg from '../../assets/marquee/power.png'
import SpeedImg from '../../assets/marquee/speed.png'

const Marquee = () => {
  return (
    <>
    <div className='marqueParent'>
      {/* Left to Right Marquee */}
      <div className="marquee-container">
        <div className="marquee-content-left-right">
          <div className="marquee-img-parent">
            <img src={EnergyImg} alt="Angular Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={FocusImg} alt="Apple Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={PowerImg} alt=".NET Framework Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={SpeedImg} alt="Laravel Framework Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={EnergyImg} alt="Angular Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={FocusImg} alt="Apple Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={PowerImg} alt=".NET Framework Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={SpeedImg} alt="Laravel Framework Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={EnergyImg} alt="Angular Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={FocusImg} alt="Apple Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={PowerImg} alt=".NET Framework Logo" className="marquee-image" />
          </div>
          <div className="marquee-img-parent">
            <img src={SpeedImg} alt="Laravel Framework Logo" className="marquee-image" />
          </div>
        </div>
      </div>

    </div>
    </>
    
  )
}

export default Marquee