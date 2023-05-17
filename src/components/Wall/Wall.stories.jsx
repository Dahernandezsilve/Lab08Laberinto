import React from 'react'

import Wall from './Wall'

export default {
  title: 'Maze/Wall',
  component: Wall,
  args: {
    backgroundColor: 'white',
    x1y1: 'white',
    x2y1: 'Black',
    x3y1: 'white',
    x1y2: 'white',
    x2y2: 'Black',
    x3y2: 'white',
    x1y3: 'white',
    x2y3: 'Black',
    x3y3: 'white'
  }
}

const Template = (args) => (
  <div style={{ width: '50px', height: '50px' }}>
    <Wall {...args}/>
  </div>
)

export const AsHWall = Template.bind({})
AsHWall.args = {
  letter: '-',
  x1y1: 'white',
  x2y1: 'white',
  x3y1: 'white',
  x1y2: 'Black',
  x2y2: 'Black',
  x3y2: 'Black',
  x1y3: 'white',
  x2y3: 'white',
  x3y3: 'white'
}

export const AsVWall = Template.bind({})
AsVWall.args = {
  letter: '|',
  backgroundColor: 'blue',
  x1y1: 'white',
  x2y1: 'Black',
  x3y1: 'white',
  x1y2: 'white',
  x2y2: 'Black',
  x3y2: 'white',
  x1y3: 'white',
  x2y3: 'Black',
  x3y3: 'white'
}

export const AsCWall = Template.bind({})
AsCWall.args = {
  letter: '+',
  backgroundColor: 'blue',
  x1y1: 'white',
  x2y1: 'Black',
  x3y1: 'white',
  x1y2: 'Black',
  x2y2: 'Black',
  x3y2: 'Black',
  x1y3: 'white',
  x2y3: 'Black',
  x3y3: 'white'
}

export const AsC1 = Template.bind({})
AsC1.args = {
  letter: '+',
  backgroundColor: 'blue',
  x1y1: 'white',
  x2y1: 'white',
  x3y1: 'white',
  x1y2: 'white',
  x2y2: 'Black',
  x3y2: 'Black',
  x1y3: 'white',
  x2y3: 'Black',
  x3y3: 'white'
}

export const AsC2 = Template.bind({})
AsC2.args = {
  letter: '+',
  backgroundColor: 'blue',
  x1y1: 'white',
  x2y1: 'white',
  x3y1: 'white',
  x1y2: 'Black',
  x2y2: 'Black',
  x3y2: 'white',
  x1y3: 'white',
  x2y3: 'Black',
  x3y3: 'white'
}

export const AsC3 = Template.bind({})
AsC3.args = {
  letter: '+',
  backgroundColor: 'blue',
  x1y1: 'white',
  x2y1: 'Black',
  x3y1: 'white',
  x1y2: 'Black',
  x2y2: 'Black',
  x3y2: 'white',
  x1y3: 'white',
  x2y3: 'white',
  x3y3: 'white'
}

export const AsC4 = Template.bind({})
AsC4.args = {
  letter: '+',
  backgroundColor: 'blue',
  x1y1: 'white',
  x2y1: 'Black',
  x3y1: 'white',
  x1y2: 'white',
  x2y2: 'Black',
  x3y2: 'Black',
  x1y3: 'white',
  x2y3: 'white',
  x3y3: 'white'
}
