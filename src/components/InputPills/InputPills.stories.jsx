import InputPills from './InputPills'

export default {
  title: 'Form/InputPills',
  component: InputPills,
  parameters: {
    docs: {
      description: {
        component: 'A component for selecting input pills.'
      }
    }
  },
  argTypes: {
    mazeConfig: {
      width: 4,
      height: 4,
      skin: 1,
      theme: '#E5BB00',
      time: 30,
      timer: false
    },
    changeTheme: { action: 'changeTheme' }
  }
}

export const Default = {
  args: {
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
