"use client"

import Link from "next/link"
import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"

const inter = Inter({
    subsets: ["latin"],
    display: "swap"
})

function NotFoundTitle() {
    return (
        <div className={`container mx-auto py-20 ${inter.className}`}>
            <div className="text-center font-black text-7xl md:text-[220px] leading-none mb-12 text-neutral-700 dark:text-neutral-300 sm:text-[120px]">
                404
            </div>
            <h1 className="text-center font-black text-4xl sm:text-3xl">
                You have found a secret place.
            </h1>
            <p className="max-w-[500px] mx-auto mt-6 mb-12 text-lg text-center text-neutral-600 dark:text-neutral-400">
                Unfortunately, this is only a 404 page. You may have mistyped
                the address, or the page has been moved to another URL.
            </p>
            <div className="flex justify-center">
                <Link href="/">
                    <Button>Take me back to home page</Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundTitle
