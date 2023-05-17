import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  required,
  placeholder
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} >
        <span>
          {label || name}
          {required ? '*' : ''}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          min={4}
          max={45}
        />
      </label>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string
}

export default Input
