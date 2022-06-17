import React from 'react'
import Sale from './Sale'

function Shopping({ products }) {
  return (
    <div>
      <Sale products={products} />  
    </div>
  )
}

export default Shopping