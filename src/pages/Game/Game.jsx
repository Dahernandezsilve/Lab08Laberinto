import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { styles } from './Game.module.css'
import Maze from '../../components/Maze/Maze'
import useApi from '../../hooks/useApi/useApi'

const Game = () => {
  console.log('Maze')
  const [response, loading, handleRequest] = useApi()
  const [maze, setMaze] = useState(null)

  const handleMaze = async () => {
    await handleRequest('GET', 10, 10)
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
        <Maze key={maze.id} json={maze} w={10} h={10} />
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
