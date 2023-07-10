import React from 'react'
import Video from "../assets/tanitim.mp4"

const Background = () => {
    return (
        <div className="video-cont">
            <div className='video'>
                <video  autoPlay loop muted >
                    <source src={Video} type="video/mp4" />
                </video>

            </div><div className="slide-title "><h1 >EXPO YAPI</h1></div></div>
    )
}

export default Background