import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Header from './Component/Header'
import Cards from './pages/Cards'


const App = () => {
  return (
   <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cards/:id' element={<Cards/>} />
      </Routes>

   </Router>
  )
}

export default App