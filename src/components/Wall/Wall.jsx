import React from 'react'
import PropTypes from 'prop-types'

import { styles, a1, a2, a3, b1, b2, b3, c1, c2, c3 } from './Wall.module.css'

const Wall = ({ letter = 'p', backgroundColor = 'white', x1y1 = 'white', x2y1 = 'white', x3y1 = 'white', x1y2 = 'white', x2y2 = 'white', x3y2 = 'white', x1y3 = 'white', x2y3 = 'white', x3y3 = 'white' }) => {
  return (
    <div className={styles} style={{ backgroundColor }}>
        <div className={a1} style={{ backgroundColor: x1y1 }}>{letter[0]}</div>
        <div className={b1} style={{ backgroundColor: x2y1 }}>{letter[0]}</div>
        <div className={c1} style={{ backgroundColor: x3y1 }}>{letter[0]}</div>
        <div className={a2} style={{ backgroundColor: x1y2 }}>{letter[0]}</div>
        <div className={b2} style={{ backgroundColor: x2y2 }}>{letter[0]}</div>
        <div className={c2} style={{ backgroundColor: x3y2 }}>{letter[0]}</div>
        <div className={a3} style={{ backgroundColor: x1y3 }}>{letter[0]}</div>
        <div className={b3} style={{ backgroundColor: x2y3 }}>{letter[0]}</div>
        <div className={c3} style={{ backgroundColor: x3y3 }}>{letter[0]}</div>
    </div>
  )
}

Wall.propTypes = {
  letter: PropTypes.string,
  backgroundColor: PropTypes.string,
  x1y1: PropTypes.string,
  x2y1: PropTypes.string,
  x3y1: PropTypes.string,
  x1y2: PropTypes.string,
  x2y2: PropTypes.string,
  x3y2: PropTypes.string,
  x1y3: PropTypes.string,
  x2y3: PropTypes.string,
  x3y3: PropTypes.string
}

export default Wall
