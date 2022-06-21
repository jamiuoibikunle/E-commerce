import React, { useRef, useState } from 'react'
import styles from '../styles/Technologies.module.css'

import reactimage from '../resources/reactjs.png'
import mui from '../resources/mui.png'
import commercejs from '../resources/commercejs.jpg'
import paystack from '../resources/paystack.png'

const Technologies = () => {

  const mRef = useRef()
  const [ currItem, setCurrItem ] = useState(0)

  const forward = () => {
    if (currItem === 75) {
      setCurrItem(0)
      mRef.current.style.marginLeft = '0'
    }
    else if (currItem === 0 || currItem === 25 || currItem === 50) {
      setCurrItem(currItem + 25)
      const value = currItem + 25
      mRef.current.style.marginLeft = `-${value}rem`
    }
  }

  const backward = () => {
    if (currItem === 0) {
      setCurrItem(75)
      mRef.current.style.marginLeft = '-75rem'
    } else if (currItem === 75 || currItem === 25 || currItem === 50) {
     setCurrItem(currItem - 25)
     const value = currItem - 25
     mRef.current.style.marginLeft = `-${value}rem`
    }
  }

  setTimeout(() => {
    forward()
  }, 5000)

  return (
    <div className={styles.header}>
      <div className={styles.technologiesheader}>
        TECHNOLOGIES USED
      </div>
      <div className={styles.items}>
        <div className={styles.movable} ref={mRef}>
        <div className={styles.item}>
          <img src={reactimage} className={styles.images} />
        </div>
        <div className={styles.item}>
          <img src={mui} className={styles.images} />
        </div>
        <div className={styles.item}>
          <img src={commercejs} className={styles.images} />
        </div>
        <div className={styles.item}>
          <img src={paystack} className={styles.images} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies