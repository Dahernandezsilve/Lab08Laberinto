import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

const Animation = ({
  image,
  widthFrame,
  heightFrame,
  steps,
  fps,
  isAnimating = true,
  direction,
  skin
}) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setFrameIndex((old) => (old + 1) % steps);
      }, 1000 / fps);
      return () => clearInterval(interval);
    }
    return () => setFrameIndex(0);
  }, [isAnimating, steps, fps]);

  useEffect(() => {
    animationRef.current.focus();
  }, []);

  let spriteStyle = {
    width: widthFrame,
    height: heightFrame,
    backgroundImage: `url(${image})`,
    backgroundPositionX: -(frameIndex * widthFrame),
    backgroundPositionY: -(heightFrame * ['down', 'up', 'left', 'right'].indexOf(direction)),
    outline: 'none',
  };

  if (skin === 2) {
    spriteStyle.filter = 'hue-rotate(240deg) saturate(200%);';
  } else if (skin === 3) {
    spriteStyle.filter = 'sepia(0%) hue-rotate(60deg) saturate(300%)';
  }

  return <div ref={animationRef} style={spriteStyle} tabIndex={-1} />;
};

Animation.propTypes = {
  image: PropTypes.string.isRequired,
  widthFrame: PropTypes.number.isRequired,
  heightFrame: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  fps: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool,
  direction: PropTypes.string.isRequired,
  skin: PropTypes.number.isRequired
};

Animation.defaultProps = {
  isAnimating: true
};

export default Animation;
