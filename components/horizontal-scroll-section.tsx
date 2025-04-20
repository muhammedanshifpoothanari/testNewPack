"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface HorizontalScrollSectionProps {
  children: ReactNode
  title: string
  viewAllLink?: string
  viewAllText?: string
}

export default function HorizontalScrollSection({
  children,
  title,
  viewAllLink = "#",
  viewAllText = "See all",
}: HorizontalScrollSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const scrollElement = scrollRef.current
    const contentElement = contentRef.current

    if (!scrollElement || !contentElement) return

    // Create smooth scrolling for touch devices
    const handleWheel = (e: WheelEvent) => {
      if (scrollElement) {
        e.preventDefault()
        scrollElement.scrollLeft += e.deltaY
      }
    }

    scrollElement.addEventListener("wheel", handleWheel)

    // Add smooth scroll effect
    const items = contentElement.children

    // Animate items when they come into view
    Array.from(items).forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "left right",
            end: "right left",
            toggleActions: "play none none reverse",
            horizontal: true,
            containerAnimation: ScrollTrigger.create({
              trigger: scrollElement,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            }).animation,
          },
        },
      )
    })

    return () => {
      scrollElement.removeEventListener("wheel", handleWheel)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <a href={viewAllLink} className="text-black font-medium hover:underline">
            {viewAllText}
          </a>
        </div>

        <div ref={scrollRef} className="overflow-x-auto hide-scrollbar pb-4 cursor-grab active:cursor-grabbing">
          <div ref={contentRef} className="flex space-x-6 w-max">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
