"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  brand?: string
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  viewAllLink?: string
  viewAllText?: string
}

export default function ProductCarousel({
  title,
  products,
  viewAllLink = "/shop",
  viewAllText = "Shop all",
}: ProductCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Calculate max scroll value
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.clientWidth
      const contentWidth = contentRef.current.scrollWidth
      setMaxScroll(contentWidth - containerWidth)
    }
  }, [products])

  // Scroll functions
  const scrollLeft = () => {
    if (containerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 600)
      containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      const newPosition = Math.min(maxScroll, scrollPosition + 600)
      containerRef.current.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  // Update scroll position on manual scroll
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      return () => container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <Link href={viewAllLink} className="text-black font-medium hover:underline">
            {viewAllText}
          </Link>
        </div>

        <div className="relative">
          <div ref={containerRef} className="overflow-x-auto hide-scrollbar pb-4 cursor-grab active:cursor-grabbing">
            <div ref={contentRef} className="flex space-x-6 w-max">
              {products.map((product) => (
                <Link
                  href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={product.id}
                  className="w-[280px] flex-shrink-0 group"
                >
                  <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium">{product.name}</h3>
                  {product.brand && <p className="text-sm text-gray-600">{product.brand}</p>}
                  <p className="text-gray-900">${product.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>

          {scrollPosition > 0 && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {scrollPosition < maxScroll && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
