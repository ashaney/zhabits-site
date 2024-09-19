import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Star, Users, Zap, MousePointer2, BarChart } from 'lucide-react'
import Link from 'next/link'

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
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#20c9d8]">zhabits</Link>
          <div className="space-x-4">
            <a href="https://zhabits.app" className="text-white hover:text-[#20c9d8] transition-colors">Launch App</a>
            <a href="/roadmap.html" className="text-white hover:text-[#20c9d8] transition-colors">Roadmap</a>
            <a href="/about.html" className="text-white hover:text-[#20c9d8] transition-colors">About</a>
            <a href="mailto:team@zhabits.com" className="text-white hover:text-[#20c9d8] transition-colors">Contact</a>
            <a href="/terms.html" className="text-white hover:text-[#20c9d8] transition-colors">Terms</a>
            <a href="/privacy.html" className="text-white hover:text-[#20c9d8] transition-colors">Privacy</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-[#20c9d8] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Atomic Habits
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your life with zhabits, the app inspired by 'Atomic Habits' that helps you create and maintain tiny habits for remarkable results.
          </motion.p>
          <motion.a 
            href="https://zhabits.app" 
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
      <section className="py-20 bg-purple-900 bg-opacity-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Atomic Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: "Alex", quote: "zhabits has helped me implement the concepts from 'Atomic Habits' in my daily life. The results are incredible!" },
              { name: "Sam", quote: "The habit stacking feature in zhabits made it so much easier for me to build new, positive habits." }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-purple-900 bg-opacity-20 p-6 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-[#20c9d8]">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-[#1ab7c5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Habits?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Join thousands of users who are already building atomic habits with zhabits. Start your journey to lasting change today!
          </p>
          <motion.a 
            href="https://zhabits.app" 
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
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-[#20c9d8]">zhabits</Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://zhabits.app" className="text-white hover:text-[#20c9d8] transition-colors">Launch App</a>
              <Link href="/about" className="text-white hover:text-[#20c9d8] transition-colors">About</Link>
              <Link href="/terms" className="text-white hover:text-[#20c9d8] transition-colors">Terms</Link>
              <Link href="/privacy" className="text-white hover:text-[#20c9d8] transition-colors">Privacy</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} zhabits. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}