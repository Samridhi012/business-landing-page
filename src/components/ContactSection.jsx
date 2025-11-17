import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Fallback: open user's mail client with prefilled content
    const subject = `Contact from ${form.name || 'Website Visitor'}`
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`
    window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-25 px-4 max-w-4xl mx-auto">
      <motion.div variants={fadeIn('up', 0.3)} className="text-center mb-8">
        <motion.h2 variants={textVariant(0.2)} className="text-3xl font-bold mb-2">Contact Us</motion.h2>
        <motion.p variants={fadeIn('up', 0.4)} className="text-gray-600">Have questions? Send us a message and we'll get back to you.</motion.p>
      </motion.div>

      <motion.form onSubmit={handleSubmit} variants={fadeIn('up', 0.5)} className="bg-white p-6 rounded-2xl shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="border border-gray-200 rounded-lg px-4 py-2" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Your email" className="border border-gray-200 rounded-lg px-4 py-2" />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your message" rows={6} className="w-full border border-gray-200 rounded-lg px-4 py-3 mt-4"></textarea>
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Send Message</button>
        </div>
      </motion.form>
    </section>
  )
}

export default ContactSection
