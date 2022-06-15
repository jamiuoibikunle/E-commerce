import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import '../styles/nav.css'

const Navigation = () => {

  return (
    <main className={styles.navcontainer}>
      <NavLink to='/' className={styles.home} activeclassname='active'>
      </NavLink>
      <NavLink to='/shopping' className={styles.shopping}>
      </NavLink>
      <NavLink to='/cart' className={styles.cart}>
      </NavLink>
      <NavLink to='/profile' className={styles.profile}>
      </NavLink>
    </main>
  )
}

export default Navigation