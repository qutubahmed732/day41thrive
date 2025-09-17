import bg from "../images/hero-bg.jpg"
import logo from "../images/logo.png"
import { Workflow, TrendingUp, Clock } from "lucide-react";



function Herosection() {
    return (
        <section className="relative text-white bg-cover bg-center bg-no-repeat h-full md:h-[100svh]" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#34071e]/70 to-black/80"></div>
            <div className="w-full h-full mx-auto px-6 py-5 relative z-10 flex items-center justify-center flex-col">
                <img src={logo} alt="RoofOps41" className="mx-auto h-12 md:h-16 w-auto mb-3" />
                <div className="max-w-4xl my-auto mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl max-w-2xl mx-auto font-bold mb-5">
                        Scale Your Roofing Business Without Losing Your Mind
                    </h1>
                    <p className="text-lg md:text-xl text-balance mb-4 text-blue-100 max-w-2xl mx-auto">
                        The proven SOP system that took roofing companies from $3M to $10M+ without burning out, micromanaging, or sacrificing weekends.
                    </p>

                    {/* <!-- Cover Image Placeholder --> */}
                    <div className="bg-[#34071e] rounded-lg p-8 mb-5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-[#34071e]/50 to-transparent"></div>
                        <div className="relative z-10 text-center text-balance">
                            <p className="text-2xl font-semibold mb-2">From Chaos to Control</p>
                            <p className="text-blue-100">Professional roofing crew working systematically - materials staged, uniforms branded, controlled professionalism</p>
                        </div>
                    </div>

                    {/* <!-- Benefits --> */}
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                            <div className="text-green-400 text-2xl mb-3"><Workflow className="mx-auto" size={35} /></div>
                            <h3 className="font-semibold mb-2">Stop Being the Bottleneck</h3>
                            <p className="text-blue-100">Build systems that run without you in the room</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                            <div className="text-green-400 text-2xl mb-3"><TrendingUp className="mx-auto" size={35} /></div>
                            <h3 className="font-semibold mb-2">Predictable Profit Growth</h3>
                            <p className="text-blue-100">Turn operational chaos into scalable revenue streams</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                            <div className="text-green-400 text-2xl mb-3"><Clock className="mx-auto" size={35} /></div>
                            <h3 className="font-semibold mb-2">Keep Your Weekends</h3>
                            <p className="text-blue-100">Lead your business instead of being trapped by it</p>
                        </div>
                    </div>

                    <a href="#form" className="inline-block bg-[#ff349d] hover:bg-[#e62f8d] text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg">
                        Get The Complete RoofOps41 System Now
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Herosection