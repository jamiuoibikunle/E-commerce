import React from 'react'
import styles from '../styles/Confirmation.module.css'

const Confirmation = ({firstName, lastName, email, address, phone, prevItem}) => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.billingDetails}>

      <p>
        Name: {firstName} {lastName}
      </p>
      <p>
        Shipping Address: {address}
      </p>
      <p>
        Contact: {email}, {phone}
      </p>
      </section>

      <section className={styles.footer}>
        <button onClick={prevItem} className={styles.back}>
          BACK
        </button>
      </section>
    </main>
  )
}

export default Confirmation