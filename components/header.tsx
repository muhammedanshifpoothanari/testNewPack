"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import SearchModal from "./search-modal"
import CartSidebar from "./cart-sidebar"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-4 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="flex items-center">
              <Image src="/images/newPackLogo.png" alt="New Pack" width={120} height={40} priority />
            </Link>
          </div>

          <nav
            className={`${
              isMobileMenuOpen
                ? "absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4"
                : "hidden md:flex items-center space-x-8"
            }`}
          >
            <Link href="/shop" className={`hover:underline ${pathname === "/shop" ? "font-medium" : ""}`}>
              Shop All
            </Link>
            <Link href="/pizza-boxes" className={`hover:underline ${pathname === "/pizza-boxes" ? "font-medium" : ""}`}>
              Pizza Boxes
            </Link>
            <Link href="/packaging" className={`hover:underline ${pathname === "/packaging" ? "font-medium" : ""}`}>
              Packaging
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Account" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              aria-label="Cart"
              className="p-1 hover:bg-gray-100 rounded-full transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
