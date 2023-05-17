import Button from './Button'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'This is a button'
  }
}

export const AsPrimary = {
  args: {
    type: 'primary'
  }
}

export const AsSecondary = {
  args: {
    type: 'secondary'
  }
}

export const AsLoading = {
  args: {
    type: 'primary',
    loading: true
  }
}

export const AsDisabled = {
  args: {
    type: 'primary',
    disabled: true
  }
}
