import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const testimonials = [
    {
      quote: "SkillTrek completely changed how I learn programming. The AI tutor feels like having a patient teacher available 24/7. I've gone from beginner to intermediate in just 3 months!",
      author: "Sarah Chen",
      role: "Software Engineering Student",
      company: "Stanford University",
      rating: 5
    },
    {
      quote: "The gamification keeps me coming back every day. I'm on a 45-day streak and have earned over 30 achievements. Learning has never been this addictive!",
      author: "Marcus Johnson",
      role: "Career Changer",
      company: "Former Marketing Manager",
      rating: 5
    },
    {
      quote: "As a teacher, I recommend SkillTrek to all my students. The challenge-based approach and instant AI feedback help them learn concepts faster than traditional methods.",
      author: "Dr. Emily Rodriguez",
      role: "Computer Science Professor",
      company: "MIT",
      rating: 5
    },
    {
      quote: "I was skeptical about AI tutoring, but Claude AI explains complex topics in ways that just click. It's like having a brilliant study partner who never gets tired.",
      author: "Alex Kim",
      role: "Data Scientist",
      company: "Google",
      rating: 5
    },
    {
      quote: "The progress tracking and analytics helped me identify weak areas I didn't even know I had. Now I'm consistently scoring in the top 100 on the leaderboard!",
      author: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Microsoft",
      rating: 5
    },
    {
      quote: "SkillTrek's personalized learning paths saved me months of wandering through random tutorials. The AI knows exactly what I need to learn next.",
      author: "James Wilson",
      role: "Junior Developer",
      company: "Startup Founder",
      rating: 5
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
          <p className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Loved by Learners Worldwide
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their skills with SkillTrek's AI-powered education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-900/50 border border-dark-800 rounded-xl p-8 hover:border-primary-500/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary-500/30" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-white">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-primary-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500/50 to-accent-500/50 border-2 border-dark-950"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">50K+ active learners</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">4.9/5 average rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
