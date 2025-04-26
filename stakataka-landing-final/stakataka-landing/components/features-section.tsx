"use client"

import { motion } from "framer-motion"
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
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Revolutionary <span className="text-[#7851A9]">Features</span>
          </motion.h2>
          <motion.p
            className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stakataka combines cutting-edge technology with sustainable design to deliver unparalleled performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#010B13] to-[#0A1A2A] p-8 rounded-xl border border-[#7851A9]/20 hover:border-[#7851A9]/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(120, 81, 169, 0.3)" }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#EDEDED] group-hover:text-[#FFD700] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#EDEDED]/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
