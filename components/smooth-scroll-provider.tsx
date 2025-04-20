"use client"

import { useEffect, useRef, type ReactNode } from "react"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<any>(null)

  useEffect(() => {
    let LocomotiveScroll: any

    const initScroll = async () => {
      const module = await import("locomotive-scroll")
      LocomotiveScroll = module.default

      if (containerRef.current) {
        locomotiveScrollRef.current = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
          lerp: 0.07,
          multiplier: 1.0,
        })
      }
    }

    initScroll()

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
