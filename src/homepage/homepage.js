import React from 'react'
import styles from '../styles/Homepage.module.css'
import handshake from '../resources/handshake.png'
import delivery from '../resources/delivery.png'
import customerservice from '../resources/customerservice.png'
import mockup from '../resources/mockup.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Forward } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const Homepage = () => {

	AOS.init()

	return (
		<main className={styles.homecontainer}>
			<section className={styles.mockupheader}>
				<aside className={styles.welcome} data-aos='fade-right'>
					<p className={styles.welcomebig}>
						No. 1 Online Marketplace for Mobile Gadgets.
					</p>
					<p className={styles.welcomesmall}>
						Buy from the comfort of your phone and enjoy the best deals.
					</p>
				<Link to='/shopping' className={styles.goshopping}>
					<Forward fontSize='small' /> GO SHOPPING
				</Link>
				</aside>
				<aside className={styles.mockup1wrapper}>
					<img src={mockup} alt='Mockup' className={styles.mockup1} data-aos='fade-left' data-aos-delay='300' />
				</aside>
			</section>
			<section className={styles.whyus}>
					<p className={styles.question} data-aos='fade-up'>
						Why Buy From Us?
					</p>
			<section className={styles.reliability}>
				<img src={handshake} alt='mockup2' className={styles.mockup2} data-aos='fade-right' />
				<aside className={styles.whyusanswers} data-aos='fade-up' data-aos-delay='300'>
					<p className={styles.answer}>
						We are all about reliability, we want you to be able to trust our products, trust that they will last and withstand all kind of environments.
					</p>
				</aside>
			</section>
			<section className={styles.delivery}>
				<aside className={styles.whyusanswers} data-aos='fade-up' data-aos-delay='300'>
					<p className={styles.answer}>
						We deliver nationwide across Nigeria every day of the week. It is our obligation to ensure our customers do not wait longer than need be.
					</p>
				</aside>
				<img src={delivery} alt='mockup2' className={styles.mockup2} data-aos='fade-left' />
			</section>
			<section className={styles.customerservice}>
				<img src={customerservice} alt='mockup2' className={styles.mockup2} data-aos='fade-right' />
				<aside className={styles.whyusanswers} data-aos='fade-up' data-aos-delay='300' >
					<p className={styles.answer}>
					We know customer service is instrumental to the success of a business. That is why we take great pride in our stellar customer service.
					</p>
				</aside>
			</section>
			</section>
		</main>		
	)
}

export default Homepage