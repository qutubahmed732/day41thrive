import React from 'react'
import bg from "../images/hero-bg.jpg"

function CTAsection() {
    // bg-gradient-to-b from-black/70 via-[#34071e]/70 to-black/80
  return (
    <section className="relative overflow-hidden py-16 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-white/10 backdrop-blur"></div>
        {/* <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw]"></div> */}
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