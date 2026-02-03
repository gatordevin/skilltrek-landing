import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ForEmployers from './components/ForEmployers'
import HowItWorks from './components/HowItWorks'
import Gamification from './components/Gamification'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <ForEmployers />
      <HowItWorks />
      <Gamification />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
