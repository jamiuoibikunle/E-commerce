import React from 'react'
import styles from '../styles/Address.module.css'
import { CallRounded, MailRounded, LocationOnRounded, TimerRounded, Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons'

const Address = () => {
  return (
    <main className={styles.container}>
      <div className={styles.developed}>
        <div className={styles.item}>
          <CallRounded />
          <dl className={styles.dl}>
            <dt>
              Give Us A Call
            </dt>
            <dd className={styles.dd}>
              07088115563
            </dd>
          </dl>
        </div>
        <div className={styles.item}>
          <MailRounded />
          <dl className={styles.dl}>
            <dt>
              Send Us A Message
            </dt>
            <dd className={styles.dd}>
              jamiuoibikunle@gmail.com
            </dd>
          </dl>
        </div>
        <div className={styles.item}>
          <LocationOnRounded />
          <dl className={styles.dl}>
            <dt>
              Office Address
            </dt>
            <dd className={styles.dd}>
              University of Ibadan
            </dd>
          </dl>
        </div>
      </div>
      <section className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.reachme}>
          <p className={styles.h2}>
            Reach Me
          </p>
          <p className={styles.p}>
            Want to build a web application for your business? I am only a click away.
          </p>
          <p className={styles.socials}>
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </p>
        </div>
        <div className={styles.quicklinks}>
          <p className={styles.link}>
            Quick links
          </p>
          <p className={styles.portfolio}>
            Portfolio Website
          </p>
          <p className={styles.resume}>
            Resume
          </p>
          <p className={styles.contact}>
            Contact
          </p>
        </div>
        <div className={styles.workhours}>
          <p className={styles.work}>
            Work Hours
          </p>
          <p className={styles.time}>
            <TimerRounded />
            8AM - 5PM, Monday - Friday
          </p>
          <p className={styles.callus}>
            CALL US TODAY
          </p>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Address