import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  UserPlus,
  Target,
  MessageSquare,
  Trophy,
  ArrowRight
} from 'lucide-react'

const HowItWorks = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Sign Up & Set Goals",
      description: "Create your account and tell us what you want to learn. Our AI will create a personalized learning path just for you."
    },
    {
      icon: Target,
      number: "02",
      title: "Choose Challenges",
      description: "Browse our library of challenges across various subjects. Pick ones that match your skill level and interests."
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "Learn with AI Tutor",
      description: "Work through challenges with Claude AI as your personal tutor. Ask questions, get explanations, and receive instant feedback."
    },
    {
      icon: Trophy,
      number: "04",
      title: "Earn & Level Up",
      description: "Complete challenges to earn XP, unlock achievements, maintain streaks, and climb the leaderboards."
    }
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Your Learning Journey in 4 Simple Steps
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Getting started is easy. Follow these steps to begin your personalized learning adventure.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/30 to-primary-500/0 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-dark-900/80 border border-dark-800 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 h-full">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-dark-800 absolute top-4 right-4 group-hover:text-primary-500/20 transition-colors duration-300">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow to next step (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-dark-900 border border-dark-700 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary-400" />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#demo"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-500 hover:to-primary-400 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
