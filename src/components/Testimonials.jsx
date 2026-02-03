import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Users, Eye, FileCheck } from 'lucide-react'

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const safetyFeatures = [
    {
      icon: Shield,
      title: "COPPA Compliant",
      description: "Our platform is designed to comply with the Children's Online Privacy Protection Act. We take student privacy seriously."
    },
    {
      icon: Users,
      title: "Parent Registration Required",
      description: "Parents or guardians must register and accept our Terms of Service before students under 18 can use the platform."
    },
    {
      icon: Eye,
      title: "Parental Monitoring",
      description: "Parents can monitor their child's activity, view progress reports, and control account settings at any time."
    },
    {
      icon: FileCheck,
      title: "Age-Appropriate Content",
      description: "All content is automatically adapted to be age-appropriate based on the learner's profile settings."
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
          <p className="text-accent-400 text-sm font-medium uppercase tracking-wider mb-4">Safety First</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Built for Families
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We prioritize the safety and privacy of young learners. Parents stay in control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-accent-500/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Beta Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-primary-500/10 border border-primary-500/20 rounded-xl p-6 text-center"
        >
          <p className="text-primary-400 font-medium">
            Currently in Beta - Sign up to be notified when we launch!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
