import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Sparkles, Building2, Users } from 'lucide-react'

const Pricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [isYearly, setIsYearly] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out SkillTrek",
      price: { monthly: 0, yearly: 0 },
      icon: Sparkles,
      features: [
        "5 challenges per month",
        "Basic AI tutoring",
        "Progress tracking",
        "Community access",
        "Mobile app access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      description: "For serious learners ready to accelerate",
      price: { monthly: 19, yearly: 15 },
      icon: Users,
      features: [
        "Unlimited challenges",
        "Advanced AI tutoring with Claude",
        "Detailed analytics & insights",
        "All achievements & badges",
        "Priority support",
        "Custom learning paths",
        "Certificate of completion"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team",
      description: "For organizations and educators",
      price: { monthly: 49, yearly: 39 },
      icon: Building2,
      features: [
        "Everything in Pro",
        "Up to 50 team members",
        "Team leaderboards",
        "Admin dashboard",
        "Progress reports",
        "Custom challenges",
        "SSO integration",
        "Dedicated support"
      ],
      cta: "Contact Sales",
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
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                isYearly ? 'bg-primary-500' : 'bg-dark-700'
              }`}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full"
                animate={{ left: isYearly ? '32px' : '4px' }}
                transition={{ duration: 0.2 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>
              Yearly <span className="text-accent-400 font-medium">(Save 20%)</span>
            </span>
          </div>
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
                      Most Popular
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
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  {isYearly && plan.price.monthly > 0 && (
                    <p className="text-gray-500 text-sm mt-1">
                      Billed annually (${plan.price.yearly * 12}/year)
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
                <motion.button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400'
                      : 'bg-dark-800 text-white hover:bg-dark-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Need a custom solution?</h3>
              <p className="text-gray-400 max-w-xl">
                For large organizations, universities, and enterprises with specific requirements.
                Get custom pricing, dedicated support, and tailored features.
              </p>
            </div>
            <motion.button
              className="bg-white text-dark-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
