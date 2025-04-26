"use client"

import { Layers, Fingerprint, Shield } from "lucide-react"

const nameReasons = [
  {
    icon: <Layers className="h-10 w-10 text-[#7851A9]" />,
    title: "Modular & Stackable",
    description:
      "Inspired by the concept of stacking blocks — Stakataka units are modular, stackable, and interlocking, just like building blocks.",
  },
  {
    icon: <Fingerprint className="h-10 w-10 text-[#7851A9]" />,
    title: "Strength & Structure",
    description:
      "The name conveys strength, structure, and adaptability, aligning perfectly with the product philosophy.",
  },
  {
    icon: <Shield className="h-10 w-10 text-[#7851A9]" />,
    title: "Reliability & Durability",
    description:
      "The name embodies our commitment to creating storage solutions that stand the test of time with unmatched reliability.",
  },
]

export default function NameSection() {
  return (
    <section className="py-20 bg-[#010B13] relative">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-40 right-40 w-80 h-80 bg-[#7851A9]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            Why the Name <span className="text-[#7851A9]">"Stakataka"</span>?
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Our name reflects our core philosophy and product design principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {nameReasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#010B13] to-[#0A1A2A] p-8 rounded-xl border border-[#7851A9]/20 hover:border-[#7851A9]/50 transition-all duration-300 opacity-0 translate-y-8 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#EDEDED]">{reason.title}</h3>
              <p className="text-[#EDEDED]/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
