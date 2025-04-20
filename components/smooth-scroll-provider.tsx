"use client"

import { useEffect, useRef, type ReactNode } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize Locomotive Scroll
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      lerp: 0.07, // Linear interpolation, adjust for smoother/slower scrolling
      multiplier: 1.0, // Scroll speed multiplier
    })

    // Clean up
    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [])

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  )
}
