"use client"

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            How <span className="text-[#7851A9]">Stakataka</span> Works
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Our revolutionary approach to data storage combines innovative engineering with sustainable design.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 relative opacity-0 -translate-x-8 animate-[slideInRight_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
