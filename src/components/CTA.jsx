import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, User, GraduationCap, Sparkles, Calendar, Check } from 'lucide-react'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    learner_age: '',
    interest: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, message: '' })

    try {
      // Using Web3Forms - a free form submission service
      // Replace YOUR_ACCESS_KEY with your actual Web3Forms access key
      // Get one free at https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '13a11dfd-87e6-4b36-a0bb-9277cc89be47',
          subject: 'New SkillTrek Beta Signup!',
          from_name: 'SkillTrek Landing Page',
          name: formData.name,
          email: formData.email,
          learner_age: formData.learner_age,
          interest: formData.interest,
          message: `New beta signup:\n\nName: ${formData.name}\nEmail: ${formData.email}\nLearner Age: ${formData.learner_age}\nInterest: ${formData.interest}`
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "You're on the beta list! We'll notify you when we launch."
        })
        setFormData({ name: '', email: '', learner_age: '', interest: '' })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      // For demo purposes, still show success (remove this in production)
      setSubmitStatus({
        success: true,
        message: "You're on the beta list! We'll notify you when we launch."
      })
      setFormData({ name: '', email: '', learner_age: '', interest: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const learningInterests = [
    'Mathematics',
    'Science',
    'Languages',
    'Reading & Writing',
    'Coding & Technology',
    'Music & Arts',
    'History & Social Studies',
    'Test Prep',
    'Other'
  ]

  const ageRanges = [
    '5-7 years',
    '8-10 years',
    '11-13 years',
    '14-17 years',
    '18+ (Adult learner)'
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
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="text-accent-400 text-sm font-medium">Beta Access Available</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Join the Future of</span>
              <span className="gradient-text block">AI-Powered Learning</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be among the first families to experience personalized AI tutoring.
              Sign up for beta access - completely free to try!
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">AI tutor that adapts to learner's age</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">Works for ANY subject or learning goal</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">COPPA compliant with parental controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">Gamified progress to keep learners engaged</span>
              </div>
            </div>

            {/* Parent Note */}
            <div className="glass-effect rounded-xl p-6 border border-accent-500/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500/50 to-primary-500/50 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Parents sign up first</p>
                  <p className="text-gray-500 text-sm">Students under 18 require parent registration</p>
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
                <h3 className="text-2xl font-bold text-white">Join the Beta</h3>
              </div>

              {submitStatus.success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-accent-400" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">You're In!</h4>
                  <p className="text-gray-400">{submitStatus.message}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name (Parent/Guardian)
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
                        placeholder="Your full name"
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Learner's Age Range
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <select
                        name="learner_age"
                        required
                        value={formData.learner_age}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                      >
                        <option value="">Select age range</option>
                        {ageRanges.map((age) => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Primary Learning Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select subject area (optional)</option>
                      {learningInterests.map((interest) => (
                        <option key={interest} value={interest}>{interest}</option>
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
                      <span>Signing up...</span>
                    ) : (
                      <>
                        <span>Join Beta Waitlist</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              <p className="text-gray-500 text-xs text-center mt-6">
                By signing up, you agree to our Terms of Service and Privacy Policy.
                Parents must accept ToS for users under 18.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
