/* eslint-disable import/no-absolute-path */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Animation from '../Animation/Animation'
import down from '/image/down.png'
import left from '/image/left.png'
import up from '/image/up.png'
import right from '/image/right.png'
import downBlue from '/image/downBlue.png'
import leftBlue from '/image/leftBlue.png'
import upBlue from '/image/upBlue.png'
import rightBlue from '/image/rightBlue.png'
import downGreen from '/image/downGreen.png'
import leftGreen from '/image/leftGreen.png'
import upGreen from '/image/upGreen.png'
import rightGreen from '/image/rightGreen.png'
import { centered } from './Player.module.css'

const Player = ({ letter, backgroundColor, pos = { x: 50, y: 50 }, skinMaze }) => {
  const cellSize = 50
  const playerSize = 50
  const x = (pos.x - 1) * cellSize + (cellSize - playerSize) / 2
  const y = (pos.y - 1) * cellSize + (cellSize - playerSize) / 2

  const [direction, setDirection] = useState(() => {
    switch (skinMaze) {
      case 2:
        return downBlue
      case 3:
        return downGreen
      case 1:
        return down
      default:
        return down
    }
  })
  const [isAnimating, setIsAnimating] = useState(true)
  const [steps, setSteps] = useState(13)
  const [width, setWidth] = useState(32)
  const [height, setHeight] = useState(32)

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      switch (skinMaze) {
        case 2:
          setDirection(upBlue)
          break
        case 3:
          setDirection(upGreen)
          break
        case 1:
          setDirection(up)
          break
        default:
          setDirection(up)
      }
      setSteps(16)
      setWidth(33)
      setHeight(30)
    } else if (event.key === 'ArrowDown') {
      switch (skinMaze) {
        case 2:
          setDirection(downBlue)
          break
        case 3:
          setDirection(downGreen)
          break
        case 1:
          setDirection(down)
          break
        default:
          setDirection(down)
      }
      setSteps(13)
      setWidth(32)
      setHeight(32)
    } else if (event.key === 'ArrowLeft') {
      switch (skinMaze) {
        case 2:
          setDirection(leftBlue)
          break
        case 3:
          setDirection(leftGreen)
          break
        case 1:
          setDirection(left)
          break
        default:
          setDirection(left)
      }
      setSteps(14)
      setWidth(34)
      setHeight(32)
    } else if (event.key === 'ArrowRight') {
      switch (skinMaze) {
        case 2:
          setDirection(rightBlue)
          break
        case 3:
          setDirection(rightGreen)
          break
        case 1:
          setDirection(right)
          break
        default:
          setDirection(right)
      }
      setSteps(14)
      setWidth(34)
      setHeight(32)
    }
    setIsAnimating(true)
  }

  return (
    <div
      className={centered}
      onKeyDown={handleKeyDown}
      style={{
        margin: '50px',
        position: 'absolute',
        top: `${y}px`,
        left: `${x}px`,
        width: `${playerSize}px`,
        height: `${playerSize}px`,
        backgroundColor: 'transparent',
        transition: '0.3s ease-out'
      }}
    >
      <Animation
        image={direction}
        widthFrame={width}
        heightFrame={height}
        steps={steps}
        fps={10}
        isAnimating={isAnimating}
        direction={direction}
       />
    </div>
  )
}

Player.propTypes = {
  letter: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  style: PropTypes.object,
  pos: PropTypes.object.isRequired
}

export default Player
