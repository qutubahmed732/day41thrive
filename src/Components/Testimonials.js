import React from 'react'
import { Star } from "lucide-react"

function Testimonials() {
  return (
    <section className="pt-16 bg-white">
      <div className="container mx-auto px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Real Results from Real Roofing Companies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4 flex gap-1">
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Before RoofOps41, I was working 70-hour weeks and my team couldn't make decisions without me. Now we've doubled our revenue and I actually took a vacation last month. The systems work."
              </p>
              <p className="font-semibold text-gray-900">- Mike Chen, Precision Roofing</p>
              <p className="text-sm text-gray-600">(Scaled from $4M to $8M in 18 months)</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4 flex gap-1">
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The marketing section alone paid for itself. We went from chasing storm damage to having a predictable pipeline of retail customers. Our close rate jumped from 23% to 41% using their sales frameworks."
              </p>
              <p className="font-semibold text-gray-900">- Sarah Rodriguez, Summit Contractors</p>
              <p className="text-sm text-gray-600">(Added $2M in annual revenue)</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <div className="text-yellow-400 text-2xl mb-4 flex gap-1">
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
                <Star className='fill-yellow-400' />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I was skeptical about another 'system' - but this isn't fluff. It's the real playbook from people who actually built and sold roofing companies. My team follows the SOPs without me having to babysit every detail."
              </p>
              <p className="font-semibold text-gray-900">- David Thompson, Atlas Roofing Solutions</p>
              <p className="text-sm text-gray-600">(Grew team from 12 to 35 employees)</p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-16 px-7 md:px-0 bg-black bg-gradient-to-b from-black/10 via-[#34071e]/90 to-black/10'>
        <div className='max-w-7xl relative mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

          <div className="group relative">
            <div className="glassmorphism-card hover:animate-pulse-scale relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-4 overflow-hidden rounded-full border-2 border-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:shadow-xl">
                  <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=300" alt="Sarah Chen" className="h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white drop-shadow-sm transition-all duration-300 group-hover:text-white/95">Sarah Chen</h3>
                <p className="mb-3 text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white/90">Chief Executive Officer</p>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-300 group-hover:w-16 group-hover:via-white/50"></div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/80">Visionary leader with 15+ years in tech innovation and strategic growth.</p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="glassmorphism-card hover:animate-pulse-scale relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-4 overflow-hidden rounded-full border-2 border-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:shadow-xl">
                  <img src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Sarah Chen" className="h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white drop-shadow-sm transition-all duration-300 group-hover:text-white/95">Marcus Rodriguez</h3>
                <p className="mb-3 text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white/90">Senior Developer</p>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-300 group-hover:w-16 group-hover:via-white/50">
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/80">Full-stack expert specializing in React, Node.js, and cloud architecture.</p>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="glassmorphism-card hover:animate-pulse-scale relative h-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/15 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-4 overflow-hidden rounded-full border-2 border-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:shadow-xl">
                  <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Sarah Chen" className="h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white drop-shadow-sm transition-all duration-300 group-hover:text-white/95">Emily Johnson</h3>
                <p className="mb-3 text-sm font-medium text-white/80 transition-all duration-300 group-hover:text-white/90">Marketing Manager</p>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-300 group-hover:w-16 group-hover:via-white/50">
                </div>
                <p className="mt-3 text-xs text-white/70 leading-relaxed transition-all duration-300 group-hover:text-white/80">Creative strategist driving brand growth through digital innovation.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials