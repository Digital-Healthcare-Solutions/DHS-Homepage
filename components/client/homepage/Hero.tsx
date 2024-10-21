"use client"

import Link from "next/link"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { SparklesCore } from "@/components/ui/sparkles"
import { useTheme } from "next-themes"
import { BackgroundBeams } from "@/components/ui/background-beams"
import GetCustomQuote from "../modals/GetCustomQuote"

export function Hero() {
    const [firstFinished, setFirstFinished] = useState(false)
    const [secondFinished, setSecondFinished] = useState(false)

    return (
        <div>
            <div className="h-[40rem] w-full dark:bg-neutral-950 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,#111111_100%)] lg:[mask-image:radial-gradient(ellipse_at_center,transparent_40%,#111111_80%)]"></div>

                <div className="max-w-lg md:max-w-4xl mx-auto px-4 pt-20 pb-16 sm:pt-24 sm:pb-20">
                    <h1 className="text-4xl sm:text-6xl font-black leading-tight m-0 p-0 dark:text-white text-black">
                        An{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            AI powered
                        </span>{" "}
                        <span>copilot for</span> <br />
                        <p></p>
                        <TypeAnimation
                            sequence={[
                                " Independent Practices",
                                1000,
                                () => setFirstFinished(true),
                                3000,
                                " Specialty Practices",
                                4000,
                                " New Practices",
                                4000
                            ]}
                            className="text-5xl sm:text-6xl font-black"
                            speed={75}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </h1>

                    <p className="mt-8 text-2xl sm:text-xl text-gray-600 dark:text-gray-400">
                        {firstFinished && (
                            <TypeAnimation
                                sequence={[
                                    "Free yourself from documentation, reclaim your weekends, and focus on patient care, not paperwork.",
                                    () => setSecondFinished(true)
                                ]}
                                speed={95}
                                repeat={0}
                                cursor={false}
                            />
                        )}
                    </p>

                    {secondFinished && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mt-8"
                        >
                            <Link
                                href="https://app.getaxon.ai/signup"
                                className="flex flex-wrap gap-4"
                            >
                                <button className="text-lg shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-blue-900 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-3 px-6 rounded font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
                                    Start for Free
                                </button>

                                <Link href="/#request-demo">
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-400 bg-[linear-gradient(110deg,#ffffff,45%,#e2e8f0,55%,#ffffff)] dark:border-slate-700 dark:bg-[linear-gradient(110deg,#00000000,45%,#1e2631,55%,#00000000)] bg-[length:200%_100%] px-6 font-medium text-slate-800 dark:text-slate-200 transition-colors">
                                        Request Demo
                                    </button>
                                </Link>
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    )
}
