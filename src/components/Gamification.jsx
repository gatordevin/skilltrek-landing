import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Trophy,
  Flame,
  Star,
  Medal,
  Crown,
  Zap,
  Target,
  Award
} from 'lucide-react'

const Gamification = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const gamificationFeatures = [
    {
      icon: Trophy,
      title: "XP & Leveling",
      description: "Earn experience points for every completed challenge. Level up to unlock new features and content.",
      color: "yellow"
    },
    {
      icon: Flame,
      title: "Daily Streaks",
      description: "Maintain your learning streak by studying every day. Longer streaks mean bonus XP and special rewards.",
      color: "orange"
    },
    {
      icon: Medal,
      title: "Achievements",
      description: "Unlock over 100 achievements by reaching milestones, mastering skills, and completing special challenges.",
      color: "blue"
    },
    {
      icon: Crown,
      title: "Leaderboards",
      description: "Compete with learners worldwide. Climb weekly, monthly, and all-time leaderboards.",
      color: "purple"
    }
  ]

  const achievements = [
    { name: "First Steps", icon: Star, description: "Complete your first challenge", color: "text-yellow-400" },
    { name: "Quick Learner", icon: Zap, description: "Complete 10 challenges in one day", color: "text-blue-400" },
    { name: "Streak Master", icon: Flame, description: "Maintain a 30-day streak", color: "text-orange-400" },
    { name: "Perfectionist", icon: Target, description: "Get 100% on 5 challenges", color: "text-green-400" },
    { name: "Champion", icon: Crown, description: "Reach the top 10 leaderboard", color: "text-purple-400" },
    { name: "Scholar", icon: Award, description: "Master an entire skill tree", color: "text-pink-400" },
  ]

  const colorClasses = {
    yellow: "bg-yellow-500/10 text-yellow-400",
    orange: "bg-orange-500/10 text-orange-400",
    blue: "bg-blue-500/10 text-blue-400",
    purple: "bg-purple-500/10 text-purple-400",
  }

  return (
    <section id="gamification" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-400 text-sm font-medium uppercase tracking-wider mb-4">Gamification</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Learning Has Never Been <span className="gradient-text-green">This Fun</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Stay motivated with our powerful gamification system. Earn rewards, compete with friends, and watch your skills grow.
          </p>
        </motion.div>

        {/* Main Gamification Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {gamificationFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-dark-700 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClasses[feature.color]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Sample Progress Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-900/50 border border-dark-800 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Sample User Progress */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Sample Progress Dashboard</h3>

              {/* Level Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Level 12</span>
                  <span className="text-gray-400 text-sm">2,450 / 3,000 XP</span>
                </div>
                <div className="w-full h-3 bg-dark-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "82%" } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">15</p>
                  <p className="text-gray-500 text-xs">Day Streak</p>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">47</p>
                  <p className="text-gray-500 text-xs">Achievements</p>
                </div>
                <div className="bg-dark-800/50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Crown className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">#42</p>
                  <p className="text-gray-500 text-xs">Global Rank</p>
                </div>
              </div>

              {/* Skill Masteries */}
              <div>
                <p className="text-white font-medium mb-3">Skill Mastery</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Python Programming</span>
                      <span className="text-accent-400">85%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "85%" } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-accent-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Web Development</span>
                      <span className="text-primary-400">72%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "72%" } : {}}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-primary-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Data Science</span>
                      <span className="text-yellow-400">45%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "45%" } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-yellow-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Sample Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="bg-dark-800/50 rounded-lg p-4 flex items-center space-x-3 hover:bg-dark-800 transition-colors duration-200"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center ${achievement.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{achievement.name}</p>
                        <p className="text-gray-500 text-xs">{achievement.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-3xl font-bold text-white mb-1">1M+</p>
            <p className="text-gray-500 text-sm">XP Earned Daily</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-3xl font-bold text-white mb-1">100+</p>
            <p className="text-gray-500 text-sm">Achievements</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-3xl font-bold text-white mb-1">365</p>
            <p className="text-gray-500 text-sm">Max Streak Record</p>
          </div>
          <div className="text-center p-6 bg-dark-900/50 border border-dark-800 rounded-xl">
            <p className="text-3xl font-bold text-white mb-1">50K+</p>
            <p className="text-gray-500 text-sm">Active Competitors</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gamification
