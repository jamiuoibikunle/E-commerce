import React from 'react'
import styles from '../styles/Profile.module.css'

import { CircularProgress } from '@material-ui/core'

const ListOrders = ({customerOrders, handleLogout}) => {
  
  return (

    <>

    {customerOrders ?

    <section className={styles.loggedIn}>
    
    {customerOrders.map((customerOrder) => {

      const purchase = new Date(customerOrder.created * 1000)
      
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const days = [
        '1st',
        '2nd',
        '3rd',
        '4th',
        '5th',
        '6th',
        '7th',
        '8th',
        '9th',
        '10th',
        '11th',
        '12th',
        '13th',
        '14th',
        '15th',
        '16th',
        '17th',
        '18th',
        '19th',
        '20th',
        '21st',
        '22nd',
        '23rd',
        '24th',
        '25t',
        '26th',
        '27th',
        '28th',
        '29th',
        '30th',
        '31st'
      ]

      return (
      <>
      <div className={styles.individualOrder}>
        <p className={styles.delivery}>
        {customerOrder.status_fulfillment === 'not_fulfilled' ? 'AWAITING DELIVERY' : 'SENT FOR DELIVERY'}
        </p>
        {customerOrder.order.line_items.map((eachOrder) => (
          <p className={styles.eachOrder}>
            {eachOrder.product_name} x {eachOrder.quantity}
          </p>
        ))}
        <p className={styles.id}>
          {`${days[purchase.getDate()]} of ${months[purchase.getMonth()]}, ${purchase.getFullYear()}`}
        </p>
        <p className={styles.customer}>
        {customerOrder.customer.lastname} {customerOrder.customer.firstname}
        </p>
        <p className={styles.address}>
          {customerOrder.shipping.street}
        </p>
      </div>

      </>
      
    )})
    }
      <div className={styles.logout}>
      <button onClick={handleLogout} className={styles.logoutbtn}>
          Log Out
      </button>
      </div>
     
  
  </section>

  : 

  <CircularProgress /> }

  </>
  )
}

export default ListOrders