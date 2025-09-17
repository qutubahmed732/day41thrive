import React from 'react'
import { Pin, Gift  } from "lucide-react"

function WhatsInside() {
    return (
        <section className="py-16 bg-[#34071e]">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        What's Inside The Complete RoofOps41 System
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* <!-- CAPTURE --> */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3"><Pin className='size-5' /></div>
                                <h3 className="text-xl font-bold text-gray-900">CAPTURE - Marketing & Lead Generation</h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li>• The Profit Multiplier Formula that turns one job into five referrals</li>
                                <li>• Omni-Local marketing strategy (outwork the big guys with surgical precision)</li>
                                <li>• Fast response SOPs that win deals before competitors know they exist</li>
                                <li>• Review collection systems that actually get 5-star testimonials</li>
                            </ul>
                        </div>

                        {/* <!-- CONVERT --> */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3"><Pin className='size-5' /></div>
                                <h3 className="text-xl font-bold text-gray-900">CONVERT - Sales Process & Close Strategy</h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li>• In-home presentations that close without pressure or gimmicks</li>
                                <li>• Objection handling frameworks that feel professional, not pushy</li>
                                <li>• Follow-up systems for "not now" customers (where most profit hides)</li>
                                <li>• KPIs and scorecards so you don't have to babysit your sales team</li>
                            </ul>
                        </div>

                        {/* <!-- CREATE --> */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3"><Pin className='size-5' /></div>
                                <h3 className="text-xl font-bold text-gray-900">CREATE - Production & Project Execution</h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Job walkthrough and scope confirmation checklists</li>
                                <li>• Material coordination and scheduling systems that prevent delays</li>
                                <li>• Mid-job QC processes that catch problems before they become callbacks</li>
                                <li>• Documentation and photo protocols that protect your reputation</li>
                            </ul>
                        </div>

                        {/* <!-- CONTROL --> */}
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3"><Pin className='size-5' /></div>
                                <h3 className="text-xl font-bold text-gray-900">CONTROL - Admin, Finance & Operational Rhythm</h3>
                            </div>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Job costing formulas to protect every margin dollar</li>
                                <li>• Commission tracking and payroll systems your team can trust</li>
                                <li>• Weekly scorecard meetings that drive decisions (not just status updates)</li>
                                <li>• CRM management that actually gets used consistently</li>
                            </ul>
                        </div>

                        {/* <!-- CULTURE --> */}
                        <div className="bg-white rounded-lg p-6 shadow-lg md:col-span-2">
                            <div className="flex items-center mb-4">
                                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3"><Pin className='size-5' />  </div>
                                <h3 className="text-xl font-bold text-gray-900">CULTURE - Leadership, Team Building & Accountability</h3>
                            </div>
                            <div className="grid md:grid-cols-1 gap-4">
                                <ul className="space-y-2 text-gray-700">
                                    <li>• The AEP System: Attitude, Effort, Performance evaluations</li>
                                    <li>• G.U.E.S.S. Leadership Framework for developing leaders, not just laborers</li>
                                </ul>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Peer-to-peer review processes that create accountability without micromanaging</li>
                                    <li>• Hiring and retention strategies that build teams who run through walls for you</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Bonus Materials --> */}
                    <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4"><Gift className='text-yellow-500 size-8' /> BONUS MATERIALS:</h3>
                        <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
                            <li>• One-Page Plan (OPP) templates for 30/90/365-day strategic planning</li>
                            <li>• P&L Forecast Builder to make decisions with data, not gut feelings</li>
                            <li>• Org Chart & Growth Matrix showing exactly who to hire at each revenue level</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhatsInside