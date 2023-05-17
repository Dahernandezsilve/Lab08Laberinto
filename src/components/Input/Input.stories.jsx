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

export const AsText = {
  args: {
    label: 'Nombre de Usuario',
    name: 'username',
    type: 'number',
    required: true,
    placeholder: 'user'
  }
}

export const AsNumber = {
  args: {
    label: 'Numero de carnet',
    name: 'carnet',
    value: '',
    type: 'number',
    required: true,
    placeholder: ''
  }
}
