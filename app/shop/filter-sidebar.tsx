"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function FilterSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [categories, setCategories] = useState({
    pizzaBoxes: false,
    accessories: false,
    ecofriendly: false,
    custom: false,
  })
  const [sizes, setSizes] = useState({
    small: false,
    medium: false,
    large: false,
    extraLarge: false,
  })
  const [materials, setMaterials] = useState({
    standard: false,
    premium: false,
    recycled: false,
  })

  // Apply filters
  const applyFilters = () => {
    // In a real app, this would update a global state or context
    // For now, we'll just close the sidebar
    onClose()
  }

  // Clear all filters
  const clearFilters = () => {
    setPriceRange([0, 100])
    setCategories({
      pizzaBoxes: false,
      accessories: false,
      ecofriendly: false,
      custom: false,
    })
    setSizes({
      small: false,
      medium: false,
      large: false,
      extraLarge: false,
    })
    setMaterials({
      standard: false,
      premium: false,
      recycled: false,
    })
  }

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

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        id="filter-sidebar"
        className={`absolute top-0 left-0 bottom-0 w-full sm:w-96 bg-white p-6 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filter</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6 border-b pb-6">
          <h3 className="font-medium mb-4">Categories</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={categories.pizzaBoxes}
                onChange={() => setCategories({ ...categories, pizzaBoxes: !categories.pizzaBoxes })}
              />
              <span>Pizza Boxes (24)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={categories.accessories}
                onChange={() => setCategories({ ...categories, accessories: !categories.accessories })}
              />
              <span>Accessories (12)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={categories.ecofriendly}
                onChange={() => setCategories({ ...categories, ecofriendly: !categories.ecofriendly })}
              />
              <span>Eco-Friendly (8)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={categories.custom}
                onChange={() => setCategories({ ...categories, custom: !categories.custom })}
              />
              <span>Custom Printing (6)</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6 border-b pb-6">
          <h3 className="font-medium mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>${priceRange[0].toFixed(2)}</span>
              <span>${priceRange[1].toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6 border-b pb-6">
          <h3 className="font-medium mb-4">Box Size</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={sizes.small}
                onChange={() => setSizes({ ...sizes, small: !sizes.small })}
              />
              <span>10" (18)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={sizes.medium}
                onChange={() => setSizes({ ...sizes, medium: !sizes.medium })}
              />
              <span>12" (24)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={sizes.large}
                onChange={() => setSizes({ ...sizes, large: !sizes.large })}
              />
              <span>14" (16)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={sizes.extraLarge}
                onChange={() => setSizes({ ...sizes, extraLarge: !sizes.extraLarge })}
              />
              <span>16" & 18" (12)</span>
            </label>
          </div>
        </div>

        {/* Material */}
        <div className="mb-6">
          <h3 className="font-medium mb-4">Material</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={materials.standard}
                onChange={() => setMaterials({ ...materials, standard: !materials.standard })}
              />
              <span>Standard Cardboard (32)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={materials.premium}
                onChange={() => setMaterials({ ...materials, premium: !materials.premium })}
              />
              <span>Premium Corrugated (14)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded"
                checked={materials.recycled}
                onChange={() => setMaterials({ ...materials, recycled: !materials.recycled })}
              />
              <span>Recycled Material (8)</span>
            </label>
          </div>
        </div>

        {/* Apply Filters Button */}
        <div className="mt-8">
          <button
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
          <button
            className="w-full text-center py-3 text-gray-500 hover:text-black transition-colors"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  )
}
