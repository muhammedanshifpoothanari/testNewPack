"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface HorizontalScrollProps {
  children: ReactNode
  className?: string
}

export default function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const scrollElement = scrollRef.current
    const contentElement = contentRef.current

    if (!scrollElement || !contentElement) return

    // Get the width of the content
    const contentWidth = contentElement.scrollWidth
    const containerWidth = scrollElement.offsetWidth

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollElement,
        start: "top top",
        end: `+=${contentWidth - containerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    tl.to(contentElement, {
      x: -(contentWidth - containerWidth),
      ease: "none",
    })

    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={scrollRef} className={`overflow-hidden ${className}`}>
      <div ref={contentRef} className="flex">
        {children}
      </div>
    </div>
  )
}
