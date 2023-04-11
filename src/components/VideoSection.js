import React from 'react'
import '../css/videoSection.css'

function VideoSection() {
  return (
    <div className='video-container'>
        <video src='/video-4.mp4' autoPlay loop muted></video>
        
    </div>
  )
}

export default VideoSection