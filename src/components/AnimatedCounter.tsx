import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2, className = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(Math.round(v)),
      })
      return () => controls.stop()
    }
  }, [isInView, value, count, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  )
}
