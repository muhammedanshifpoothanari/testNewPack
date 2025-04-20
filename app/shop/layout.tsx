"use client"

import type React from "react"

import { useState } from "react"
import FilterSidebar from "./filter-sidebar"

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <>
      <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      {children}

      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="fixed bottom-6 right-6 md:hidden bg-black text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      </button>
    </>
  )
}
