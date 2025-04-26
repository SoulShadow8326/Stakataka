import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#010B13] border-t border-[#7851A9]/20 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#7851A9] to-[#FFD700] bg-clip-text text-transparent">
                Stakataka
              </span>
            </Link>
            <p className="text-[#EDEDED]/70 mb-4">Stack Smarter. Store Greener.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#EDEDED]/60 hover:text-[#7851A9] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#EDEDED]/60 hover:text-[#7851A9] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#EDEDED]/60 hover:text-[#7851A9] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-[#EDEDED]/60 hover:text-[#7851A9] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#EDEDED]/60 hover:text-[#7851A9] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[#EDEDED] font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Stakataka Core
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Stakataka Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Stakataka Cloud
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#EDEDED] font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  White Papers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#EDEDED] font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#EDEDED]/70 hover:text-[#FFD700] transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#EDEDED]/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#EDEDED]/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stakataka. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-[#EDEDED]/60 hover:text-[#EDEDED] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#EDEDED]/60 hover:text-[#EDEDED] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#EDEDED]/60 hover:text-[#EDEDED] text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
