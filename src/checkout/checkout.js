import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Checkout.module.css'
import Confirmation from './Confirmation'
import Payment from './Payment'

const Checkout = () => {

  const [activeItem, setActiveItem] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const nextItem = () => {
    setActiveItem(activeItem + 1)
  }

  const prevItem = () => {
    setActiveItem(activeItem - 1)
  }

  return (
    <div>
      <header className={styles.header}>
        Checkout
      </header>
      <nav className={styles.nav}>
        <p className={styles.navitem}>
          <span className={styles.first}>
            1
          </span>
          <span>
            Personal Info
          </span>
        </p>
        <p className={styles.line} />
        <p className={styles.navitem}>
        <span>
          Payment Details
        </span>
        <span className={styles.second}>
            2
        </span>
        </p>
      </nav>
      <main>
        {activeItem === 2 ? <Confirmation prevItem={prevItem} firstName={firstName} lastName={lastName} address={address} email={email} phone={phone} /> :
      <div>
        {activeItem === 0
        ?
      <div className={styles.personal}>
      <header className={styles.personalheader}>
        Personal Information
      </header>

      <main className={styles.form}>
        <form>
        <label>
        <p className={styles.label}>
          First Name:
        </p>
        <input
        placeholder='First name'
        className={styles.input}
        onChange={(e) => setFirstName(e.target.value)}
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
        />
        </label>
      </form>
      </main>
      <section className={styles.checkoutnav}>
        <Link to='/cart' className={styles.linktocart}>
          BACK TO CART
        </Link>
        <button className={styles.nextbtn} onClick={() => setActiveItem(1)} >
          NEXT
        </button>
      </section>
      </div> : <Payment onClick={prevItem} activeItem={activeItem} makePayment={nextItem} />}

          </div>}
      </main>
    </div>
  )
}

export default Checkout