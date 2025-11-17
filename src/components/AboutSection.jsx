import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto">
        <motion.h2 variants={textVariant(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight leading-tight">
          About Our Company
        </motion.h2>

        <motion.p variants={fadeIn('up', 0.35)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          We build delightful digital experiences for businesses of all sizes. Our
          team focuses on design, performance and delivering measurable results.
          Over the years we've partnered with startups and established enterprises
          to craft products that scale and delight users.
        </motion.p>

        {/* Two-column overview + stats */}
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-16">
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">What we do</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We design and build web and mobile products with a focus on performance,
              accessibility and long-term maintainability. Our services include UX/UI
              design, frontend engineering, automation and data-driven growth.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We take a product-minded approach: study the users, measure outcomes,
              and iterate quickly. That helps our clients reduce time-to-value and
              increase customer satisfaction.
            </p>
            <h4 className="font-semibold mb-3">Company History</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>2017:</strong> Founded by a small team of engineers and designers.</li>
              <li><strong>2019:</strong> Expanded into product design and full-stack engineering.</li>
              <li><strong>2021:</strong> Reached 50+ clients and launched our first SaaS integration.</li>
              <li><strong>2024:</strong> Continued growth — focusing on scalable front-end architectures.</li>
            </ul>
          </div>

          <motion.div 
            variants={fadeIn('up', 0.45)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 p-8 rounded-2xl shadow-lg text-white flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-1">By The Numbers</h3>
              <p className="text-blue-100 text-sm">Our impact and growth story</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                variants={fadeIn('up', 0.5)}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-sm font-medium text-blue-100">Happy Clients</div>
                <p className="text-xs text-blue-200 mt-2">Across startups and enterprises</p>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.55)}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">120+</div>
                <div className="text-sm font-medium text-blue-100">Projects Delivered</div>
                <p className="text-xs text-blue-200 mt-2">From concept to production</p>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.6)}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
                <div className="text-sm font-medium text-blue-100">Client Satisfaction</div>
                <p className="text-xs text-blue-200 mt-2">Measured consistently</p>
              </motion.div>
              <motion.div 
                variants={fadeIn('up', 0.65)}
                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">4.8★</div>
                <div className="text-sm font-medium text-blue-100">Average Rating</div>
                <p className="text-xs text-blue-200 mt-2">Out of thousands of reviews</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team */}
        <motion.div variants={fadeIn('up', 0.45)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
          <h3 className="text-4xl font-bold mb-6 text-center">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-indigo-50 shadow" />
              <div className="font-semibold text-xl mb-1">Aisha Kumar</div>
              <div className="text-base text-gray-500 mb-2">CEO & Co-founder</div>
              <p className="text-gray-600 text-base mt-3">Leads product vision and client strategy.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-indigo-50 shadow" />
              <div className="font-semibold text-xl mb-1">Raj Patel</div>
              <div className="text-base text-gray-500 mb-2">Head of Engineering</div>
              <p className="text-gray-600 text-base mt-3">Focuses on scalable front-end systems and tooling.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-indigo-50 shadow" />
              <div className="font-semibold text-xl mb-1">Meera Sharma</div>
              <div className="text-base text-gray-500 mb-2">Design Lead</div>
              <p className="text-gray-600 text-base mt-3">Leads UX research and visual design systems.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-indigo-50 shadow" />
                <div className="font-semibold text-xl mb-1">Liam Johnson</div>
                <div className="text-base text-gray-500 mb-2">Product Manager</div> 
                <p className="text-gray-600 text-base mt-3">Oversees product development and client relations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300">
                <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Team" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-indigo-50 shadow" />
                <div className="font-semibold text-xl mb-1">Sophia Lee</div>
                <div className="text-base text-gray-500 mb-2">Marketing Head</div> 
                <p className="text-gray-600 text-base mt-3">Drives growth strategies and brand development.</p>     

            </div>
          </div>
        </motion.div>

        {/* Timeline / Roadmap */}
        <motion.div variants={fadeIn('up', 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">Roadmap & Focus Areas</h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Our strategic initiatives and upcoming milestones</p>
          
          <div className="max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300"></div>
                
                {/* Timeline items */}
                <div className="relative grid grid-cols-3 gap-8">
                  {/* Q4 2025 */}
                  <motion.div 
                    variants={fadeIn('up', 0.55)}
                    className="text-center"
                  >
                    <div className="relative mb-8">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        1
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                      <div className="font-bold text-lg text-purple-600 mb-2">2025</div>
                      <p className="text-gray-600 text-sm leading-relaxed">Strengthen design system and accessibility across products.</p>
                    </div>
                  </motion.div>

                  {/* Q1 2026 */}
                  <motion.div 
                    variants={fadeIn('up', 0.6)}
                    className="text-center"
                  >
                    <div className="relative mb-8">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        2
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                      <div className="font-bold text-lg text-blue-600 mb-2">2026</div>
                      <p className="text-gray-600 text-sm leading-relaxed">Expand developer tooling and automation capabilities.</p>
                    </div>
                  </motion.div>

                  {/* Ongoing */}
                  <motion.div 
                    variants={fadeIn('up', 0.65)}
                    className="text-center"
                  >
                    <div className="relative mb-8">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        ∞
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                      <div className="font-bold text-lg text-indigo-600 mb-2">Ongoing</div>
                      <p className="text-gray-600 text-sm leading-relaxed">Focus on measurable outcomes and client success metrics.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              <motion.div 
                variants={fadeIn('up', 0.55)}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">Q4</div>
                  <div className="w-1 h-12 bg-gradient-to-b from-purple-300 to-blue-300 mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex-1">
                  <div className="font-bold text-purple-600 mb-1">Q4 2025</div>
                  <p className="text-gray-600 text-sm">Strengthen design system and accessibility across products.</p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn('up', 0.6)}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">Q1</div>
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-indigo-300 mt-2"></div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex-1">
                  <div className="font-bold text-blue-600 mb-1">Q1 2026</div>
                  <p className="text-gray-600 text-sm">Expand developer tooling and automation capabilities.</p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn('up', 0.65)}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">∞</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex-1">
                  <div className="font-bold text-indigo-600 mb-1">Ongoing</div>
                  <p className="text-gray-600 text-sm">Focus on measurable outcomes and client success metrics.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <a href="#/services" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition">Explore Our Services</a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection
