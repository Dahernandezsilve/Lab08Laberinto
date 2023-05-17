import React from 'react'
import Dropdown from './Dropdown'

export default {
  title: 'Form/Dropdown',
  component: Dropdown
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {}

export const WithOptions = Template.bind({})
WithOptions.args = {
  options: [
    { id: 1, imageSrc: '/image/cuphead.png', text: 'Option 1' },
    { id: 2, imageSrc: '/image/cuphead.png', text: 'Option 2' },
    { id: 3, imageSrc: '/image/cuphead.png', text: 'Option 3' }
  ]
}

export const WithSelectedOption = Template.bind({})
WithSelectedOption.args = {
  options: [
    { id: 1, imageSrc: '/image/cuphead.png', text: 'Option 1' },
    { id: 2, imageSrc: '/image/cuphead.png', text: 'Option 2' },
    { id: 3, imageSrc: '/image/cuphead.png', text: 'Option 3' }
  ],
  selectedOption: { id: 2, imageSrc: '/image/cuphead.png', text: 'Option 2' }
}
