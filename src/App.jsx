import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <body>
    <Navbar />
    <Hero />
    <Services />
    
    <Portfolio/>
    <Contact/>
    <Footer/>
    </body>
  )
}

export default App
