import React from 'react'
import styles from '../styles/Homepage.module.css'

const Homepage = () => {

	return (
		
		<main className={styles.homewrapper}>
			<figcaption className={styles.homefigcap}>
				<main className={styles.homefigcaphead}>
					ONLINE STORE FOR MOBILE GADGETS!
				</main>
				<aside className={styles.homefigcapbody}>
					Awesome
				</aside>
			</figcaption>
			<h1 className={styles.homeh1}>
				Why Buy From Us?
			</h1>
			<section className={styles.whyus}>
				<header className={styles.whyusheader}>
					<div className={styles.whyusitem}>
						Reliability
					</div>
				</header>
				<main className={styles.text}>
					We are all about reliability, we want you to be able to trust our products, trust that they will last and withstand all kind of environments. That is why we take great pride in our development and testing of each and every product in our product collection.
				</main>
				<header className={styles.whyusheader}>
					<div className={styles.whyusitem}>
						Quality
					</div>
				</header>
				<main className={styles.text}>
					We are a fast growing startup company because we always put the customer first. This is why we are fully committed to providing our customers with the very best quality products. We believe in going the extra mile to ensure that each customer is satisfied with our software testing and project management solutions.
				</main>
			</section>
		</main>
		
	)
}

export default Homepage