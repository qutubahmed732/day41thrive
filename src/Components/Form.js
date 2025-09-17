import React from 'react'

function Form() {
  return (
    <section id="form" className="py-16 bg-[#020001] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Instant Access to the Complete RoofOps41 System
          </h2>

          <form className="bg-white rounded-lg p-8 text-gray-900">
            <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2" for="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" for="email">Email Address *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" for="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" for="revenue">Current Annual Revenue</label>
              <select id="revenue" name="revenue" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select Revenue Range</option>
                <option value="under-1m">Under $1M</option>
                <option value="1m-3m">$1M-$3M</option>
                <option value="3m-5m">$3M-$5M</option>
                <option value="5m-10m">$5M-$10M</option>
                <option value="over-10m">Over $10M</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-sm md:text-xl transition-colors duration-300 mb-6">
              Send Me RoofOps41 Now - I'm Ready to Scale
            </button>

            <div className="text-center text-sm text-gray-600 space-y-2">
              <p>🔒 Your information is secure and will never be shared</p>
              <p>📱 Instant download - access in less than 2 minutes</p>
              <p>💯 Used by roofing companies nationwide</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form