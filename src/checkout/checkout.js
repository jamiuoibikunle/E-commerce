import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Checkout.module.css'
import Confirmation from './Confirmation'
import Payment from './Payment'
import check from '../resources/check.svg'

import { commerce } from '../commerce/commerce'


const Checkout = ({cart, handleCaptureCheckout, order}) => {

  const [checkoutToken, setCheckoutToken] = useState(null)
  const [amountPaid, setAmountPaid] = useState('')
  
  console.log(checkoutToken)

  const navigate = useNavigate()

  useEffect(() => {

    const generateToken = async () => {
    
      try {

        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
      
        setCheckoutToken(token)

      } catch (error) {
        console.log(error)
      }
    }

    generateToken()
  }, [cart])


  // State to keep track of step
  const [activeItem, setActiveItem] = useState(0)

  // State to collect data
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // State for the select fields
  const [shippingCountries, setShippingCountries] = useState([])
  const [shippingCountry, setShippingCountry] = useState('')
  const [shippingSubdivisions, setShippingSubdivisions] = useState([])
  const [shippingSubdivision, setShippingSubdivision] = useState('')
  const [shippingOptions, setShippingOptions] = useState([])
  const [shippingOption, setShippingOption] = useState('')
  
  // Empty state for error message
  const [emptyField, setEmptyField] = useState('')
  
  // State to change stepper
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  // Fetch all available countries
  const fetchCountries = async (checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
    console.log(countries);

    setShippingCountries(countries)
    setShippingCountry(Object.keys(countries)[0])
  }

  // Fetch subdivisions
  const fetchSubdivisions = async (countryCode) => {
    const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)

    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])
  }

  // Fetch shipping options
  const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {

    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region })

    setShippingOptions(options)
    setShippingOption(options[0].id)

  }

  useEffect(() => {
    if (checkoutToken) setAmountPaid(checkoutToken.live.total.formatted_with_symbol)
  }, [checkoutToken])

  useEffect(() => {

    fetchCountries(checkoutToken)

  }, [])

  useEffect(() => {

    if (shippingCountry) fetchSubdivisions(shippingCountry)

  }, [shippingCountry])

  useEffect(() => {

    if (shippingSubdivision) fetchShippingOptions(checkoutToken, shippingCountry, shippingSubdivision)

  }, [shippingSubdivision])

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
  const options = shippingOptions.map((SO) => ({
    id: SO.id,
    label: `${SO.description} - (${SO.price.formatted_with_symbol})`
  }))

  // Handle stepper
  const nextItem = () => {
    setActiveItem(activeItem + 1)
  }
  
    const set2 = () => {
      setNum2(<img src={check} alt='Check' />)
    }

  const prevItem = () => {
    setActiveItem(activeItem - 1)

    if (activeItem === 0) {
      setNum1('')
    } else {
      setNum2('')
    }
  }

  // Handle Form Submit and data
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Condition to only work when all field is entered 
    if (firstName && lastName && email && phone && address) {
      
      nextItem()
      setEmptyField('')
      setNum1(<img src={check} alt='Check' />)

    }

    // Condition for when any of the field is empty
    if (!firstName) setEmptyField('Please ensure that none of the fields below is empty.')
  }

  return (
    <div>
      <header className={styles.header}>
        Checkout
      </header>
      <nav className={styles.nav}>
        <p className={styles.navitem}>
          <span className={styles.first}>
            <span className={styles.check}>
              
              {num1}
            
            </span>
          </span>
          <span>
            Personal Info
          </span>
        </p>

        {/* Tag for line between 1 and 2 */}
        <p className={styles.line} />

        <p className={styles.navitem}>
        <span>
          Payment Details
        </span>
        <span className={styles.second}>
            <span className={styles.check}>
              
              {num2}

            </span>
        </span>
        </p>
      </nav>
      <main>
        {activeItem === 2 ? <Confirmation 
        prevItem={prevItem} 
        firstName={firstName} 
        lastName={lastName} 
        address={address} 
        email={email} 
        phone={phone} 
        order={order}
        amountPaid={amountPaid}

        /> :
        checkoutToken && <div>
        {activeItem === 0
        ?
      <div className={styles.personal}>
      <header className={styles.personalheader}>
        Personal Information
      </header>

      <form onSubmit={handleSubmit}>
        
      <main className={styles.form}>
        <div className={styles.emptyField}>

          {emptyField}
        
        </div>
        <label>
        <p className={styles.label}>
          First Name:
        </p>
        <input
        placeholder='First name'
        className={styles.input}
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        />
        </label>
        <label>
        <p className={styles.label}>
          Last Name:
        </p>
        <input
        placeholder='Last name'
        className={styles.input}
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        />
        </label>
        <label>
        <p className={styles.label}>
          Residential Address:
        </p>
        <input
        placeholder='Residential Address'
        className={styles.input}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        />
        </label>
        <label>
        <p className={styles.label}>
          Email Address:
        </p>
        <input
        placeholder='Email Address'
        className={styles.input}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        </label>
        <label>
        <p className={styles.label}>
          Phone:
        </p>
        <input
        placeholder='Phone number'
        className={styles.input}
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        />
        </label>
        <label>
        <p className={styles.label}>
          Shipping Country:
        </p>
        <select
        className={styles.input}
        onChange={(e) => setShippingCountry(e.target.value)}
        value={shippingCountry}
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.label}
            </option>
          ))}
        </select>
        </label>
        <label>
        <p className={styles.label}>
          Shipping Subdivision:
        </p>
        <select
        className={styles.input}
        onChange={(e) => setShippingSubdivision(e.target.value)}
        value={shippingSubdivision}
        >
          {subdivisions.map((subdivision) => (
            <option key={subdivision.id} value={subdivision.id}>
              {subdivision.label}
            </option>
          ))}
        </select>
        </label>
        <label>
        <p className={styles.label}>
          Shipping Options:
        </p>
        <select
        className={styles.input}
        onChange={(e) => setShippingOption(e.target.value)}
        value={shippingOption}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        </label>
      </main>
      <section className={styles.checkoutnav}>
        <Link to='/cart' className={styles.linktocart}>
          BACK TO CART
        </Link>
        <button className={styles.nextbtn} type='submit'>
          NEXT
        </button>
      </section>
      </form>
      </div> : <Payment
      
      checkoutToken={checkoutToken} 
      address={address} 
      shippingCountry={shippingCountry} 
      shippingOption={shippingOption} 
      shippingSubdivision={shippingSubdivision} 
      handleCaptureCheckout={handleCaptureCheckout} 
      prevItem={prevItem} set2={set2} firstName={firstName} 
      lastName={lastName} 
      email={email} 
      num2={num2} 
      activeItem={activeItem} 
      nextItem={nextItem} />}

          </div>}
      </main>
    </div>
  )
}

export default Checkout