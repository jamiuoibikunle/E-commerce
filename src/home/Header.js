import React from 'react'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <div>
      <header className={styles.topImage}>
        <span className={styles.bestdeals}>
          Best deals
        </span>
        <span className={styles.check}>
          Check
        </span>
      </header>
    </div>
  )
}

export default Header