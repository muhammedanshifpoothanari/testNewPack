"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock product data
const allProducts = [
  {
    id: 1,
    name: "Pizza Box Divider",
    price: 0.25,
    brand: "New Pack",
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Napkins Bundle",
    price: 3.99,
    brand: "New Pack",
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Insulated Delivery Bag",
    price: 24.99,
    brand: "New Pack",
    category: "delivery",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Sauce Containers (100 pcs)",
    price: 5.99,
    brand: "New Pack",
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Paper Bags (50 pcs)",
    price: 12.99,
    brand: "New Pack",
    category: "bags",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Thermal Delivery Backpack",
    price: 49.99,
    brand: "New Pack",
    category: "delivery",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function PackagingPage() {
  const [products, setProducts] = useState(allProducts)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("featured")
  const [currentPage, setCurrentPage] = useState(1)
  const { toast } = useToast()

  const productsPerPage = 6
  const totalPages = Math.ceil(products.length / productsPerPage)

  // Filter products
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  // Apply filters and sorting
  useEffect(() => {
    let filteredProducts = [...allProducts]

    // Apply category filters
    if (activeFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) => activeFilters.includes(product.category))
    }

    // Apply sorting
    if (sortOption === "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sortOption === "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price)
    } else if (sortOption === "name") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    }

    setProducts(filteredProducts)
    setCurrentPage(1) // Reset to first page when filters change
  }, [activeFilters, sortOption])

  // Get current page products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Quick add to cart
  const quickAddToCart = (product: any) => {
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
      duration: 3000,
    })
  }

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Packaging & Accessories</h1>
          <p className="text-gray-600">Everything you need for your pizza delivery business</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => document.getElementById("filter-sidebar")?.classList.remove("translate-x-full")}
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="hidden md:flex items-center gap-2">
              <button
                className={`border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors ${
                  activeFilters.includes("accessories") ? "bg-black text-white hover:bg-gray-800" : ""
                }`}
                onClick={() => toggleFilter("accessories")}
              >
                Accessories
              </button>
              <button
                className={`border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors ${
                  activeFilters.includes("delivery") ? "bg-black text-white hover:bg-gray-800" : ""
                }`}
                onClick={() => toggleFilter("delivery")}
              >
                Delivery
              </button>
              <button
                className={`border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors ${
                  activeFilters.includes("bags") ? "bg-black text-white hover:bg-gray-800" : ""
                }`}
                onClick={() => toggleFilter("bags")}
              >
                Bags
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative">
              <select
                className="appearance-none border rounded-full px-4 py-2 pr-8 hover:bg-gray-50 transition-colors focus:outline-none"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="group relative">
              <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-gray-900">${product.price.toFixed(2)}</p>
              </Link>
              <button
                className="absolute bottom-16 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => quickAddToCart(product)}
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
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12">
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    currentPage === number ? "bg-black text-white" : "border hover:bg-gray-50"
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              ))}

              <button
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
