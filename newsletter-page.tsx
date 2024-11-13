'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription here
    console.log('Subscribed:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="backdrop-blur-md bg-white/10 rounded-lg shadow-lg p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Daily Insights</h1>
          <p className="text-gray-300 mb-8 text-center">
            Stay informed with our curated daily newsletter. Get the latest updates delivered straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full bg-white/5 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <p className="text-gray-400 text-sm mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </motion.div>
    </div>
  )
}