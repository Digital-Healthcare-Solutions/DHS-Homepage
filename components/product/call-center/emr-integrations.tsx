"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const EMRIntegrations = ({ className }: { className?: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  // EMR systems data
  const emrSystems = [
    { name: "Epic", logo: "/epic.png" },
    { name: "athenahealth", logo: "/athenahealth.png" },
    { name: "Cerner", logo: "/cerner.png" },
    { name: "MEDITECH", logo: "/meditech.png" },
    { name: "Allscripts", logo: "/allscripts.jpg" },
    { name: "NextGen", logo: "/nextgen.jpg" },
    { name: "eClinicalWorks", logo: "/eclinicalworks.jpg" },
    { name: "Practice Fusion", logo: "/practice-fusion.png" },
    { name: "DrChrono", logo: "/drchrono.jpg" }
  ]

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      containerRef.current.style.setProperty("--animation-duration", "40s")
      setStart(true)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
            Seamless EMR Integration
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Works with all major electronic medical record systems
          </p>
        </div>

        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
              start && "animate-scroll",
              "hover:[animation-play-state:paused]"
            )}
          >
            {emrSystems.map((emr, idx) => (
              <li
                key={`${emr.name}-${idx}`}
                className="w-[200px] max-w-full relative flex-shrink-0"
              >
                <Card className="h-32 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-blue-100/50 dark:border-blue-900/50 group hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                  <div className="relative p-6 flex items-center justify-center h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>

                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
                      <div className="relative w-full h-12 flex items-center justify-center">
                        {emr.logo && (
                          <Image
                            src={emr.logo}
                            alt={`${emr.name} logo`}
                            fill
                            className="object-contain filter dark:invert-[.15] transition-transform group-hover:scale-105"
                          />
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {emr.name}
                      </p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EMRIntegrations
