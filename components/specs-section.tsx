"use client"

const specifications = [
  { name: "Dimensions", value: "45cm × 45cm × 15cm per unit" },
  { name: "Material", value: "Recyclable Aluminum Alloy" },
  { name: "Passive Cooling Surface Area", value: "1,250 cm²" },
  { name: "Power Draw Range", value: "5-25W per unit" },
  { name: "Storage Capacity", value: "Up to 24TB per unit" },
  { name: "Weight", value: "3.2kg per unit" },
  { name: "Operating Temperature", value: "-5°C to 45°C" },
  { name: "Connectivity", value: "10GbE, 40GbE, Fiber Channel" },
]

export default function SpecsSection() {
  return (
    <section id="specs" className="py-20 bg-[#010B13] relative">
      {/* Background gradient element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-40 right-0 w-80 h-80 bg-[#7851A9]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            Technical <span className="text-[#7851A9]">Specifications</span>
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Engineered for optimal performance with sustainable materials and energy-efficient design.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#010B13] to-[#0A1A2A] rounded-xl border border-[#7851A9]/20 overflow-hidden opacity-0 translate-y-8 animate-[fadeIn_0.8s_ease-out_forwards]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="p-4 border-b border-[#EDEDED]/10 last:border-b-0 opacity-0 translate-y-4 animate-[fadeIn_0.4s_ease-out_forwards]"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-[#7851A9] font-medium mb-1">{spec.name}</div>
                <div className="text-[#EDEDED]">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#7851A9]/10 p-6 text-center">
            <p className="text-[#EDEDED]/80 text-sm">
              All specifications are subject to change. Contact our team for the most up-to-date information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
