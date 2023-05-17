import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { styles, mazeContainer, mazeObject } from './Game.module.css'
import Maze from '../../components/Maze/Maze'
import useApi from '../../hooks/useApi/useApi'
import { useStoreon } from 'storeon/react'

const Game = () => {
  const { mazeConfig, dispatch } = useStoreon('mazeConfig')
  console.log('Maze')
  const [response, loading, handleRequest] = useApi()
  const [maze, setMaze] = useState(null)

  const handleMaze = async () => {
    await handleRequest('GET', mazeConfig.width, mazeConfig.height)
  }

  useEffect(() => {
    if (response === undefined || response === null || Object.keys(response).length === 0) {
      console.log('No ha pasado')
    } else {
      setMaze(response)
      console.log('Si paso', maze)
    }
  }, [response])

  useEffect(() => {
    handleMaze()
    console.log('Actu', response)
    console.log('maze', maze)
  }, [])

  return (
    <div className={styles}>
      {
      maze !== undefined && maze !== null
        ? (
        <div className={mazeContainer}>
          <Maze className={mazeObject} key={maze.id} json={maze} w={mazeConfig.width} h={mazeConfig.height} color={mazeConfig.theme}/>
        </div>
          )
        : (<p>hola</p>)
    }
    </div>
  )
}

Game.propTypes = {
  letter: PropTypes.string
}

export default Game
