"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"

export const ProductDemoVideo = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex justify-center items-center py-20" />
  }

  return (
    <section className="relative py-32 overflow-hidden" id="demo-video">
      <div className="absolute inset-0 bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            How it works
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            See how our AI scribe transforms your documentation workflow
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r bg-white dark:bg-neutral-950 opacity-10 dark:opacity-20"></div>
          {resolvedTheme === "light" ? (
            <Image
              src="/productDemoWhite.svg"
              alt="Product Demo"
              width={1200}
              height={540}
              className="relative"
            />
          ) : (
            <Image
              src="/productDemo.svg"
              alt="Product Demo"
              width={1200}
              height={540}
              className="relative"
            />
          )}
        </div>

        <div className="text-center mt-12">
          <Link href="/product/ai-scribe">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Show me more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
