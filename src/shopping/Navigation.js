import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import '../styles/nav.css'

const Navigation = ({cart}) => {

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
      <span className={styles.cartNo}>
        {cart && cart.total_items}
      </span>
    </main>
  )
}

export default Navigation