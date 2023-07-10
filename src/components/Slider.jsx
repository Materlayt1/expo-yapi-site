import React, { useEffect, useState } from 'react'
import İmg1 from "../assets/kusadasi/kusadası.jpg"
import İmg2 from "../assets/kusadasi/kusadasi2.jpg"
import İmg3 from "../assets/kusadasi/kusadasi3.jpg"

const Slider = () => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prevSlide => (prevSlide + 1) % 3)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div >
      <div className="slider ">
        <div className={`image ${slide === 0 ? 'actives' : ''}`}>
          
          <img src={İmg1} className="images" alt="" />
        </div>
        <div className={`image ${slide === 1 ? 'actives' : ''}`}>
          <img src={İmg2} alt="" className="images" />
        </div>
        <div className={`image ${slide === 2 ? 'actives' : ''}`}>
          <img src={İmg3} alt="" className="images" />
        </div>
      </div>
      <div className="slide-title"><h1 >EXPO YAPI</h1></div>
    </div>
  )
}

export default Slider
