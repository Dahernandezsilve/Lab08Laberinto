import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { welcomeB, miVideo } from './Welcome.module.css'

const Welcome = () => {
  const videoRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [videoRef])

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.src = '/video/fin.mp4'
      videoRef.current.load()
      videoRef.current.play()
      setInterval(() => history.push('/Form'), 1700)
    }
  }

  return (
    <div className={welcomeB}>
      <video ref={videoRef} id="miVideo" className={miVideo} autoPlay loop muted onClick={handleStart} onKeyDown={handleStart}>
        <source src='/video/inicio.mp4' />
      </video>
    </div>
  )
}

export default Welcome
