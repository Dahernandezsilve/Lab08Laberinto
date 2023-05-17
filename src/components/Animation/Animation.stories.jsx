/* eslint-disable import/no-absolute-path */
import Animation from './Animation'
import down from '/image/down.png'
import left from '/image/left.png'
import up from '/image/up.png'
import right from '/image/right.png'

export default {
  title: 'Animation/Animation',
  component: Animation,
  argTypes: {
    image: {
      control: {
        type: 'inline-radio',
        options: [down, left, up, right]
      }
    },
    widthFrame: { control: 'number' },
    heightFrame: { control: 'number' },
    steps: { control: 'number' },
    fps: { control: 'number' },
    isAnimating: { control: 'boolean' }
  }
}

export const Default = {
  args: {
    image: down,
    widthFrame: 64,
    heightFrame: 64,
    steps: 5,
    fps: 10,
    isAnimating: true
  }
}

export const Down = {
  args: {
    image: down,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true
  }
}

export const Up = {
  args: {
    image: up,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true
  }
}

export const Left = {
  args: {
    image: left,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true
  }
}

export const Right = {
  args: {
    image: right,
    widthFrame: 32,
    heightFrame: 32,
    steps: 5,
    fps: 10,
    isAnimating: true
  }
}
