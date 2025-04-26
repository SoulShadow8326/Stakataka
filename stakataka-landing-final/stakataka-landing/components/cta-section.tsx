"use client"

import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#010B13] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7851A9]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7851A9]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A1A2A] to-[#010B13] rounded-2xl border border-[#7851A9]/30 p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#EDEDED]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to transform your data center?
          </motion.h2>

          <motion.p
            className="text-lg text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the growing number of forward-thinking companies that are reducing their environmental footprint while
            improving performance with Stakataka.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-40 flex items-center justify-center"
          >
            {/* Image placeholder - you'll add your own image here */}
            <div className="text-center text-[#EDEDED]/60">Image placeholder - you'll add your own image here</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
