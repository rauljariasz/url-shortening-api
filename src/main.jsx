import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <main>
      <HeroSection />
    </main>
  </React.StrictMode>,
)
