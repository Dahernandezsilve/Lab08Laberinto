import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './InputPills.module.css'

const InputPills = ({ mazeConfig, dispatch, changeTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(null)

  const themes = [
    { id: 1, name: 'Predeterminado', color: '#E5BB00' },
    { id: 2, name: 'Azul', color: '#2C3E50' },
    { id: 3, name: 'Verde', color: '#008000' }
  ]

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme.id)
  }

  return (
    <div className={styles.themeSelector}>
      {themes.map((theme) => (
        <button
          key={theme.id}
          className={`${styles.themeButton} ${
            selectedTheme === theme.id ? styles.selectedThemeButton : ''
          }`}
          style={{
            backgroundColor: selectedTheme === theme.id ? theme.color : '#f5c542'
          }}
          onClick={() => {
            handleThemeChange(theme)
            changeTheme(theme.color)
          }}
        >
          {theme.name}
        </button>
      ))}
    </div>
  )
}

InputPills.propTypes = {
  mazeConfig: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired
}

export default InputPills
