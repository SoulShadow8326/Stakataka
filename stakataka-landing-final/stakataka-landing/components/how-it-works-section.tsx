"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Independent Storage Nodes",
    description:
      "Each unit acts as an independent storage node, easily connectable into larger clusters without complex infrastructure.",
  },
  {
    number: "02",
    title: "Passive Cooling System",
    description:
      "Expanded surface fins create natural convection currents that efficiently dissipate heat without active cooling components, drastically reducing energy requirements.",
  },
  {
    number: "03",
    title: "Smart Load Distribution",
    description:
      "Intelligent system manages data flow efficiently across nodes without overloading any single unit, optimizing performance and longevity.",
  },
  {
    number: "04",
    title: "Modular Scaling",
    description:
      "Add or remove units based on real-time needs without downtime, allowing facilities to scale without waste or service interruption.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-[#010B13] relative">
      {/* Background gradient element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#7851A9]/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7851A9]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How <span className="text-[#7851A9]">Stakataka</span> Works
          </motion.h2>
          <motion.p
            className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our revolutionary approach to data storage combines innovative engineering with sustainable design.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[#7851A9]/10 flex items-center justify-center border border-[#7851A9]/30">
                  <span className="text-xl font-bold text-[#7851A9]">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-gradient-to-br from-[#010B13] to-[#0A1A2A] p-6 rounded-xl border border-[#7851A9]/20 w-full">
                <h3 className="text-xl font-bold mb-2 text-[#EDEDED]">{step.title}</h3>
                <p className="text-[#EDEDED]/70">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-8 h-12 w-0.5 bg-gradient-to-b from-[#7851A9]/50 to-transparent hidden md:block"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
