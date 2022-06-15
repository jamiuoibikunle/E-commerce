import React, { useEffect, useState } from 'react'
import Shopping from './shopping/Shopping'
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import Navigation from './shopping/Navigation'
import Product from './product/Product'
import Cart from './cart/cart'
import { commerce } from './commerce/commerce'
import Homepage from './homepage/homepage'
import Checkout from './checkout/Checkout'
import Profile from './profile/Profile'


function App() {

  let { productID } = useParams()
  
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data)
    console.log(data);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      
      <Router>
          <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shopping' element={<Shopping products={products} />} />
          <Route path='/shopping/:productID' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<>Error page</>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App