import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'

const routeFromHash = () => {
  const hash = window.location.hash || '#/'
  // normalize: allow #/, #/about, #about, #about -> /about
  const cleaned = hash.replace(/^#/, '')
  return cleaned === '' ? '/' : cleaned
}

function App() {
  const [route, setRoute] = useState(routeFromHash())

  useEffect(() => {
    const onHash = () => setRoute(routeFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Scroll to the active section when the hash route changes.
  // Our hash routes include a leading slash (e.g. "#/testimonials") while
  // the section ids are like "testimonials". Programmatic scrolling
  // ensures the browser scrolls to the correct element and respects
  // `scroll-margin-top` set in CSS so the heading won't be hidden under
  // the fixed navbar.
  useEffect(() => {
    // allow render to complete
    const t = setTimeout(() => {
      if (route === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const id = route.replace(/^\//, '') // '/testimonials' -> 'testimonials'
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // fallback to top if not found
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 50)
    return () => clearTimeout(t)
  }, [route])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />

        {/* Route rendering: home shows only main items; other pages show their sections */}
        {route === '/' && <Home />}
        {route === '/about' && <AboutPage />}
        {route === '/services' && <ServicesPage />}
        {route === '/testimonials' && <TestimonialsPage />}
        {route === '/contact' && <ContactPage />}

        {/* Show newsletter only on Contact page */}
        {route === '/contact' && <NewsletterSection />}
        <Footer />
      </div>
    </main>
  )
}

export default App
