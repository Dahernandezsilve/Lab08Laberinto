import React from 'react'

import Player from './Player'

export default {
  title: 'Sprites/Player',
  component: Player,
  args: {
    letter: 'p',
    backgroundColor: 'white',
    pos: '{ x: 50, y: 50 }'
  }
}

const Template = (args) => (
  <div style={{ padding: '20px' }}>
    <Player {...args}/>
  </div>
)

export const Player1 = Template.bind({})
Player1.args = {
  letter: 'p'
}
