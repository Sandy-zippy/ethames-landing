import { type ReactNode } from 'react'

interface InfiniteSliderProps {
  children: ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  className = '',
}: InfiniteSliderProps) {
  const duration = `${speed}s`

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{
          gap: `${gap}px`,
          animationDuration: duration,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
