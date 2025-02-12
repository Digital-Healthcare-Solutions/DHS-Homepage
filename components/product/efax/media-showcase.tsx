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
      image: "/efaxlayout.png"
    },
    {
      title: "AI Data Extraction",
      description: "Automatically extract key patient data from incoming faxes",
      image: "/efax-data-extraction.png"
    },
    {
      title: "Fax History",
      description:
        "View and search your entire fax history by sender name or even by patient details",
      image: "/efax-search.png"
    },
    {
      title: "Fax Labeling",
      description:
        "Automatically categorize and view faxes by each AI assigned label",
      image: "/efax-filter.png"
    }
  ]

  return (
    <section className="py-24 mx-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our intuitive interface and powerful features
          </p>
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {screenshots.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden rounded-3xl border-0 shadow-xl">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                    {/* Text Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" h-7 w-7 md:h-10 md:w-10 rounded-full border-2" />
          <CarouselNext className=" h-7 w-7 md:h-10 md:w-10 rounded-full border-2" />
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
    </section>
  )
}

export default MediaShowcase
