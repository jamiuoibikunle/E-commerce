import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div>
      <header className={styles.topImage}>
        <span className={styles.check}>
          Our pick for the month
        </span>
      </header>
    </div>
  )
}

export default Header