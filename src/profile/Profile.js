import React, { useEffect, useState } from 'react'
import styles from '../styles/Profile.module.css'
import { commerce } from '../commerce/commerce'
import { CircularProgress } from '@material-ui/core'

const Profile = () => {

  const [ emailaddress, setEmailaddress ] = useState()
  const [ customerOrders, setCustomerOrders ] = useState([])
  const [ customerDetails, setCustomerDetails ] = useState({})
  const [ message, setMessage ] = useState('')
  const [ emptyEmail, setEmptyEmail ] = useState('')
  
  const handleLogin = (e) => {

    if (emailaddress) {

    e.preventDefault()
    
    commerce.customer.login(emailaddress, 'https://mi-shopping.netlify.com/#/login').then((token) => console.log(token));

    setMessage('Kindly check your email address for your one-time login token')

    setEmptyEmail('')

    } else {

      e.preventDefault()

      setEmptyEmail('You have not entered an email address')

      setMessage('')

    }
  
  }

  const customerID = localStorage.getItem('commercejs_customer_id')

  useEffect(() => {

    if (customerID) {

    commerce.customer.getOrders(customerID).then((orders) => {
      setCustomerOrders(orders.data)
      console.log(orders.data)

      commerce.customer.about().then((customer) => {
        setCustomerDetails(customer)
        console.log(customer)
      })

    })
  }
 
  }, [customerID])

  console.log(customerOrders)

  const handleLogout = () => {
    commerce.customer.logout()
  }


  return (
    // <body className={styles.profile}>
    //   This feature is currently under development. We are working on making it available as soon as possible to bring you the best experience.
    // </body>

    <main>
    {customerID ? 
    
    <section className={styles.loggedIn}>

      {!customerOrders && <div className={styles.noorder}>You currently do not have any order to track.</div>}
    
      {customerOrders.map((customerOrder) => (
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
            {customerOrder.id}
          </p>
          <p className={styles.customer}>
          {customerDetails.lastname} {customerDetails.firstname}
          </p>
          <p className={styles.address}>
            {customerOrder.shipping.street}
          </p>
        </div>
      ))}

      <div className={styles.logout}>

      {customerOrders ? <button onClick={handleLogout} className={styles.logoutbtn}>
            Log Out
      </button> :

      <CircularProgress /> }

      </div>
    
    </section> :

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
          value={emailaddress}
          className={styles.emailinput}
          onChange={(e) => setEmailaddress(e.target.value)}

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

export default Profile