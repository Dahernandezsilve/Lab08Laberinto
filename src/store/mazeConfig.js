const mazeConfig = store => {
  store.on('@init', () => ({
    config: {
      skin: '',
      theme: '',
      width: 4,
      height: 4,
      time: false,
      timer: 15
    }
  }))
  store.on('mazeConfig/Maze', (_, newState) => newState)
  store.on('mazeConfig/set', (oldState, { key, value }) => ({
    config: {
      ...oldState.config,
      [key]: value
    }
  }))
}

export default mazeConfig
