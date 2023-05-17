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
  const { mazeConfig, dispatch } = useStoreon('mazeConfig')
  const history = useHistory()

  const changeWidth = value => {
    dispatch('mazeConfig/set', { key: 'width', value })
    console.log(mazeConfig)
  }

  const changeHeight = value => {
    dispatch('mazeConfig/set', { key: 'height', value })
    console.log(mazeConfig)
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
            value={mazeConfig.width}
            onChange={value => changeWidth(parseInt(value))}
            required={false}
            placeholder='4...'
          />
          <Input
            label='Alto'
            name='alto'
            value={mazeConfig.height}
            onChange={value => changeHeight(parseInt(value))}
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
        <Button onClick={() => { history.push('/Game') }} type='primary'>Enviar</Button>
      </div>
    </div>
  )
}

export default Form
