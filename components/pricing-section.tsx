"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Single Unit",
    price: "$1,599",
    description: "Perfect for small businesses or personal projects",
    features: [
      "Up to 24TB storage capacity",
      "Full passive cooling system",
      "Standard 1-year warranty",
      "Basic setup guide",
    ],
  },
  {
    name: "Starter Pack",
    price: "$7,499",
    description: "Ideal for growing businesses with expanding storage needs",
    features: [
      "5 Units (up to 120TB total)",
      "Setup Software included",
      "Extended 2-year warranty",
      "Priority technical support",
      "Free shipping",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Pack",
    price: "$34,999",
    description: "Complete solution for enterprise-level data storage",
    features: [
      "25 Units (up to 600TB total)",
      "Complete Rack System",
      "On-Site Support & Installation",
      "5-year extended warranty",
      "Dedicated account manager",
      "Custom configuration options",
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-[#010B13] relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7851A9]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            <span className="text-[#7851A9]">Pricing</span> Options
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Flexible pricing to meet your organization's needs with our sustainability program offering trade-in
            recycling credits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#010B13] to-[#0A1A2A] rounded-xl border ${
                plan.highlighted ? "border-[#FFD700] shadow-lg shadow-[#FFD700]/10" : "border-[#7851A9]/20"
              } overflow-hidden transition-all duration-300 opacity-0 translate-y-8 animate-[fadeIn_0.5s_ease-out_forwards]`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="bg-[#FFD700] text-[#010B13] text-center py-1 font-medium">Most Popular</div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-[#EDEDED]">{plan.name}</h3>
                <p className="text-[#EDEDED]/70 mb-4 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#EDEDED]">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[#7851A9] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EDEDED]/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#010B13]"
                      : "bg-[#7851A9] hover:bg-[#7851A9]/90 text-[#EDEDED]"
                  } font-medium`}
                  onClick={() => {
                    const footer = document.querySelector("footer")
                    if (footer) {
                      footer.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.5s_ease-out_forwards]">
          <p className="text-[#EDEDED]/80">
            <span className="text-[#7851A9] font-medium">Sustainability Program:</span> Old units eligible for trade-in
            recycling credits.
          </p>
        </div>
      </div>
    </section>
  )
}
