import React from 'react'
import Header from './Header'
import Sale from './Sale'

function Shopping({ products }) {
  return (
    <div>
      <Sale products={products} />  
    </div>
  )
}

export default Shopping