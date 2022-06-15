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

  const [cartItems, setItems] = useState([])
  const [cart, setCart] = useState()

  
  useEffect(() => {
    
    const fetchData = async () => {
      await commerce.cart.contents().then((data) => setItems(data))
    }
    
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
    }

    fetchData()
    fetchCart()

  }, [cart])

  console.log(cart);

  const { productID } = useParams()
  
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
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
          <Route path='/checkout' element={<Checkout cart={cart} />} />
          <Route path='*' element={<>Error page</>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App