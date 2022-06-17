import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Confirmation.module.css'

import transactioncomplete from '../resources/transactioncomplete.svg'

const Confirmation = ({order, amountPaid}) => {

  console.log(order);

  return (
    <main className={styles.wrapper}>
      <section className={styles.billingDetails}>

        <header className={styles.header}>
          
          <img src={transactioncomplete} alt='Check' className={styles.transactioncomplete} />  
          Transaction successful
        
        </header>

      <section className={styles.individual}>
        <span>
          Amount
        </span>
        <span>
          {amountPaid}
        </span>
      </section>
      <section className={styles.individual}>
        <span>
          Order ID
        </span>
        <span>
          {order.customer_reference}
        </span>
      </section>
      <section className={styles.individual}>
        <span>
          Customer name
        </span>
        <span>
          {order.customer.firstname} {order.customer.lastname}
        </span>
      </section>
      </section>

      <section className={styles.footer}>
        <Link to='/shopping' className={styles.back}>
          BACK TO SHOPPING
        </Link>
      </section>
    </main>
  )
}

export default Confirmation