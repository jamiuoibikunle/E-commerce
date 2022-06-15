import React from 'react'
import styles from '../styles/Checkout.module.css'
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = ({prevItem, makePayment, set2, checkoutToken}) => {

  const handlePay = () => {
    makePayment();
    set2()
  }

  return (
    <div className={styles.paymentContainer}>
      <header className={styles.paymentHeader}>
        Payment Details
      </header>

    <section className={styles.summary}>

      {checkoutToken.live.line_items.map((product) => (
        <main key={product.name} className={styles.individual}>
          <div className={styles.name}>
            {product.name}
          </div>
          <div className={styles.quantity}>
            Quantity:
              <span className={styles.quantityNum}>
                {' ' + product.quantity}
              </span>
          </div>
        </main>
      ))}

      <aside className={styles.priceSummary}>
        <div className={styles.total}>
          Total:
        </div>
        <div className={styles.totalFigure}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </div>
      </aside>

    </section>

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
        <button className={styles.linktocart} onClick={prevItem} >
          BACK
        </button>
        <button className={styles.nextbtn} onClick={handlePay}>
          PAY {checkoutToken.live.subtotal.formatted_with_symbol}
        </button>
      </section>

    </div>
  )
}

export default Payment