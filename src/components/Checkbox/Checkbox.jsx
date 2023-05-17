import React, { useState } from 'react'
import styles from './Checkbox.module.css'
import { useStoreon } from 'storeon/react'

const Checkbox = () => {
  const { mazeConfig, dispatch } = useStoreon('mazeConfig')
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    changeTimer(!isChecked)
  }

  const changeTime = value => {
    dispatch('mazeConfig/set', { key: 'time', value })
    console.log(mazeConfig)
  }

  const changeTimer = value => {
    dispatch('mazeConfig/set', { key: 'timer', value })
    console.log(mazeConfig)
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
            onChange={e => changeTime(parseInt(e.target.value))}
            placeholder="1..."
            min={0}
          />
        </div>
      )}
    </div>
  )
}

export default Checkbox
