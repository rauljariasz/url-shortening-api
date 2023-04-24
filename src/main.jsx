import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import ShorterSection from './components/ShorterSection'
import BoostSection from './components/BoostSection'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <main>
      <HeroSection />
      <ShorterSection />
      <BoostSection />
    </main>
  </React.StrictMode>,
)
