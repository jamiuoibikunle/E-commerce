import React from 'react'
import styles from '../styles/Checkout.module.css'
import PaystackPop from '@paystack/inline-js'

const Payment = ({prevItem, nextItem, address, checkoutToken, firstName, lastName, email, handleCaptureCheckout, shippingCountry, shippingOption, shippingSubdivision }) => {

  const handlePay = (e) => {
    e.preventDefault();

    const newPaystack = new PaystackPop()

    newPaystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      amount: 500,
      email: email,
      onSuccess(transaction) {

        const orderData = {

          line_items: checkoutToken.live.line_items,
          customer: {
            firstname: firstName, lastname: lastName, email: email
          },
          shipping: {
            name: 'Primary',
            street: address,
            town_city: 'Unspecified',
            county_state: shippingSubdivision,
            postal_zip_code: '201102',
            country: shippingCountry
          },
          fulfillment: {
            shipping_method: shippingOption
          },
          payment: {
            gateway: 'test_gateway',
            card: {
              number: '4242424242424242',
              expiry_month: '02',
              expiry_year: '24',
              cvc: '123',
              postal_zip_code: '94107'}
            }
        }

        handleCaptureCheckout(checkoutToken.id, orderData);

        nextItem();
      }
    })
    
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