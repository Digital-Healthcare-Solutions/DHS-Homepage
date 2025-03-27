"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { Quote } from "lucide-react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  color = "blue"
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
  color?: "green" | "blue" | "purple"
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[100rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name}
            className="w-[350px] max-w-full relative flex-shrink-0 md:w-[450px]"
          >
            <div className="group relative h-full overflow-hidden rounded-3xl backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  color === "green"
                    ? "from-green-100/50 to-transparent dark:from-green-900/20 dark:to-transparent"
                    : color === "purple"
                    ? "from-purple-100/50 to-transparent dark:from-purple-900/20 dark:to-transparent"
                    : "from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent"
                } opacity-0 group-hover:opacity-100 transition-opacity`}
              ></div>

              <div className="relative p-8 flex flex-col h-full min-h-[300px]">
                <div className="mb-6">
                  <div
                    className={`inline-flex p-3 rounded-2xl ${
                      color === "green"
                        ? "bg-green-100 dark:bg-green-900/40"
                        : color === "purple"
                        ? "bg-purple-100 dark:bg-purple-900/50"
                        : "bg-blue-100 dark:bg-blue-900/50"
                    }`}
                  >
                    <Quote
                      className={`w-6 h-6 ${
                        color === "green"
                          ? "text-green-600 dark:text-green-500"
                          : color === "purple"
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-blue-600 dark:text-blue-400"
                      } `}
                    />
                  </div>
                </div>

                <blockquote className="relative z-20 flex flex-col flex-grow">
                  <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 flex-grow">
                    {item.quote}
                  </p>

                  <footer className="flex items-center gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-4 mt-6">
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {item.name}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.title}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfiniteMovingCards
