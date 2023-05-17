import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Dropdown.module.css'

const Dropdown = ({ mazeConfig, dispatch, changeSkin }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    { id: 1, imageSrc: '/image/cuphead.png', text: 'Cuphead rojo' },
    { id: 2, imageSrc: '/image/cupheadBlue.png', text: 'Cuphead azul' },
    { id: 3, imageSrc: '/image/cupheadGreen.png', text: 'Cuphead verde' }
  ]

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggleButton} onClick={toggleDropdown}>
        {
          selectedOption
            ? (
              <div className={styles.selectedOption}>
                <img src={selectedOption.imageSrc} alt="Option" />
                <span>{selectedOption.text}</span>
              </div>
              )
            : (
              <span className={styles.text}>Elige una skin</span>
              )}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => {
                selectOption(option)
                changeSkin(option.id)
              }}
            >
              <img src={option.imageSrc} alt="Option" />
              <span>{option.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  mazeConfig: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeSkin: PropTypes.func.isRequired
}

export default Dropdown
