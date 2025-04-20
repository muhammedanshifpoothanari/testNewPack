import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"

export default function AccessoriesPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Accessories</h1>
          <p className="text-gray-600">Browse our collection of plant accessories and care products</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <div className="hidden md:flex items-center gap-2">
              <button className="border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">Type</button>
              <button className="border rounded-full px-4 py-2 hover:bg-gray-50 transition-colors">Brand</button>
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
          {/* Product 1 - Spray Bottle */}
          <Link href="/product/spray-bottle" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Spray Bottle"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Spray Bottle</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$15.00</p>
          </Link>

          {/* Product 2 - Tote Bag */}
          <Link href="/product/tote-bag" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Tote Bag"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Tote Bag</h3>
            <p className="text-sm text-gray-600">Planted</p>
            <p className="text-gray-900">$40.00</p>
          </Link>

          {/* Product 3 - The Planter */}
          <Link href="/product/the-planter" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="The Planter"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">The Planter by Rustic Roots</h3>
            <p className="text-sm text-gray-600">Rustic Roots</p>
            <p className="text-gray-900">$55.00</p>
          </Link>

          {/* Product 4 - The Cylinder */}
          <Link href="/product/the-cylinder" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="The Cylinder"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">The Cylinder by Modern Botany</h3>
            <p className="text-sm text-gray-600">Modern Botany</p>
            <p className="text-gray-900">$35.00</p>
          </Link>

          {/* Product 5 - Plant Food */}
          <Link href="/product/plant-food" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Plant Food"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Plant Food</h3>
            <p className="text-sm text-gray-600">Rustic Roots</p>
            <p className="text-gray-900">$22.00</p>
          </Link>

          {/* Product 6 - Watering Can */}
          <Link href="/product/watering-can" className="group">
            <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Watering Can"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium">Watering Can</h3>
            <p className="text-sm text-gray-600">Modern Botany</p>
            <p className="text-gray-900">$28.00</p>
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
              &gt;
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
