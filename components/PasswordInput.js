import { useState } from 'react'
import styles from './PasswordInput.module.css'

export default function PasswordInput({ value, onChange, onSubmit, disabled }) {
  const [showPassword, setShowPassword] = useState(false)

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled && value.trim()) {
      onSubmit()
    }
  }

  return (
    <div className={styles.inputWrapper}>
      <span className={styles.lockIcon}>🔒</span>
      <input
        type={showPassword ? 'text' : 'password'}
        className={styles.input}
        placeholder="Type your password here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        aria-label="Enter your password to test"
        id="password-input"
      />
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        tabIndex={-1}
      >
        <span className={styles.eyeIcon}>{showPassword ? '👁️' : '👁️'}</span>
        <span className={styles.toggleText}>{showPassword ? 'HIDE' : 'SHOW'}</span>
      </button>
    </div>
  )
}
