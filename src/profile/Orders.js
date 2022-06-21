import React, { useEffect, useState } from 'react'
import styles from '../styles/Profile.module.css'
import { commerce } from '../commerce/commerce'
import ListOrders from './ListOrders'
import jwt_decode from "jwt-decode";

const Orders = () => {

  const [ email, setEmail ] = useState()
  const [ customerOrders, setCustomerOrders ] = useState([])
  const [ message, setMessage ] = useState('Kindly log in to track your orders')
  const [ emptyEmail, setEmptyEmail ] = useState('')
  
  const handleLogin = (e) => {

    if (email) {

    e.preventDefault()
    
    commerce.customer.login(email, 'https://mi-shopping.netlify.app//#/login').then((token) => console.log(token));

    setMessage('Kindly check your email address for your one-time login token')

    setEmptyEmail('')

    } else {

      e.preventDefault()

      setEmptyEmail('You have not entered an email address')

      setMessage('')

    }
  
  }

  const customerID = localStorage.getItem('commercejs_customer_id')
  const customerToken = localStorage.getItem('commercejs_customer_token')

  useEffect(() => {

    if (customerID) {

    commerce.customer.getOrders(customerID).then((orders) => {
      setCustomerOrders(orders.data)

    })
  }
 
  }, [customerID])

  useEffect(() => {
    if (customerToken) {
      let decodedToken = jwt_decode(customerToken)
      console.log(decodedToken);
      const time = new Date(decodedToken.exp * 1000)
      const currTime = new Date
      console.log(currTime > time)

      currTime > time && localStorage.clear()
    }
  }, [customerToken])

  const handleLogout = () => {
    commerce.customer.logout()
  }


  return (
    // <body className={styles.profile}>
    //   This feature is currently under development. We are working on making it available as soon as possible to bring you the best experience.
    // </body>

    <main>
    {customerID ? 
    
    <ListOrders customerOrders={customerOrders} handleLogout={handleLogout} />
 :

      <form className={styles.loginform} onSubmit={handleLogin}>

        <div className={styles.checkyourmail}>
            {message}
        <div className={styles.emailempty}>
            {emptyEmail}
        </div>
        </div>
        <label className={styles.emaillabel}>

          <input
          
          placeholder='Email address'
          value={email}
          className={styles.emailinput}
          onChange={(e) => setEmail(e.target.value)}

          />

        </label>
      <button type='submit' className={styles.loginbtn}>
        Log in
      </button>
      </form>
    }
    </main>

  )
}

export default Orders