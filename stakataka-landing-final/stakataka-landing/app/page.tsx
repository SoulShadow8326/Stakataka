import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import ComparisonSection from "@/components/comparison-section"
import SpecsSection from "@/components/specs-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import ProblemSection from "@/components/problem-section"
import NameSection from "@/components/name-section"
import PricingSection from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010B13] text-[#EDEDED]">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <NameSection />
        <HowItWorksSection />
        <ComparisonSection />
        <SpecsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
