import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import About from './pages/About'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
         

        


      </Routes>
      
    </div>
  )
}

export default App
