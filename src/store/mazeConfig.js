const mazeConfig = store => {
  store.on('@init', () => ({
    mazeConfig: {
      width: 4,
      height: 4,
      skin: 1,
      theme: '#E5BB00',
      time: 30,
      timer: false
    }
  }))
  store.on('mazeConfig/Maze', (_, newState) => newState)
  store.on('mazeConfig/set', (oldState, { key, value }) => ({
    mazeConfig: {
      ...oldState.mazeConfig,
      [key]: value
    }
  }))
}

export default mazeConfig
