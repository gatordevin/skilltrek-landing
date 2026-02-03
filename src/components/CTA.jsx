import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, User, GraduationCap, Sparkles } from 'lucide-react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Welcome aboard! Check your email to get started.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        goal: ''
      })
    }, 2000)
  }

  const learningGoals = [
    'Programming & Development',
    'Data Science & AI',
    'Web Development',
    'Mobile Development',
    'Cloud Computing',
    'Cybersecurity',
    'Other'
  ]

  return (
    <section id="demo" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-primary-400 text-sm font-medium">Start Free Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Ready to Level Up</span>
              <span className="gradient-text block">Your Skills?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of learners who are mastering new skills with AI-powered education.
              Start your free trial today - no credit card required.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">Personalized AI tutor available 24/7</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">500+ challenges across 50+ skill areas</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">Gamified learning with achievements & leaderboards</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-300">Track progress with detailed analytics</span>
              </div>
            </div>

            {/* Get Started */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/50 to-accent-500/50 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Start learning today</p>
                  <p className="text-gray-500 text-sm">Free plan available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Start Learning Free</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    What do you want to learn?
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select your learning goal</option>
                    {learningGoals.map((goal) => (
                      <option key={goal} value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span>Creating Account...</span>
                  ) : (
                    <>
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent-500/10 border border-accent-500/20 rounded-lg text-accent-400 text-center"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>

              <p className="text-gray-500 text-sm text-center mt-6">
                No credit card required. Free plan includes 5 challenges per month.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
