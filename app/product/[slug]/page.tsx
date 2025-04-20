"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronLeft, ChevronRight, Minus, Plus, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(100)
  const [activeImage, setActiveImage] = useState(0)
  const [isSpecsOpen, setIsSpecsOpen] = useState(false)
  const { toast } = useToast()

  // Mock product data
  const product = {
    name: "Standard Pizza Box",
    price: 0.99,
    description:
      "Our Standard Pizza Box is designed for durability and functionality. Made from high-quality corrugated cardboard, these boxes keep your pizzas hot and protected during delivery. The classic design features a clean white exterior that's perfect for custom printing or branding. Available in multiple sizes to accommodate different pizza dimensions.",
    details: [
      'Dimensions: 12" x 12" x 1.75" (also available in 10", 14", 16", and 18")',
      "Material: B-flute corrugated cardboard",
      "Color: White exterior/natural interior",
      "Grease-resistant coating",
      "Stackable design",
      "Minimum order: 100 units",
    ],
    specs: {
      Material: "Food-grade corrugated cardboard",
      Thickness: "3mm B-flute",
      "Weight Capacity": "Up to 2kg",
      "Temperature Resistance": "Maintains heat up to 85°C",
      Recyclable: "Yes, 100% recyclable",
      Customization: "Available for orders over 500 units",
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Premium Pizza Box",
        price: 1.5,
        brand: "New Pack",
        image: "/placeholder.svg?height=280&width=280",
      },
      {
        id: 2,
        name: "Pizza Box Divider",
        price: 0.25,
        brand: "New Pack",
        image: "/placeholder.svg?height=280&width=280",
      },
      {
        id: 3,
        name: "Eco-Friendly Pizza Box",
        price: 1.25,
        brand: "New Pack",
        image: "/placeholder.svg?height=280&width=280",
      },
      {
        id: 4,
        name: "Pizza Box Bundle",
        price: 89.99,
        brand: "New Pack",
        image: "/placeholder.svg?height=280&width=280",
      },
    ],
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 10)
  const decrementQuantity = () => setQuantity((prev) => (prev > 10 ? prev - 10 : 10))

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
      duration: 3000,
    })
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="flex gap-4">
                <div className="hidden md:flex flex-col gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`w-16 h-16 border rounded-md overflow-hidden hover:border-black transition-colors ${
                        activeImage === index ? "border-black" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                <div className="flex-1 aspect-square bg-[#f5f2ed] rounded-lg overflow-hidden relative">
                  <Image
                    src={product.images[activeImage] || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />

                  {/* Mobile image navigation */}
                  <div className="md:hidden absolute inset-0 flex items-center justify-between">
                    <button
                      onClick={prevImage}
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 ml-2 hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 mr-2 hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`w-4 h-4 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
              <span className="ml-1 text-sm">4.0 (38 reviews)</span>
            </div>

            <p className="text-2xl font-bold mb-6">
              ${product.price.toFixed(2)} <span className="text-sm font-normal text-gray-600">per unit</span>
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-2 hover:bg-gray-100 transition-colors" onClick={decrementQuantity}>
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-16 text-center">{quantity}</span>
                <button className="px-3 py-2 hover:bg-gray-100 transition-colors" onClick={incrementQuantity}>
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                className="flex-1 bg-[#c1f467] text-black py-3 rounded-full hover:bg-opacity-90 transition-all"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>

            <div className="prose max-w-none">
              <p className="mb-4">{product.description}</p>

              {product.details.map((detail, index) => (
                <p key={index} className={index === product.details.length - 1 ? "mb-4" : "mb-1"}>
                  • {detail}
                </p>
              ))}

              <p className="text-sm italic mb-8">
                Bulk discounts available for orders over 1,000 units. Contact our sales team for custom printing
                options.
              </p>

              <div className="border-t pt-4">
                <button
                  className="flex items-center justify-between w-full py-2 font-medium"
                  onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                >
                  <span>SPECIFICATIONS</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isSpecsOpen ? "rotate-180" : ""}`} />
                </button>

                {isSpecsOpen && (
                  <div className="mt-4 space-y-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="font-medium">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 mb-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Related products</h2>
            <Link href="/shop" className="text-black font-medium hover:underline">
              Shop all
            </Link>
          </div>

          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex space-x-6 pb-4 w-max">
                {product.relatedProducts.map((item) => (
                  <Link
                    href={`/product/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    key={item.id}
                    className="w-[280px] flex-shrink-0 group"
                  >
                    <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={280}
                        height={280}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <p className="text-gray-900">${item.price.toFixed(2)}</p>
                  </Link>
                ))}
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
              onClick={nextImage}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-16 mb-8 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">
            Reviews <span className="font-normal">38</span>
          </h2>
          <div className="flex items-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className={`w-4 h-4 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
            ))}
            <span className="ml-2 text-sm">4.0 out of 5</span>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Write a review
          </button>
        </section>
      </div>
    </main>
  )
}
