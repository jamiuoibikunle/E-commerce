import React from 'react'
import styles from '../styles/Checkout.module.css'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = ({onClick, makePayment}) => {
  return (
    <div>
      <header className={styles.paymentHeader}>
        Payment Details
      </header>
      {/* <main className={styles.form}>
        <label for='cardnumber'>
        <p className={styles.label}>
          Card Number:
        </p>
        <input placeholder='Card Number' className={styles.input} />
        </label>
        <label for='CVV'>
        <p className={styles.label}>
          CVV:
        </p>
        <input placeholder='CVV' className={styles.input} />
        </label>
        <label for='Expiry Date'>
        <p className={styles.label}>
          Expiry Date:
        </p>
        <input placeholder='Expiry Date' className={styles.input} />
        </label>
      </main> */}
      <div className={styles.stripeWrapper}>


      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form>
                <CardElement />
              </form>
          )}
        </ElementsConsumer>
      </Elements>
      
      </div>
      <section className={styles.checkoutnav}>
        <button className={styles.linktocart} onClick={onClick} >
          BACK
        </button>
        <button className={styles.nextbtn} onClick={makePayment}>
          PAY
        </button>
      </section>

    </div>
  )
}

export default Payment