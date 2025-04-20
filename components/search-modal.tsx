"use client"

import { useState, useEffect, useRef } from "react"
import { X, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Mock search functionality
  useEffect(() => {
    if (searchQuery.length > 2) {
      // Simulate API call with mock data
      const mockProducts = [
        {
          id: 1,
          name: "Standard Pizza Box",
          price: 0.99,
          brand: "New Pack",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          id: 2,
          name: "Premium Pizza Box",
          price: 1.5,
          brand: "New Pack",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          id: 3,
          name: "Pizza Box Divider",
          price: 0.25,
          brand: "New Pack",
          image: "/placeholder.svg?height=80&width=80",
        },
      ]

      const filteredResults = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setSearchResults(filteredResults)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] overflow-auto">
        <div className="p-4 border-b flex items-center">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products..."
            className="flex-1 outline-none text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          {searchQuery.length > 2 && searchResults.length === 0 && (
            <p className="text-gray-500">No results found for "{searchQuery}"</p>
          )}

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500">{searchResults.length} results found</p>

              {searchResults.map((product) => (
                <Link
                  href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={product.id}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <div className="w-20 h-20 bg-[#f5f2ed] rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                    <p className="text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {searchQuery.length <= 2 && (
            <div>
              <p className="text-gray-500 mb-4">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                <button
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  onClick={() => setSearchQuery("pizza")}
                >
                  Pizza Boxes
                </button>
                <button
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  onClick={() => setSearchQuery("custom")}
                >
                  Custom Packaging
                </button>
                <button
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  onClick={() => setSearchQuery("eco")}
                >
                  Eco-Friendly
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
