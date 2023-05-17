import Input from './Input'

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'click' },
    type: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' }
  }
}

export const asText = {
  args: {
    label: 'Nombre de Usuario',
    name: 'username',
    type: 'number',
    required: true,
    placeholder: 'Denn1s'
  }
}

export const asPassword = {
  args: {
    label: 'Password',
    name: 'password',
    value: '',
    type: 'password',
    required: true,
    placeholder: ''
  }
}

export const asNumber = {
  args: {
    label: 'Numero de carnet',
    name: 'carnet',
    value: '',
    type: 'number',
    required: true,
    placeholder: ''
  }
}
