import React from 'react'
import styles from '../styles/Checkout.module.css'
import PaystackPop from '@paystack/inline-js'

const Payment = ({prevItem, nextItem, set2, address, checkoutToken, firstName, lastName, email, handleCaptureCheckout, shippingCountry, shippingOption, shippingSubdivision }) => {
	
	const handlePay = (e) => {
		e.preventDefault();
		let totalAmount = checkoutToken.live.total.formatted;
		const formattedAmount = totalAmount.replaceAll(',', '')
		const newPaystack = new PaystackPop()

		// Paystack logic
		newPaystack.newTransaction({
			key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
			amount: formattedAmount * 100,
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
						postal_zip_code: 'Unspecified',
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
				set2();
			}
		})
	}

	console.log(checkoutToken);

	return (
	
		<div className={styles.paymentContainer}>
			<header className={styles.paymentHeader}>
				Payment Details
			</header>
			<section className={styles.summary}>
				{checkoutToken.live.line_items.map((product) => (
					<main key={product.name} className={styles.individual}>
						<aside>

						<div className={styles.name}>
							{product.name}
						</div>
						<div className={styles.quantity}>
							Quantity:
								<span className={styles.quantityNum}>
									{' ' + product.quantity}
								</span>
						</div>
						</aside>
						<div>
							{product.line_total.formatted_with_symbol}
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