// app/blog/[slug]/ScrollProgressBar.tsx
"use client"

import { useScroll, motion } from "framer-motion"

export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            className="h-1 bg-gradient-to-r from-blue-400 to-blue-500 sticky top-14 md:top-16 lg:top-20 z-50 left-0 origin-top-left rounded-full"
            style={{ scaleX: scrollYProgress }}
            initial={{ scaleX: 0 }}
        />
    )
}
