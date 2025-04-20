"use client"

import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"

export default function PlantsPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Plants</h1>
          <p className="text-gray-600">Browse our collection of beautiful indoor plants</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="hidden md:flex items-center gap-2">
              <button className="border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">Size</button>
              <button className="border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">Light</button>
              <button className="border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">Price</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
              <span>Featured</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product 1 - Snake Plant */}
          <Link href="/product/snake-plant" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Snake Plant"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Snake Plant</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$109.99</p>
          </Link>

          {/* Product 2 - ZZ Plant */}
          <Link href="/product/zz-plant" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="ZZ Plant"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">ZZ Plant</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$80.00</p>
          </Link>

          {/* Product 3 - Sansevieria */}
          <Link href="/product/sansevieria" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Sansevieria"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Sansevieria</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$45.00</p>
          </Link>

          {/* Product 4 - Monstera */}
          <Link href="/product/monstera" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Monstera"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Monstera</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$65.00</p>
          </Link>

          {/* Product 5 - Pothos */}
          <Link href="/product/pothos" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Pothos"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Pothos</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$35.00</p>
          </Link>

          {/* Product 6 - Fiddle Leaf Fig */}
          <Link href="/product/fiddle-leaf-fig" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Fiddle Leaf Fig"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Fiddle Leaf Fig</h3>
            <p className="text-sm text-gray-600">Modern Botany</p>
            <p className="text-gray-900">$120.00</p>
          </Link>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors">
              &lt;
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
