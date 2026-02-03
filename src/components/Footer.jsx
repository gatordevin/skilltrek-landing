import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, ArrowRight, Mail, Send, Check } from 'lucide-react'
import verticalLogoDark from '../assets/02-vertical-dark-text.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    // For demo, just show success
    setSubscribed(true)
    setEmail('')
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Web3Forms - replace with your access key
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '13a11dfd-87e6-4b36-a0bb-9277cc89be47',
          subject: 'SkillTrek Contact Form Submission',
          from_name: 'SkillTrek Contact',
          ...contactForm,
          message: `Contact from: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
        }),
      })
    } catch (e) {
      // Ignore errors for demo
    }

    setContactSubmitted(true)
    setContactForm({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "For Employers", href: "#for-employers" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "mailto:careers@skilltrek.io" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "mailto:legal@skilltrek.io?subject=Privacy%20Policy%20Request" },
        { name: "Terms of Service", href: "mailto:legal@skilltrek.io?subject=Terms%20of%20Service%20Request" },
        { name: "Contact Legal", href: "mailto:legal@skilltrek.io" }
      ]
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/skilltrek", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/skilltrek", label: "LinkedIn" }
  ]

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter */}
          <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get beta updates and learning tips delivered to your inbox.</p>

            {subscribed ? (
              <div className="flex items-center space-x-2 text-accent-400">
                <Check className="w-5 h-5" />
                <span>You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">Contact Us</h3>
            <p className="text-gray-400 mb-6">Questions? We'd love to hear from you.</p>

            {contactSubmitted ? (
              <div className="flex items-center space-x-2 text-accent-400">
                <Check className="w-5 h-5" />
                <span>Message sent! We'll get back to you soon.</span>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <textarea
                  required
                  placeholder="Your message"
                  rows={3}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="mb-6">
              <img src={verticalLogoDark} alt="SkillTrek" className="h-20" />
            </div>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              AI-powered personalized learning platform for all ages. Master new skills with adaptive AI tutoring,
              challenge-based education, and gamified progress tracking.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-900 hover:bg-dark-800 border border-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              {currentYear} SkillTrek. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Currently in Beta</span>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span>Accepting signups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
