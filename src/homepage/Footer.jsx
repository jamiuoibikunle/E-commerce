import React from 'react'
import styles from '../styles/Footer.module.css'
import { EmailRounded } from '@material-ui/icons'
import Address from './Address'
import Technologies from './Technologies'

const Footer = () => {
  return (
    <main className={styles.footerwrapper}>

    <div className={styles.newsletterwrapper}>
      <section className={styles.footer}>
        <div className={styles.emailrounded}>
          <EmailRounded fontSize='large' className={styles.emailrounded} />
        </div>
        <div className={styles.fallbehind}>
          <p>
            DON'T MISS OUT!
          </p>
        </div>
        <div className={styles.subscribe}>
          Subscribe to our newsletter to receive updates about the latest deals and new shipments.
        </div>
        <form className={styles.form} action='https://app.us12.list-manage.com/subscribe/post?u=6c6c915030cfe6e2abe8355a9&amp;id=471b49ab46' 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form"
        target='_blank'
        >
          <input placeholder='Enter your email' className={styles.email} id="mce-EMAIL" name="EMAIL" />
          <button className={styles.btn}>
            Subscribe to our Newsletter
          </button>
        </form>
      </section>
    </div>
    <Technologies />
    {/* <Address /> */}
    </main>
  )
}

export default Footer