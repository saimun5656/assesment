"use client"
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useGesture } from "@use-gesture/react"

interface TabSlide {
  title: string
  subtitle: string
  description: string
  image?: string
}

const slides: TabSlide[] = [
  {
    title: "Customer focused",
    subtitle: "Purpose-built financial services",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20003757.jpg-wcgtEFf19a0l8cdajuxBuLRQNYiUrB.jpeg",
  },
  {
    title: "Agile and adaptable",
    subtitle: "Flexible solutions",
    description:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
  },
  {
    title: "Compliance ready",
    subtitle: "Regulatory excellence",
    description:
      "Stay ahead of regulatory requirements with our comprehensive compliance-ready solutions designed for the modern financial landscape.",
  },
  {
    title: "Secure and safe",
    subtitle: "Enterprise security",
    description:
      "Protect your financial operations with state-of-the-art security measures and robust safety protocols.",
  },
]

export default function FinanceTabsCarousel() {
  const [activeTab, setActiveTab] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const nextSlide = React.useCallback(() => {
    setDirection(1)
    setActiveTab((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = React.useCallback(() => {
    setDirection(-1)
    setActiveTab((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const bind = useGesture({
    onDrag: ({ swipe: [swipeX] }) => {
      if (swipeX < 0) nextSlide()
      if (swipeX > 0) prevSlide()
    },
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [nextSlide])

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
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-blue-600 font-medium mb-4">TECHNOLOGY BUILT FOR YOU</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-8">The future of finance</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
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

      <div className="relative overflow-hidden h-[500px] shadow-lg rounded-lg" {...bind()}>
        <AnimatePresence initial={false} custom={direction}>
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
            className="w-full absolute"
          >
            <Card className="border-0 shadow-none h-[500px]">
              <CardContent className="grid md:grid-cols-2 gap-8 p-6 h-full">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-navy-900">{slides[activeTab].subtitle}</h3>
                  <p className="text-gray-600 leading-relaxed">{slides[activeTab].description}</p>
                </div>
                {slides[activeTab].image && (
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <Image
                      src={slides[activeTab].image || "/placeholder.svg"}
                      alt={slides[activeTab].title}
                      fill
                      className="object-cover"
                      priority={activeTab === 0}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

