import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Planted - Indoor Plants for Every Space",
  description: "Discover beautiful indoor plants for your home or office.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
