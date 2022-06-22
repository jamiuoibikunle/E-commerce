import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'
import '../styles/nav.css'

const Navigation = ({cart}) => {

  const [totalItems, setTotalItems] = useState(null)

  useEffect(() => {
    cart && setTotalItems(cart.total_items)
  }, [cart])

  return (
    <main className={styles.navcontainer}>
      <NavLink to='/' className={styles.home} activeclassname='active'>
      </NavLink>
      <NavLink to='/shopping' className={styles.shopping}>
      </NavLink>
      <NavLink to='/cart' className={styles.cart}>
      </NavLink>
      <NavLink to='/orders' className={styles.profile}>
      </NavLink>
        { totalItems !== 0 &&
        <Link className={styles.cartNo} to='/cart'>
        {cart && totalItems}
      </Link>
        }
    </main>
  )
}

export default Navigation