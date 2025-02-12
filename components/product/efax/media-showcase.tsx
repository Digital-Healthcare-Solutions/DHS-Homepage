"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { useEffect } from "react"
import Image from "next/image"

const MediaShowcase = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const screenshots = [
    {
      title: "Smart Dashboard",
      description: "Manage all your faxes from one intuitive interface",
      image: "/Intelligent-Call-Routing-Distribution.png"
    },
    {
      title: "Document Processing",
      description: "AI-powered document classification and data extraction",
      image: "/productDemo.svg"
    },
    {
      title: "Mobile Experience",
      description: "Send and receive faxes from any device",
      image: "/voiceRecognition.jpg"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our intuitive interface and powerful features
          </p>
        </div>

        <div className="relative">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {screenshots.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden rounded-3xl border-0 shadow-xl">
                    <div className="relative h-[400px] w-full group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 translate-y-6 transition-transform group-hover:translate-y-0">
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-200 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 h-12 w-12 rounded-full border-2" />
            <CarouselNext className="-right-12 h-12 w-12 rounded-full border-2" />
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-indigo-600 dark:bg-indigo-400 w-6"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaShowcase
