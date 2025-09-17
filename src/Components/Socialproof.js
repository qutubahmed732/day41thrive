import React from 'react'
import {Trophy, BarChart3, Star} from "lucide-react"

function Socialproof() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Battle-Tested by Industry Leaders</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl mb-4"><Trophy className="w-10 h-10 mx-auto text-yellow-500" /> </div>
                        <h3 className="font-bold text-lg mb-3">Battle-Tested Results</h3>
                        <p className="text-gray-700">
                            "We've personally scaled roofing businesses from $4M to $30M, and in January 2024, we exited our own company at $17 million in annual revenue."
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-4xl mb-4"><BarChart3 className="w-10 h-10 mx-auto text-blue-500" /></div>
                        <h3 className="font-bold text-lg mb-3">Industry Expertise</h3>
                        <p className="text-gray-700">
                            "Over 20+ years on the roof, in the truck, and behind the scenes of operations, sales, and leadership in some of the most respected roofing companies in the country."
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="text-4xl mb-4"><Star className="w-10 h-10 mx-auto text-yellow-500 fill-yellow-500" /> </div>
                        <h3 className="font-bold text-lg mb-3">Real-World Application</h3>
                        <p className="text-gray-700">
                            "This isn't theory or recycled corporate jargon. These are the actual systems we used to scale real companies and free ourselves from constant stress."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Socialproof