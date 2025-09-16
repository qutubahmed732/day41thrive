import React from 'react'

function CTAsection() {
  return (
    <section className="relative overflow-hidden py-16 text-white bg-[#020001]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#34071e]/40 to-transparent"></div>
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,rgba(255,52,157,0.08)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Stop Guessing and Start Growing With Purpose?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
                The RoofOps41 System gives you everything you need to transform chaos into controlled, profitable growth.
            </p>
            <a href="#form" className="inline-block bg-[#ff349d] hover:bg-[#e62f8d] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300">
                Yes, Show Me The System
            </a>
        </div>
    </section>
  )
}

export default CTAsection