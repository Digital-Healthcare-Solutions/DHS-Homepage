"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import React, { useState, useEffect } from "react"

export const ProductDemoVideo = () => {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Ensure the component is only rendered on the client side
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted)
        return <div className="flex justify-center items-center py-20" />

    return (
        <div className="flex flex-col justify-center items-center py-20">
            <h2 className="text-2xl font-semibold">
                Get started with 3 easy steps
            </h2>
            {resolvedTheme === "light" ? (
                <Image
                    src={"/productDemoWhite.svg"}
                    alt="Product Demo"
                    width={960}
                    height={540}
                />
            ) : (
                <Image
                    src="/productDemo.svg"
                    alt="Product Demo"
                    width={960}
                    height={540}
                />
            )}
        </div>
    )
}
