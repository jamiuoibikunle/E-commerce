import React from 'react'
import Home from './home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './home/Navigation'

function App() {
  return (
    <div>
      
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App