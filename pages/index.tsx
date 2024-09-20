import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Star, Users, Zap, MousePointer2, BarChart } from 'lucide-react'
import Link from 'next/link'
import { Instagram as InstagramIcon, X as XIcon } from '@mui/icons-material'

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-purple-900 opacity-50 mix-blend-multiply pointer-events-none" />
      
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor fixed w-6 h-6 rounded-full bg-[#20c9d8] mix-blend-difference pointer-events-none z-50"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#20c9d8] mb-4 sm:mb-0">zHabits</Link>
          <div className="flex flex-wrap justify-center space-x-4">
            <a href="https://zhabits.app" className="text-white hover:text-[#20c9d8] transition-colors">Launch App</a>
            <a href="/roadmap.html" className="text-white hover:text-[#20c9d8] transition-colors">Roadmap</a>
            <a href="/about.html" className="text-white hover:text-[#20c9d8] transition-colors">About</a>
            <a href="mailto:team@zHabits.com" className="text-white hover:text-[#20c9d8] transition-colors">Contact</a>
            <a href="/terms.html" className="text-white hover:text-[#20c9d8] transition-colors">Terms</a>
            <a href="/privacy.html" className="text-white hover:text-[#20c9d8] transition-colors">Privacy</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-[#20c9d8] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Atomic Habits
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your life with zHabits, the app inspired by &ldquo;
            <a 
              href="https://jamesclear.com/atomic-habits-summary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Atomic Habits
            </a>
            &rdquo; that helps you create and maintain tiny habits for remarkable results.
          </motion.p>
          <motion.a 
            href="https://zHabits.app" 
            className="bg-[#20c9d8] text-black font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-[#1ab7c5] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start Your Journey <ChevronRight className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-purple-900 bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "1% Better Every Day", description: "Focus on small improvements that compound over time for significant results." },
              { icon: Users, title: "Identity-Based Habits", description: "Build habits that align with the type of person you want to become." },
              { icon: Zap, title: "Habit Stacking", description: "Link new habits to existing ones for easier integration into your routine." },
              { icon: BarChart, title: "Progress Tracking", description: "Visualize your habit formation and celebrate small wins along the way." }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-black bg-opacity-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-[#20c9d8] mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "My mom", quote: "What is this, exactly?" },
              { name: "My friend T.", quote: "What's the elevator pitch?" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-purple-900 bg-opacity-20 p-6 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-bold text-[#20c9d8]">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900 to-[#1ab7c5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Ready to Transform Your Habits?</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join the tens of users who are already building atomic habits with zHabits. Start your journey to lasting change today!
          </p>
          <motion.a 
            href="https://zHabits.app" 
            className="bg-[#20c9d8] text-black font-bold py-3 px-8 rounded-full inline-flex items-center hover:bg-[#1ab7c5] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch App <MousePointer2 className="ml-2" />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <Link href="/" className="text-2xl font-bold text-[#20c9d8]">zHabits</Link>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#20c9d8] transition-colors">
                <InstagramIcon fontSize="medium" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#20c9d8] transition-colors">
                <XIcon fontSize="medium" />
              </a>
            </div>
            <a href="https://zHabits.app" className="text-white hover:text-[#20c9d8] transition-colors">Launch App</a>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} zHabits. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}