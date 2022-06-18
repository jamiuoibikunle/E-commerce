import React, { useEffect, useState } from 'react'
import { commerce } from '../commerce/commerce'
import styles from '../styles/Cart.module.css'
import { Link } from 'react-router-dom'
import { DeleteOutlineRounded, AddOutlined, RemoveOutlined } from '@material-ui/icons'

function Cart({cartItems}) {
	
if (cartItems.length !== 0) {
		
	return (
		
		<div className={styles.container}>
			{cartItems.map((cartItem) => {	
				return (
					<main key={cartItem.id}>
						<section className={styles.wrapper}>
							<img src={cartItem.image.url} className={styles.cartImage} />
							<aside className={styles.cartName}>
								{cartItem.product_name}
							<br />
								{cartItem.price.formatted_with_symbol} x {cartItem.quantity}
							<p className={styles.total}>
								{cartItem.line_total.formatted_with_symbol}
							</p>
							</aside>
							<aside className={styles.right}>
								<p className={styles.remove} onClick={() => {
									commerce.cart.remove(cartItem.id);
								}}>
									<DeleteOutlineRounded className={styles.deletebtn} />
									REMOVE
								</p>
								<div className={styles.updateQuantity}>
									<span className={styles.updateQuantityMinus} onClick={() => commerce.cart.update(cartItem.id, { quantity: cartItem.quantity - 1 }).then(response => console.log(response))}>
										<RemoveOutlined />
									</span>
									<span className={styles.updateQuantityNum}>
										{cartItem.quantity}
									</span>
									<span className={styles.updateQuantityAdd} onClick={() => commerce.cart.update(cartItem.id, { quantity: cartItem.quantity + 1 }).then(response => console.log(response))}>
										<AddOutlined />
									</span>
								</div>
							</aside>
						</section>
					</main>
					)})}

					<Link to='/checkout' className={styles.proceed}>
						Proceed to checkout
					</Link>
		</div>

	)}
	
	else {

		return (
	
			<main className={styles.emptycart}>
				<main className={styles.emptycartmain}>
					You haven't added anything to cart.
				</main>
			</main>
		
		)}
}

export default Cart