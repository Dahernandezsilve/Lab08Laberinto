import Checkbox from './Checkbox'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'A simple checkbox component.'
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
    isChecked: {
      control: 'boolean',
      defaultValue: false
    },
    onChange: {
      action: 'onChange'
    },
    time: {
      control: 'number',
      defaultValue: 10
    }
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
