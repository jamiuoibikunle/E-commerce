import React from 'react'
import styles from '../styles/Homepage.module.css'
import Footer from './Footer'
import Header from './Header'
import Middle from './Middle'

const Homepage = () => {

	return (
	
	<main className={styles.homecontainer}>
			<Header />
			<Middle />
			<Footer />
		</main>		
	)
}

export default Homepage