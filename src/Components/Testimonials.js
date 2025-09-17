import React from 'react'
import { Star } from "lucide-react"

function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
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
        </section>
    )
}

export default Testimonials