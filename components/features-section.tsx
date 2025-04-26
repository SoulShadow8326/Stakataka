"use client"

import { Wind, Layers, LayoutGrid, Thermometer, Battery, Recycle } from "lucide-react"

const features = [
  {
    icon: <Wind className="h-10 w-10 text-[#7851A9]" />,
    title: "High-Efficiency Passive Cooling",
    description:
      "Layered airflow fins for ultra-low energy cooling, with 1,250 cm² surface area per unit for thermal regulation without active fans.",
  },
  {
    icon: <Layers className="h-10 w-10 text-[#7851A9]" />,
    title: "Modular Heat Pipe Arrays",
    description:
      "Efficient copper-based thermal routing system that maximizes heat dissipation and eliminates hotspots.",
  },
  {
    icon: <LayoutGrid className="h-10 w-10 text-[#7851A9]" />,
    title: "Stackable Unit Architecture",
    description:
      "Scalable, high-density vertical system with elegant 45×45×15 cm dimensions that optimizes space utilization.",
  },
  {
    icon: <Thermometer className="h-10 w-10 text-[#7851A9]" />,
    title: "Low Thermal Emissions",
    description:
      "Reduces HVAC load drastically, with no moving parts for cooling resulting in less mechanical failure and longer life.",
  },
  {
    icon: <Battery className="h-10 w-10 text-[#7851A9]" />,
    title: "Power-Aware Operation",
    description:
      "Adaptive power saving with ultra-low 5-25W per unit under full operation, intelligently managing energy consumption.",
  },
  {
    icon: <Recycle className="h-10 w-10 text-[#7851A9]" />,
    title: "Material-Conscious Build",
    description:
      "95% recyclable at end-of-life with fully recyclable aluminum alloy construction and zero biotic material.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#010B13]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            Revolutionary <span className="text-[#7851A9]">Features</span>
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Stakataka combines cutting-edge technology with sustainable design to deliver unparalleled performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#010B13] to-[#0A1A2A] p-8 rounded-xl border border-[#7851A9]/20 hover:border-[#7851A9]/50 transition-all duration-300 group opacity-0 translate-y-8 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EDEDED] group-hover:text-[#FFD700] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#EDEDED]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
