"use client"

import { Check, X } from "lucide-react"

const comparisonData = [
  {
    category: "Energy Efficiency",
    stakataka: "90% less energy consumption",
    traditional: "High energy consumption",
    stakatakaIcon: <Check className="h-5 w-5 text-[#FFD700]" />,
    traditionalIcon: <X className="h-5 w-5 text-[#ED2939]" />,
  },
  {
    category: "Cooling Requirements",
    stakataka: "Passive cooling system",
    traditional: "Active cooling required",
    stakatakaIcon: <Check className="h-5 w-5 text-[#FFD700]" />,
    traditionalIcon: <X className="h-5 w-5 text-[#ED2939]" />,
  },
  {
    category: "Expandability",
    stakataka: "Modular, stackable design",
    traditional: "Fixed configurations",
    stakatakaIcon: <Check className="h-5 w-5 text-[#FFD700]" />,
    traditionalIcon: <X className="h-5 w-5 text-[#ED2939]" />,
  },
  {
    category: "Environmental Impact",
    stakataka: "Fully recyclable materials",
    traditional: "Mixed materials, difficult to recycle",
    stakatakaIcon: <Check className="h-5 w-5 text-[#FFD700]" />,
    traditionalIcon: <X className="h-5 w-5 text-[#ED2939]" />,
  },
  {
    category: "Operational Cost",
    stakataka: "75% lower lifetime cost",
    traditional: "High maintenance and energy costs",
    stakatakaIcon: <Check className="h-5 w-5 text-[#FFD700]" />,
    traditionalIcon: <X className="h-5 w-5 text-[#ED2939]" />,
  },
]

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 bg-[#010B13]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            Why Choose <span className="text-[#7851A9]">Stakataka</span>?
          </h2>
          <p className="text-lg text-[#EDEDED]/80 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            See how Stakataka outperforms traditional data center storage solutions across key metrics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto opacity-0 translate-y-8 animate-[fadeIn_0.8s_ease-out_forwards]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-[#EDEDED] font-medium">Category</th>
                <th className="py-4 px-6 text-center bg-[#7851A9]/10 text-[#7851A9] font-bold rounded-tl-lg">
                  Stakataka
                </th>
                <th className="py-4 px-6 text-center bg-[#010B13] text-[#EDEDED]/70 font-medium rounded-tr-lg border-t border-r border-[#EDEDED]/10">
                  Traditional Storage
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b border-[#EDEDED]/10 last:border-b-0">
                  <td className="py-4 px-6 text-[#EDEDED]">{item.category}</td>
                  <td className="py-4 px-6 text-center bg-[#7851A9]/5 text-[#EDEDED]">
                    <div className="flex items-center justify-center gap-2">
                      {item.stakatakaIcon}
                      <span>{item.stakataka}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-[#EDEDED]/70 border-r border-[#EDEDED]/10">
                    <div className="flex items-center justify-center gap-2">
                      {item.traditionalIcon}
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 text-center bg-[#7851A9]/10 rounded-bl-lg">
                  <span className="text-[#FFD700] font-bold">Recommended</span>
                </td>
                <td className="py-4 px-6 text-center border-b border-r border-[#EDEDED]/10 rounded-br-lg"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}
