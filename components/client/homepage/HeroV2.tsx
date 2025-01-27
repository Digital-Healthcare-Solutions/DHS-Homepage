import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Check, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const HeroV2 = () => {
  return (
    <div className="relative h-[60rem] md:h-[40rem] w-full dark:bg-neutral-950 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Radial gradient */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,#111111_100%)] lg:[mask-image:radial-gradient(ellipse_at_center,transparent_55%,#111111_90%)]"></div>

      {/* Accent Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-64 w-64 rounded-full bg-blue-400 opacity-20 blur-3xl dark:opacity-10"></div>
        <div className="absolute -right-4 bottom-1/4 h-64 w-64 rounded-full bg-blue-400 opacity-20 blur-3xl dark:opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <div className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
                AI-Powered Medical Scribe
              </span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Cut documentation time by
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                {" "}
                70%
              </span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Free AI scribe for all medical practices. Perfect notes while you
              focus on what matters - your patients.
            </p>
          </div>

          {/* CTA section */}
          <div className="space-y-6 mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://app.getaxon.ai/signup">
                <button className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-lg font-bold text-white transition-all hover:from-blue-700 hover:to-blue-600 dark:from-blue-500 dark:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500">
                  Start for Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/#request-demo">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-blue-200 dark:border-blue-800 bg-[linear-gradient(110deg,#ffffff,45%,#e2e8f0,55%,#ffffff)] dark:bg-[linear-gradient(110deg,#00000000,45%,#1e2631,55%,#00000000)] bg-[length:200%_100%] px-8 font-bold text-neutral-900 dark:text-neutral-200 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                  Request Demo
                </button>
              </Link>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              No credit card required
            </p>
          </div>

          {/* Benefits cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/50">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                    Save 2+ Hours Daily
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Automated documentation that learns your style
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/50">
                  <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                    99% Accuracy
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    AI-powered precision with human-like understanding
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/50">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                    Used by 10,000+ Providers
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Join thousands of satisfied healthcare professionals
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroV2
