import Dropdown from './Dropdown'

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  argTypes: {
    mazeConfig: {
      width: 4,
      height: 4,
      skin: 1,
      theme: '#E5BB00',
      time: 30,
      timer: false
    },
    changeSkin: { action: 'changeSkin' }
  }
}

export const Default = {
  args: {
    isChecked: false,
    time: 10,
    mazeConfig: {
      width: 4,
      height: 4,
      skin: 1,
      theme: '#E5BB00',
      time: 30,
      timer: false
    }
  }
}
