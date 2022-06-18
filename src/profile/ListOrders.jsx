import React from 'react'
import styles from '../styles/Profile.module.css'
import { CircularProgress } from '@material-ui/core'

const ListOrders = ({customerOrders, handleLogout}) => {
	
	return (

		<>
		{customerOrders ?
		<>
			<section className={styles.loggedIn}>
				<main className={styles.orders}>
				<header className={styles.heading}>
					<span className={styles.item}>
						ORDER
					</span>
					<span className={styles.item}>
						DATE/TIME
					</span>
					<span className={styles.item}>
						STATUS
					</span>
					<span className={styles.item}>
						AMOUNT
					</span>
				</header>
				<main className={styles.listorders}>
				{customerOrders.map((customerOrder) => {
					const purchase = new Date(customerOrder.created * 1000)
					const time = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']

			return (

				<>
					<div className={styles.individualOrder}>
						<p className={styles.orderdetail}>
							{customerOrder.customer_reference}
						</p>
						<p className={styles.orderdetail}>
							{`${purchase.getDate()}/${purchase.getMonth()}/${purchase.getFullYear()} @ ${purchase.getHours() % 12}:`}{time[purchase.getMinutes()] || purchase.getMinutes()} {purchase.getHours() > 12 ? 'PM' : 'AM'}
						</p>
						<p className={styles.orderdetail}>
							{customerOrder.is.fulfilled ? 'Delivered' : 'Not delivered'}
						</p>
						<p className={styles.orderdetail}>
							{customerOrder.order.total.formatted_with_code}
						</p>
					</div>
				</>
		)})}
		</main>
			</main>
	</section>
			<div className={styles.logout}>
			<button onClick={handleLogout} className={styles.logoutbtn}>
				Log Out
			</button>
			</div>
	</>
		:
	<CircularProgress /> }
	</>
	
	)
}

export default ListOrders