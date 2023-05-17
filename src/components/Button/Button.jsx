import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({
  children,
  onClick,
  type = 'primary',
  disabled = false,
  loading = false
}) => (
  <button
    className={`${styles.button} ${
      type === 'primary' ? styles.primary : styles.secondary
    }`}
    type="button"
    onClick={() => {
      if (!loading && !disabled) {
        onClick()
      }
    }}
    disabled={disabled}
  >
    <span></span>
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool
}

export default Button
