import React from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Dropdown from '../../components/Dropdown/Dropdown'
import { styles, title, inputContainer, subtitle, formContainer, dividerTitle } from './Form.module.css'
import InputPills from '../../components/InputPills/InputPills'
import { useHistory } from 'react-router-dom'
import Checkbox from '../../components/Checkbox/Checkbox'
import { useStoreon } from 'storeon/react'

const Form = () => {
  const { config, dispatch } = useStoreon('config')
  const history = useHistory()

  const changeWidth = value => {
    dispatch('mazeConfig/set', { key: 'width', value })
  }

  const changeHeight = value => {
    dispatch('mazeConfig/set', { key: 'height', value })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes hacer algo con los valores del formulario, como enviarlos al servidor
    console.log(config)
  }

  return (
    <div className={styles}>
      <span className={title}>CUPHEAD&apos;S MAZE</span>
      <span className={subtitle}>Configuración</span>
      <div className={formContainer}>
        <span className={dividerTitle}>Dimensiones</span>
        <div className={inputContainer}>
          <Input
            label='Ancho'
            name='ancho'
            value={config.width}
            onChange={value => changeWidth(value)}
            type='number'
            required={false}
            placeholder='4...'
          />
          <Input
            label='Alto'
            name='alto'
            value={config.height}
            onChange={value => changeHeight(value)}
            type='number'
            required={false}
            placeholder='4...'
          />
        </div>
        <span className={dividerTitle}>Skins</span>
        <Dropdown />
        <span className={dividerTitle}>Tema</span>
        <InputPills />
        <div className={inputContainer}>
          <span className={dividerTitle}>Tiempo en segundos</span>
        </div>
        <Checkbox />
        <Button onClick={() => { history.push('/Game') }} type='button'>Enviar</Button>
      </div>
    </div>
  )
}

export default Form
