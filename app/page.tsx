"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCarousel from "@/components/product-carousel"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const heroSlides = [
    {
      image: "/images/banner1.png?height=500&width=1200",
      title: "Quality packaging for every pizza",
      description:
        "Explore our range of pizza boxes designed to keep your pizzas hot, fresh, and protected during delivery.",
    },
    {
      image: "/images/banner2.png?height=500&width=1200",
      title: "Custom printing solutions",
      description:
        "Stand out from the competition with our custom printed pizza boxes. Perfect for branding your business.",
    },
    {
      image: "/Pizza_Box_Mockup_1.jpg?height=500&width=1200",
      title: "Eco-friendly options",
      description: "Sustainable packaging solutions that are good for your business and better for the environment.",
    },
  ]

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Next/prev slide functions
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  // Newsletter submit
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        duration: 3000,
      })
      setEmail("")
    }
  }

  // Featured products data
  const featuredProducts = [
    { id: 1, name: "Pizza Box Bundle", price: 89.99, image: "/Pizza_Box_Mockup_1.jpg?height=400&width=400" },
    {
      id: 2,
      name: "Premium Pizza Box",
      price: 1.5,
      brand: "New Pack",
      image: "/Pizza_Box_Mockup_2.jpg?height=400&width=400",
    },
    {
      id: 3,
      name: "Eco-Friendly Pizza Box",
      price: 1.25,
      brand: "New Pack",
      image: "/Pizza_Box_Mockup_3.jpg?height=400&width=400",
    },
    { id: 4, name: "Custom Printed Box", price: 1.75, image: "/Pizza_Box_Mockup_4.jpg?height=400&width=400" },
  ]

  // New arrivals data
  const newArrivals = [
    {
      id: 1,
      name: "Standard Pizza Box",
      price: 0.99,
      brand: "New Pack",
      image: "/Pizza_Box_Mockup_5.jpg?height=280&width=280",
    },
    {
      id: 2,
      name: "Pizza Box Divider",
      price: 0.25,
      brand: "New Pack",
      image: "/Pizza_Box_Mockup_4.jpg?height=280&width=280",
    },
    { id: 3, name: "Premium Pizza Box", price: 1.5, brand: "New Pack", image: "/Pizza_Box_Mockup_3.jpg?height=280&width=280" },
    {
      id: 4,
      name: "Insulated Delivery Bag",
      price: 24.99,
      brand: "New Pack",
      image: "/Pizza_Box_Mockup_2.jpg?height=280&width=280",
    },
    { id: 5, name: "Napkins Bundle", price: 3.99, brand: "New Pack", image: "/Pizza_Box_Mockup_1.jpg?height=280&width=280" },
    {
      id: 6,
      name: "Custom Printed Box",
      price: 1.75,
      brand: "New Pack",
      image: "/Pizza_Box_Mockup_4.jpg?height=280&width=280",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/Pizza_Box_Mockup_1.jpg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {slide.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 2 ? (
                    <span key={i}>
                      {word}
                      <br />
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h1>
              <p className="text-white mb-6 max-w-md">{slide.description}</p>
              <Link
                href="/shop"
                className="bg-white text-black px-6 py-2 rounded-full w-fit hover:bg-opacity-90 transition-all"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}

        {/* Slider controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <span className="text-white text-sm">
            {String(activeSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Featured products</h2>
            <p className="text-gray-600">
              Our most popular pizza packaging solutions. Perfect for pizzerias of all sizes.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all"
            >
              View more
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={product.id}
                className="group"
              >
                <div className="aspect-square overflow-hidden bg-[#f5f2ed] rounded-lg mb-3">
                  <Image
                    src={product.image || "/Pizza_Box_Mockup_1.jpg"}
                    alt={product.name}
                    width={400}
                    height={400}
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
      </section>

      {/* New Arrivals - Horizontal Scroll */}
      <ProductCarousel
        title="New arrivals"
        products={newArrivals}
        viewAllLink="/collections/new"
        viewAllText="See all"
      />

      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 bg-[#1a2e0d] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Sign up for our newsletter</h2>
              <p>Stay up to date with the latest products and special offers.</p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full md:w-80 text-black rounded-l-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-3 rounded-r-md hover:bg-gray-800 transition-colors"
                >
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
