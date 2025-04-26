"use client"

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#010B13] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7851A9]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7851A9]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A1A2A] to-[#010B13] rounded-2xl border border-[#7851A9]/30 p-8 md:p-12 text-center opacity-0 translate-y-8 animate-[fadeIn_0.8s_ease-out_forwards]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EDEDED] opacity-0 translate-y-4 animate-[fadeIn_0.6s_ease-out_forwards]">
            Ready to transform your data center?
          </h2>

          <p className="text-lg text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.2s_ease-out_forwards]">
            Join the growing number of forward-thinking companies that are reducing their environmental footprint while
            improving performance with Stakataka.
          </p>

          <div className="opacity-0 translate-y-4 animate-[fadeIn_0.6s_0.4s_ease-out_forwards] h-40 flex items-center justify-center">
            <div className="bg-[#0A1A2A] border border-[#7851A9]/30 rounded-lg p-6 text-[#EDEDED]/60 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#7851A9] mb-2">Stakataka Unit</div>
                <p>Modular, stackable, sustainable data storage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
