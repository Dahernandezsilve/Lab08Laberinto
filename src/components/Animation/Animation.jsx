import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Animation = ({
  image,
  widthFrame,
  heightFrame,
  steps,
  fps,
  isAnimating = true,
  direction,
}) => {
  const [frameIndex, setFrameIndex] = useState(0)
  const animationRef = useRef(null)

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setFrameIndex(old => (old + 1) % steps)
      }, 1000 / fps)
      return () => clearInterval(interval)
    }
    return () => setFrameIndex(0)
  }, [isAnimating, steps, fps])

  useEffect(() => {
    animationRef.current.focus();
  }, [])

  const spriteStyle = {
    width: widthFrame,
    height: heightFrame,
    backgroundImage: `url(${image})`,
    backgroundPositionX: -(frameIndex * widthFrame),
    backgroundPositionY: -(heightFrame * ['down', 'up', 'left', 'right'].indexOf(direction)),
    outline: 'none'
  }
  return <div
  ref={animationRef}
  style={spriteStyle}
  tabIndex={-1}/>
}

Animation.propTypes = {
  image: PropTypes.string.isRequired,
  widthFrame: PropTypes.number.isRequired,
  heightFrame: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  fps: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool,
}

Animation.defaultProps = {
  isAnimating: true,
}

export default Animation
