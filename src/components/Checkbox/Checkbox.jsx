import React, { useState, useRef } from 'react'
import styles from './Checkbox.module.css'

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (!isChecked && inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={styles.container}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Temporizador
      </label>
      {isChecked && (
        <div className={styles.inputContainer}>
          <input
            ref={inputRef}
            type="number"
            className={styles.inputField}
            value={inputValue}
            onChange={handleInputChange}
            placeholder="1..."
            min={0}
            step={1}
          />
        </div>
      )}
    </div>
  )
}

export default Checkbox
