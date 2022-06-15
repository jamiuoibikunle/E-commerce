import React from 'react'

const Confirmation = ({firstName, lastName, email, address, phone, prevItem}) => {
  return (
    <div>
      <p>
        First name: {firstName}
      </p>
      <p>
        Last name: {lastName}
      </p>
      <p>
        Residential Address: {address}
      </p>
      <p>
        Email Address: {email}
      </p>
      <p>
        Phone Number: {phone}
      </p>
      <section>
        <button onClick={prevItem}>
          BACK
        </button>
      </section>
    </div>
  )
}

export default Confirmation