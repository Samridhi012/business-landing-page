import React from 'react'
import Hero from '../components/Hero'
import CompanyLogo from '../components/CompanyLogo'
import PurposeSection from '../components/PurposeSection'
import PricingSection from '../components/PricingSection'
import NewsletterSection from '../components/NewsletterSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <PricingSection/>
    </div>
  )
}

export default Home
