"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useDrag } from "@use-gesture/react"

interface TabSlide {
  title: string
  subtitle: string
  description: string
  image?: string
}

const slides: TabSlide[] = [
  {
    title: "Customer focused",
    subtitle: "Purpose-built financial services financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
  },
  {
    title: "Customer focused 2",
    subtitle: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
  },
  {
    title: "Customer focused 3",
    subtitle: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
  },
  // ... other slides
]

export default function FinanceTabsCarousel() {
  const [activeTab, setActiveTab] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)

  const nextSlide = React.useCallback(() => {
    setDirection(1)
    setActiveTab((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = React.useCallback(() => {
    setDirection(-1)
    setActiveTab((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const bind = useDrag(
    ({ movement: [mx], velocity: [vx], direction: [dx], active }) => {
      setIsDragging(active)

      const SWIPE_THRESHOLD = 50
      const VELOCITY_THRESHOLD = 0.5

      if (!active && (Math.abs(mx) > SWIPE_THRESHOLD || Math.abs(vx) > VELOCITY_THRESHOLD)) {
        if (dx > 0) {
          prevSlide()
        } else {
          nextSlide()
        }
      }
    },
    {
      axis: "x",
      filterTaps: true,
      rubberband: true,
      bounds: { left: -200, right: 200 },
      from: [0, 0] // Changed from 'initial' to 'from'
    }
  )

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    const startTimer = () => {
      timer = setInterval(() => {
        if (!isDragging) {
          nextSlide()
        }
      }, 8000)
    }

    startTimer()

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [nextSlide, isDragging])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  return (
    <div className="w-full max-w-6xl mx-auto md:px-4  py-12 scale-[.80] md:scale-100">

      <div className="text-center mb-12">
        <h2 className="text-blue-400 font-bold mb-4 font-montserrat tracking-[3px]">TECHNOLOGY BUILT FOR YOU</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 opacity-80">The future of finance</h1>
      </div>

      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeTab ? 1 : -1)
              setActiveTab(index)
            }}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeTab === index ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200",
            )}
          >
            {slide.title}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "relative overflow-hidden h-[800px] md:h-[500px] shadow-lg rounded-lg ",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        {...bind()}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="w-full h-full absolute"
            style={{ touchAction: "pan-y pinch-zoom" }}
          >
            <Card className="border-0 shadow-none h-full ">
              <CardContent className="flex flex-col md:grid md:grid-cols-2 gap-8 p-16 h-full">
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="flex-1 lg:space-y-8 space-y-6">
                  <h1 className="text-xl md:text-sm font-bold text-blue-400 font-montserrat tracking-[3px] uppercase">{slides[activeTab].title}</h1>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900">{slides[activeTab].subtitle}</h3>
                  </div>
                 
                  <p className="text-gray-600 leading-relaxed flex-1 font-bold">{slides[activeTab].description}</p>

                  {slides[activeTab].image && (
                    <div className="relative h-64 md:h-full rounded-lg overflow-hidden md:hidden">
                      <Image
                        src={slides[activeTab].image || "/placeholder.svg"}
                        alt={slides[activeTab].title}
                        fill
                        className="object-cover"
                        priority={activeTab === 0}
                        draggable={false}
                      />
                    </div>
                  )}

                  <p className="text-gray-600 leading-relaxed ">{slides[activeTab].description}</p>
                </div>
                {slides[activeTab].image && (
                  <div className="relative h-full rounded-lg overflow-hidden hidden md:block">
                    <Image
                      src={slides[activeTab].image || "/placeholder.svg"}
                      alt={slides[activeTab].title}
                      fill
                      className="object-cover"
                      priority={activeTab === 0}
                      draggable={false}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeTab ? 1 : -1)
              setActiveTab(index)
            }}
            className={cn(
              "w-3 h-3 rounded-full mx-1 transition-all duration-300",
              activeTab === index ? "bg-blue-600" : "bg-gray-300",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}