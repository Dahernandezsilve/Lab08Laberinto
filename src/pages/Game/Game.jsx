/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { styles, mazeContainer, mazeObject, timerContainer, messageContainer } from './Game.module.css'
import Maze from '../../components/Maze/Maze'
import useApi from '../../hooks/useApi/useApi'
import { useStoreon } from 'storeon/react'

const Game = () => {
  const { mazeConfig, dispatch } = useStoreon('mazeConfig')
  const [response, loading, handleRequest] = useApi()
  const [maze, setMaze] = useState(null)
  const [timer, setTimer] = useState(mazeConfig.timer ? mazeConfig.time : null)
  const [gameOver, setGameOver] = useState(false)

  const handleMaze = async () => {
    await handleRequest('GET', mazeConfig.width, mazeConfig.height)
  }

  useEffect(() => {
    handleMaze()
  }, [])

  useEffect(() => {
    if (response !== undefined && response !== null && Object.keys(response).length > 0) {
      setMaze(response)
    }
  }, [response])

  useEffect(() => {
    let interval = null
    if (mazeConfig.timer && timer !== null && timer > 0) {
      if (!gameOver) {
        interval = setInterval(() => {
          setTimer(prevTimer => prevTimer - 1)
        }, 1000)
      }
    } else if (timer === 0) {
      setGameOver(true)
    }
    return () => clearInterval(interval)
  }, [mazeConfig.timer, timer, gameOver])

  return (
    <div className={styles}>
      {mazeConfig.timer && timer !== null && timer >= 0 && (
        <div className={timerContainer}>Tiempo restante: {timer}</div>
      )}
      {
      maze
        ? (
        <div className={mazeContainer}>
          <Maze
            className={mazeObject}
            key={maze.id}
            json={maze}
            w={mazeConfig.width}
            h={mazeConfig.height}
            color={mazeConfig.theme}
            skinMaze={mazeConfig.skin}
            onPlayerWin={() => setGameOver(true)} // Agregar esta prop para detectar cuando el jugador llega al caso 'g'
          />
        </div>
          )
        : (
        <p>hola</p>
          )}
      {gameOver && (
        <div className={messageContainer}>
          {timer === 0 ? 'Se ha acabado el tiempo, has perdido 😢' : 'Has ganado 😎'}
        </div>
      )}
    </div>
  )
}

Game.propTypes = {
  letter: PropTypes.string
}

export default Game
