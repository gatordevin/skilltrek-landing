import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Brain, Trophy, Target, ChevronRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-gray-300 text-sm font-medium">Powered by Claude AI</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white block">Learn Smarter with</span>
            <span className="gradient-text block mt-2">AI-Powered Tutoring</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Personalized learning journeys powered by Claude AI. Master new skills through
            challenge-based education, earn achievements, and track your progress with gamified learning.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-200 flex items-center space-x-2 shadow-lg neon-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Learning Free</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="border border-dark-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-dark-800/50 hover:border-dark-500 transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-xl p-6 text-left hover:bg-dark-800/60 transition-colors duration-300">
            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">AI-Powered Tutoring</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Claude AI provides personalized guidance, answers questions, and adapts to your learning style</p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-left hover:bg-dark-800/60 transition-colors duration-300">
            <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-accent-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Challenge-Based Learning</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Master skills through structured challenges with progressive difficulty levels</p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-left hover:bg-dark-800/60 transition-colors duration-300">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Gamified Progress</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Earn points, unlock achievements, maintain streaks, and compete on leaderboards</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-dark-800"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">User Rating</div>
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-dark-800"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Trusted by learners worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50">
            <div className="text-2xl font-bold text-gray-400">Stanford</div>
            <div className="text-2xl font-bold text-gray-400">MIT</div>
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
