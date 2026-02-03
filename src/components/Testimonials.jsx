import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Target, Trophy, Zap } from 'lucide-react'

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized explanations and guidance from Claude AI that adapts to your learning style and pace."
    },
    {
      icon: Target,
      title: "Challenge-Based Approach",
      description: "Learn through hands-on challenges designed to build real skills progressively."
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Stay motivated with achievements, streaks, and leaderboards that make learning engaging."
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate responses and corrections to accelerate your learning journey."
    }
  ]

  return (
    <section className="py-24 md:py-32 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Why SkillTrek</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            A Better Way to Learn
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover how SkillTrek's AI-powered platform can help you master new skills effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
