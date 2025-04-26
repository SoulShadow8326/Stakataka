"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-[#010B13]/90 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#7851A9] to-[#FFD700] bg-clip-text text-transparent">
              Stakataka
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[#EDEDED] hover:text-[#FFD700] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-[#EDEDED] hover:text-[#FFD700] transition-colors">
              How It Works
            </Link>
            <Link href="#comparison" className="text-[#EDEDED] hover:text-[#FFD700] transition-colors">
              Comparison
            </Link>
            <Link href="#specs" className="text-[#EDEDED] hover:text-[#FFD700] transition-colors">
              Specs
            </Link>
            <Button
              className="bg-[#7851A9] hover:bg-[#7851A9]/90 text-[#EDEDED] border-none"
              onClick={() => {
                const footer = document.querySelector("footer")
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#EDEDED]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-[#EDEDED] hover:text-[#FFD700] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-[#EDEDED] hover:text-[#FFD700] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#comparison"
              className="text-[#EDEDED] hover:text-[#FFD700] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comparison
            </Link>
            <Link
              href="#specs"
              className="text-[#EDEDED] hover:text-[#FFD700] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Specs
            </Link>
            <Button
              className="bg-[#7851A9] hover:bg-[#7851A9]/90 text-[#EDEDED] border-none w-full"
              onClick={() => {
                setIsMenuOpen(false)
                const footer = document.querySelector("footer")
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
