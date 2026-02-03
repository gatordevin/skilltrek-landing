import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Brain,
  MessageSquare,
  BarChart3,
  Users,
  Zap,
  Shield,
  BookOpen,
  Lightbulb
} from 'lucide-react'

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: Brain,
      title: "Claude AI Tutor",
      description: "Get personalized explanations and guidance from Claude AI. Ask questions anytime and receive context-aware responses that adapt to your learning level."
    },
    {
      icon: BookOpen,
      title: "Structured Challenges",
      description: "Learn through carefully designed challenges with progressive skill levels. Each challenge builds on previous knowledge for optimal learning."
    },
    {
      icon: MessageSquare,
      title: "Interactive Conversations",
      description: "Engage in natural dialogue with AI tutors. Get instant feedback, clarifications, and additional examples when you need them."
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track your learning journey with detailed analytics. See mastery levels, time spent, and identify areas for improvement."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join study groups, compete on leaderboards, and learn alongside peers from around the world."
    },
    {
      icon: Lightbulb,
      title: "Adaptive Curriculum",
      description: "AI-powered recommendations suggest the perfect next challenge based on your progress and learning goals."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Platform Features</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Everything You Need to Learn Effectively
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powered by advanced AI technology, SkillTrek provides a comprehensive learning experience that adapts to your unique needs.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-primary-500/30 hover:bg-dark-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">AI-First Learning Platform</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Instant AI Responses</p>
                    <p className="text-gray-400 text-sm">Get answers and explanations in milliseconds, not hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Brain className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Context-Aware Tutoring</p>
                    <p className="text-gray-400 text-sm">AI remembers your progress and adapts explanations accordingly</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-dark-800 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Safe Learning Environment</p>
                    <p className="text-gray-400 text-sm">Content moderation and appropriate educational responses</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Platform Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">500+</p>
                  <p className="text-gray-500 text-sm">Learning Challenges</p>
                </div>
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">50+</p>
                  <p className="text-gray-500 text-sm">Skill Categories</p>
                </div>
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">24/7</p>
                  <p className="text-gray-500 text-sm">AI Availability</p>
                </div>
                <div className="text-center p-6 bg-dark-800/50 rounded-xl">
                  <p className="text-3xl font-bold text-white mb-1">100+</p>
                  <p className="text-gray-500 text-sm">Achievements</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
