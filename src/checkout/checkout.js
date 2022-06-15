import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Checkout.module.css'
import Confirmation from './Confirmation'
import Payment from './Payment'
import check from '../resources/check.svg'

import { commerce } from '../commerce/commerce'


const Checkout = ({cart}) => {

  const [checkoutToken, setCheckoutToken] = useState(null)

  useEffect(() => {
    const generateToken = async () => {
      try {

        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

        console.log(token)

        setCheckoutToken(token)

      } catch (error) {

      }
    }

    generateToken()
  }, [cart])

  // State to keep track of step
  const [activeItem, setActiveItem] = useState(0)

  // State to collect data
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  
  // Empty state for error message
  const [emptyField, setEmptyField] = useState('')
  
  // State to change stepper
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  // Handle stepper
  const nextItem = () => {
    setActiveItem(activeItem + 1)
  }
  
    const set2 = () => {
      setNum2(<img src={check} alt='Check' />)
    }

  const prevItem = () => {
    setActiveItem(activeItem - 1)

    if (activeItem === 0) {
      setNum1('')
    } else {
      setNum2('')
    }
  }

  // Handle Form Submit and data
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Condition to only work when all field is entered 
    if (firstName && lastName && email && phone && address) {
      
      nextItem()
      setEmptyField('')
      setNum1(<img src={check} alt='Check' />)

    }

    // Condition for when any of the field is empty
    if (!firstName) setEmptyField('Please ensure that none of the fields below is empty.')
  }

  return (
    <div>
      <header className={styles.header}>
        Checkout
      </header>
      <nav className={styles.nav}>
        <p className={styles.navitem}>
          <span className={styles.first}>
            <span className={styles.check}>
              
              {num1}
            
            </span>
          </span>
          <span>
            Personal Info
          </span>
        </p>

        {/* Tag for line between 1 and 2 */}
        <p className={styles.line} />

        <p className={styles.navitem}>
        <span>
          Payment Details
        </span>
        <span className={styles.second}>
            <span className={styles.check}>
              
              {num2}

            </span>
        </span>
        </p>
      </nav>
      <main>
        {activeItem === 2 ? <Confirmation prevItem={prevItem} firstName={firstName} lastName={lastName} address={address} email={email} phone={phone} /> :
        checkoutToken && <div>
        {activeItem === 0
        ?
      <div className={styles.personal}>
      <header className={styles.personalheader}>
        Personal Information
      </header>

      <form onSubmit={handleSubmit}>
        
      <main className={styles.form}>
        <div className={styles.emptyField}>

          {emptyField}
        
        </div>
        <label>
        <p className={styles.label}>
          First Name:
        </p>
        <input
        placeholder='First name'
        className={styles.input}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        />
        </label>
        <label>
        <p className={styles.label}>
          Last Name:
        </p>
        <input
        placeholder='Last name'
        className={styles.input}
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        />
        </label>
        <label>
        <p className={styles.label}>
          Residential Address:
        </p>
        <input
        placeholder='Residential Address'
        className={styles.input}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        />
        </label>
        <label>
        <p className={styles.label}>
          Email Address:
        </p>
        <input
        placeholder='Email Address'
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        </label>
        <label>
        <p className={styles.label}>
          Phone:
        </p>
        <input
        placeholder='Phone number'
        className={styles.input}
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        />
        </label>
      </main>
      <section className={styles.checkoutnav}>
        <Link to='/cart' className={styles.linktocart}>
          BACK TO CART
        </Link>
        <button className={styles.nextbtn} type='submit'>
          NEXT
        </button>
      </section>
      </form>
      </div> : <Payment checkoutToken={checkoutToken} prevItem={prevItem} set2={set2} num2={num2} activeItem={activeItem} makePayment={nextItem} />}

          </div>}
      </main>
    </div>
  )
}

export default Checkout