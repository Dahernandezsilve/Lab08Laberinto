import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Checkbox.module.css'

const Checkbox = ({ mazeConfig, dispatch, changeTime, changeTimer }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    changeTimer(!isChecked)
  }

  return (
    <div className={styles.container}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={isChecked}
          onChange={() => {
            handleCheckboxChange()
          }}
        />
        Temporizador
      </label>
      {isChecked && (
        <div className={styles.inputContainer}>
          <input
            type="number"
            className={styles.inputField}
            value={mazeConfig.time}
            onChange={(e) => changeTime(parseInt(e.target.value))}
            placeholder="1..."
            min={0}
          />
        </div>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  mazeConfig: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeTime: PropTypes.func.isRequired,
  changeTimer: PropTypes.func.isRequired
}

export default Checkbox
