import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import mockup from '../resources/mockup.png'
import { Forward } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styles from '../styles/Homepage.module.css'

const Header = () => {
  
  Aos.init()
  
  return (
    <div>
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

    </div>
  )
}

export default Header