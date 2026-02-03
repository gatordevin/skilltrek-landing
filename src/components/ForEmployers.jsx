import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Building2,
  UserCheck,
  BadgeCheck,
  BrainCircuit,
  Search,
  FolderKanban,
  ArrowRight
} from 'lucide-react'

const ForEmployers = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const benefits = [
    {
      icon: UserCheck,
      title: "Intern & Candidate Screening",
      description: "Screen candidates efficiently with AI-assessed skill challenges. See real performance data before making hiring decisions."
    },
    {
      icon: BadgeCheck,
      title: "Verified Skill Assessments",
      description: "Trust our verified skill badges and assessments. Candidates can't fake their way through AI-proctored learning challenges."
    },
    {
      icon: BrainCircuit,
      title: "AI Interaction Skills",
      description: "See how candidates interact with AI tools - a critical skill in today's workplace. Understand their prompt engineering and AI collaboration abilities."
    },
    {
      icon: Search,
      title: "Talent Discovery",
      description: "Search our talent pool by specific skills, assessment scores, and learning velocity. Find candidates who have demonstrated real competency."
    },
    {
      icon: FolderKanban,
      title: "Portfolio of Learning",
      description: "View candidates' complete learning journeys - challenges completed, skills mastered, and AI interaction patterns that showcase their potential."
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
    <section id="for-employers" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-900"></div>

      {/* Accent gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-accent-500" />
            <span className="text-accent-400 text-sm font-medium">For Employers & Recruiters</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Find AI-Ready Talent with{' '}
            <span className="gradient-text">Verified Skills</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            SkillTrek isn't just for learners. Employers can discover pre-vetted candidates
            with verified AI interaction skills and proven learning abilities.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - For Learners */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-900/30 to-dark-900/50 border border-primary-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">For Learners</h3>
            <p className="text-gray-400 mb-6">
              Your SkillTrek progress becomes your career credential. Stand out to employers with verified skills.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">Earn verified skill badges employers can trust</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">Showcase your AI collaboration abilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">Build a portfolio of completed challenges</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-primary-400" />
                </div>
                <span className="text-gray-300">Get discovered by employers seeking your skills</span>
              </li>
            </ul>
          </motion.div>

          {/* Right - For Employers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-accent-900/30 to-dark-900/50 border border-accent-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">For Employers</h3>
            <p className="text-gray-400 mb-6">
              Access a pool of candidates who have proven their skills through AI-assisted learning challenges.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">Screen candidates with real skill assessments</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">See how candidates work with AI tools</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">Reduce hiring risk with verified competencies</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BadgeCheck className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-gray-300">Find candidates who are self-motivated learners</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-dark-900/50 border border-dark-800 rounded-xl p-6 hover:border-accent-500/30 hover:bg-dark-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent-400" />
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-dark-900/80 to-dark-800/80 border border-dark-700 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interested in SkillTrek for Your Organization?
            </h3>
            <p className="text-gray-400 mb-6">
              Whether you're screening interns, hiring junior developers, or building a training program -
              SkillTrek can help you find and develop AI-ready talent.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-accent-500 hover:to-accent-400 transition-all duration-200"
            >
              <span>Contact Us for Enterprise Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ForEmployers
