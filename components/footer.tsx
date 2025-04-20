import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="mb-4">
              <Image src="/images/newPackLogo.png" alt="New Pack" width={120} height={40} />
            </div>
            <div className="space-y-2">
              <p>Contact Us</p>
              <p>123 Packaging St, Industrial Zone, UAE</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/pizza-boxes" className="hover:underline">
                  Pizza Boxes
                </Link>
              </li>
              <li>
                <Link href="/packaging" className="hover:underline">
                  Packaging
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/standard" className="hover:underline">
                  Standard Boxes
                </Link>
              </li>
              <li>
                <Link href="/collections/premium" className="hover:underline">
                  Premium Boxes
                </Link>
              </li>
              <li>
                <Link href="/collections/eco-friendly" className="hover:underline">
                  Eco-Friendly
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 New Pack - All rights reserved</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <div className="w-6 h-6 border rounded flex items-center justify-center">
              <span className="sr-only">Visa</span>
              <span className="text-xs">V</span>
            </div>
            <div className="w-6 h-6 border rounded flex items-center justify-center">
              <span className="sr-only">Mastercard</span>
              <span className="text-xs">M</span>
            </div>
            <div className="w-6 h-6 border rounded flex items-center justify-center">
              <span className="sr-only">PayPal</span>
              <span className="text-xs">P</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
