"use client"

import { useEffect, useState, useRef } from "react"
import { useDrag } from "@use-gesture/react"
import { animated, useSpring } from "@react-spring/web"
import { FeatureCard } from "../features-section/card"

interface FeatureCarouselProps {
  features: Array<{
    title: string
    description: string
    icon: "code" | "lightbulb" | "cpu"
  }>
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const [{ x }, api] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], cancel }) => {
      console.log("Drag event:", { down, mx, xDir }) // Debug log
      if (down) {
        api.start({ x: mx, immediate: true })
      } else {
        const threshold = 50
        const dir = xDir < 0 ? 1 : -1
        if (Math.abs(mx) > threshold) {
          const newIndex = Math.max(0, Math.min(features.length - 1, currentIndex + dir))
          if (newIndex !== currentIndex) {
            setCurrentIndex(newIndex)
            cancel()
          }
        }
        api.start({ x: 0, immediate: false })
      }
    },
    { axis: "x", rubberband: true },
  )

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 450
      console.log("Screen width:", window.innerWidth, "isMobile:", isMobile) // Debug log
      setIsMobile(isMobile)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth
      console.log("Carousel width:", width, "Current index:", currentIndex) // Debug log
      api.start({ x: -currentIndex * width, immediate: false })
    }
  }, [currentIndex, api])

  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden" ref={carouselRef}>
      <animated.div
        className="flex transition-transform duration-300 ease-out"
        {...bind()}
        style={{ x, touchAction: "pan-y" }}
      >
        {features.map((feature, index) => (
          <div key={index} className={`flex-shrink-0 ${isMobile ? "w-full" : "w-[85%]"} pl-2 md:pl-4`}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </animated.div>
    </div>
  )
}

