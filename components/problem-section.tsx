"use client"

import { AlertTriangle, Zap, Thermometer, Maximize2, Trash2, Clock } from "lucide-react"

const problems = [
  {
    icon: <Zap className="h-8 w-8 text-[#ED2939]" />,
    title: "Massive Energy Consumption",
    description:
      "Traditional data centers consume enormous amounts of energy, contributing heavily to carbon emissions.",
  },
  {
    icon: <Thermometer className="h-8 w-8 text-[#ED2939]" />,
    title: "Complex Cooling Systems",
    description: "Expensive and complex cooling infrastructure that requires constant maintenance and energy.",
  },
  {
    icon: <Maximize2 className="h-8 w-8 text-[#ED2939]" />,
    title: "Inefficient Space Usage",
    description: "Physical footprint keeps expanding with inefficient space usage and poor scalability.",
  },
  {
    icon: <Trash2 className="h-8 w-8 text-[#ED2939]" />,
    title: "Non-Recyclable Materials",
    description: "Dependence on non-recyclable materials leading to significant e-waste and environmental damage.",
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-[#ED2939]" />,
    title: "High Operational Costs",
    description: "Excessive costs due to energy consumption, maintenance requirements, and scaling inefficiencies.",
  },
  {
    icon: <Clock className="h-8 w-8 text-[#ED2939]" />,
    title: "Limited Scalability",
    description:
      "Traditional systems require significant downtime and planning for expansion, limiting business agility.",
  },
]

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#010B13] relative">
      {/* Background gradient element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ED2939]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            The <span className="text-[#ED2939]">Problem</span> with Traditional Data Centers
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Today's data centers face critical challenges that impact both business efficiency and environmental
            sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#010B13] to-[#0A1A2A] p-8 rounded-xl border border-[#ED2939]/20 hover:border-[#ED2939]/40 transition-all duration-300 opacity-0 translate-y-8 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#EDEDED]">{problem.title}</h3>
              <p className="text-[#EDEDED]/70">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
