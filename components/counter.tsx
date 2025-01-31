"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export default function Counter({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const countRef = useRef(count)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      if (progress < duration) {
        const nextCount = Math.min(Math.floor((progress / duration) * end), end)
        setCount(nextCount)
        countRef.current = nextCount
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)

    return () => {
      startTimeRef.current = null
    }
  }, [end, duration, inView])

  return (
    <div ref={ref} className="md:text-[80px] text-4xl font-bold text-primary">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

