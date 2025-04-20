"use client"

import { useState } from "react"
import { X, Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mock cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Standard Pizza Box",
      price: 0.99,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 100,
    },
    {
      id: 2,
      name: "Pizza Box Divider",
      price: 0.25,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 50,
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15.99
  const total = subtotal + shipping

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-white p-6 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button
              onClick={onClose}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b">
                  <div className="w-20 h-20 bg-[#f5f2ed] rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-900 mb-2">${item.price.toFixed(2)} each</p>
                    <div className="flex items-center border rounded-md w-fit">
                      <button
                        className="px-2 py-1 hover:bg-gray-100 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 10)}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <button
                        className="px-2 py-1 hover:bg-gray-100 transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 10)}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-8">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center py-3 text-gray-500 hover:text-black transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
