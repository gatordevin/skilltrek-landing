import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Sparkles, Building2, Users } from 'lucide-react'

const Pricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const plans = [
    {
      name: "Free Trial",
      description: "Try SkillTrek with no commitment",
      price: 0,
      priceLabel: "Free",
      icon: Sparkles,
      features: [
        "3 free learning sessions",
        "AI-powered tutoring",
        "Age-adaptive content",
        "Progress tracking",
        "Parent dashboard access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Per-Session",
      description: "Pay only for what you use",
      price: 2.99,
      priceLabel: "$2.99",
      priceSubtext: "per session",
      icon: Users,
      features: [
        "No subscription required",
        "Full AI tutoring experience",
        "All subjects available",
        "Age-adaptive lesson plans",
        "Progress analytics",
        "Parent monitoring tools"
      ],
      cta: "Join Beta Waitlist",
      popular: true
    },
    {
      name: "Team / Classroom",
      description: "Perfect for educators and groups",
      price: null,
      priceLabel: "Custom",
      priceSubtext: "per session, per learner",
      icon: Building2,
      features: [
        "Shared classroom sessions",
        "Multiple learners at once",
        "Group challenges & activities",
        "Educator dashboard",
        "Progress reports for all students",
        "Bulk session discounts",
        "Custom curriculum support"
      ],
      cta: "Contact Us",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Beta Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Simple, Pay-Per-Session Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            No subscriptions or hidden fees. Pay only for the learning sessions you use.
          </p>
          <p className="text-sm text-accent-400">
            Beta pricing - sign up now to lock in early adopter rates!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-dark-900/50 border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-primary-500 ring-1 ring-primary-500/20'
                    : 'border-dark-800'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                    plan.popular ? 'bg-primary-500/20' : 'bg-dark-800'
                  }`}>
                    <Icon className={`w-7 h-7 ${plan.popular ? 'text-primary-400' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">
                      {plan.priceLabel}
                    </span>
                  </div>
                  {plan.priceSubtext && (
                    <p className="text-gray-500 text-sm mt-1">
                      {plan.priceSubtext}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-primary-500/20' : 'bg-dark-800'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-400' : 'text-gray-500'}`} />
                      </div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={plan.name === 'Team / Classroom' ? '#contact' : '#demo'}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 block text-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400'
                      : 'bg-dark-800 text-white hover:bg-dark-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            )
          })}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Questions about pricing?</h3>
              <p className="text-gray-400 max-w-xl">
                We're happy to help educators, schools, and families find the right plan.
                Contact us for custom solutions or volume pricing.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="bg-white text-dark-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
