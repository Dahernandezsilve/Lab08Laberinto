import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Wall } from '@components'
import { maze } from './Maze.module.css'
import Player from '../Player'

const Maze = ({ json, w, h }) => {
  const initialPlayerPos = json.reduce((acc, row, rowIndex) => {
    const colIndex = row.findIndex(col => col === 'p')
    if (colIndex !== -1) {
      acc = { x: colIndex, y: rowIndex }
    }
    return acc
  }, undefined)

  const [playerPos, setPlayerPos] = useState(initialPlayerPos)

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37: // left arrow
        if (json[playerPos.y][playerPos.x - 1] === ' ' || json[playerPos.y][playerPos.x - 1] === 'p' || json[playerPos.y][playerPos.x - 1] === 'g') {
          setPlayerPos({ x: playerPos.x - 1, y: playerPos.y })
        }
        break
      case 38: // up arrow
        if (json[playerPos.y - 1][playerPos.x] === ' ' || json[playerPos.y - 1][playerPos.x] === 'p' || json[playerPos.y - 1][playerPos.x] === 'g') {
          setPlayerPos({ x: playerPos.x, y: playerPos.y - 1 })
        }
        break
      case 39: // right arrow
        if (json[playerPos.y][playerPos.x + 1] === ' ' || json[playerPos.y][playerPos.x + 1] === 'p' || json[playerPos.y][playerPos.x + 1] === 'g') {
          setPlayerPos({ x: playerPos.x + 1, y: playerPos.y })
        }
        break
      case 40: // down arrow
        if (json[playerPos.y + 1][playerPos.x] === ' ' || json[playerPos.y + 1][playerPos.x] === 'p' || json[playerPos.y + 1][playerPos.x] === 'g') {
          setPlayerPos({ x: playerPos.x, y: playerPos.y + 1 })
        }
        break
      default:
        break
    }
  }

  return (
    <div
      className={maze}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1},  50px)`,
        gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
        width: `${((w * 2) + w + 1) * 50}px`,
        height: `${(h + h + 1) * 50}px`,
        position: 'relative'
      }}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
        {json.map((row, fila) => row.map((col, columna) => {
          switch (col) {
            case 'p':
              return (<>
              <Player letter='p' backgroundColor="brown" pos={playerPos} />
              <Wall letter=' ' backgroundColor="yellow" x1y1='#2C3E50' x2y1='#2C3E50' x3y1='#2C3E50' x1y2='#2C3E50' x2y2='#2C3E50' x3y2='#2C3E50' x1y3='#2C3E50' x2y3='#2C3E50' x3y3='#2C3E50' />
              </>)
            case 'g':
              return <Wall letter='g' backgroundColor="brown" />
            case '-':
              return <Wall letter='-' backgroundColor="red" x1y2='black' x2y2='black' x3y2='black'/>
            case '+':
              if (fila - 1 < 0) {
                // Esquina superior derecha
                if (columna + 1 > row.length - 1) {
                  return <Wall
                  letter='+' backgroundColor="brown"
                  x2y2='black' x1y2='black' x2y3='black'/>
                }
                // Esquina superior izquierda
                if (columna - 1 < 0) {
                  return <Wall
                  letter='+' backgroundColor="brown"
                  x2y2='black' x3y2='black' x2y3='black' />
                }
                return <Wall
                letter='+' backgroundColor="brown"
                x2y2='black'
                x1y2='black'
                x3y2='black'
                x2y3={json[fila + 1][columna] === ' ' ? 'white' : 'black'}/>
              }

              // Fila inferior
              if (fila + 1 > json.length - 1) {
                // Esquina inferior izquierda
                if (columna - 1 < 0) {
                  return <Wall letter='+' backgroundColor="brown"
                  x2y2='black' x2y1='black' x3y2='black'/>
                }
                // Esquina inferior derecha
                if (columna + 1 > row.length - 1) {
                  return <Wall letter='+' backgroundColor="brown"
                  x2y2='black' x2y1='black' x1y2='black'/>
                }
                return <Wall letter='+' backgroundColor="brown"
                x2y2='black' x2y1={json[fila - 1][columna] === ' ' ? 'white' : 'black'} x1y2='black' x3y2='black' />
              }

              // Columna izquierda
              if (columna - 1 < 0) {
                // Esquina inferior izquierda
                if (fila + 1 > json.length - 1) {
                  return <Wall letter='+' backgroundColor="brown"
                  x2y2='black' x2y1='black' x3y2='black' />
                }
                return <Wall
                letter='+' backgroundColor="brown"
                x2y2='black' x3y2={json[fila][columna + 1] === ' ' ? 'white' : 'black'} x2y3='black' x2y1='black' />
              }

              // Columna derecha
              if (columna + 1 > row.length - 1) {
                if (fila + 1 > json.length - 1) {
                  return <Wall
                  letter='+' backgroundColor="brown"
                  x2y2='black' x1y2='black' x2y1='black'/>
                }
                return <Wall
                letter='+' backgroundColor="brown"
                x2y2='black' x1y2={json[fila][columna - 1] === ' ' ? 'white' : 'black'} x2y1='black'
                x2y3='black' />
              }

              return <Wall
                letter='+' backgroundColor="brown"
                x2y2='black'
                x3y2={json[fila][columna + 1] === ' ' ? 'white' : 'black'}
                x1y2={json[fila][columna - 1] === ' ' ? 'white' : 'black'}
                x2y1={json[fila - 1][columna] === ' ' ? 'white' : 'black'}
                x2y3={json[fila + 1][columna] === ' ' ? 'white' : 'black'}/>
            case '|':
              return <Wall letter='|' backgroundColor="green" x2y1='black' x2y2='black' x2y3='black'/>
            case ' ':
              return <Wall letter=' ' backgroundColor="yellow" x1y1='#2C3E50' x2y1='#2C3E50' x3y1='#2C3E50' x1y2='#2C3E50' x2y2='#2C3E50' x3y2='#2C3E50' x1y3='#2C3E50' x2y3='#2C3E50' x3y3='#2C3E50' />
          }
          return null
        }))}
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  w: PropTypes.number,
  h: PropTypes.number
}

export default Maze
