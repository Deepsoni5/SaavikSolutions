import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

export default function Navbar() {
  return (
    <header className="w-full bg-black py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="text-xl font-bold uppercase text-white">LOGO</div>
        <div className="hidden items-center space-x-8 md:flex">
          <Link href="/" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            HOME
          </Link>
          <Link href="/about" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            ABOUT US
          </Link>
          <Link href="/services" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            SERVICES
          </Link>
          <Link href="/careers" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            CAREERS
          </Link>
          <Link href="/blogs" className="text-sm font-medium uppercase text-white hover:text-gray-300">
            BLOG
          </Link>
          <Link href="/contact-us">
            <Button className="rounded-full bg-red-600 px-6 py-2 text-sm font-medium uppercase text-white hover:bg-red-700">
              GET A QUOTE
            </Button>
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <Link href="/contact-us">
            <Button className="rounded-full bg-red-600 px-4 py-2 text-xs font-medium uppercase text-white hover:bg-red-700">
              GET A QUOTE
            </Button>
          </Link>
          <div className="ml-4">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

