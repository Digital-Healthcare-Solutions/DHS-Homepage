import React from "react"
import { WavyBackground } from "../ui/wavy-background"
import { useTheme } from "next-themes"

const WaveComponent = () => {
    const { theme } = useTheme()
    return (
        <WavyBackground
            className="max-w-4xl"
            containerClassName=""
            backgroundFill={theme === "dark" ? "rgb(23 23 23)" : "#fff"}
            colors={[
                "#2563EB", // Blue 600
                "#8B5CF6", // Violet 600
                "#6D28D9", // Purple 600
                "#10B981" // Green 500
            ]}
            waveWidth={150}
            waveOpacity={0.5}
            blur={15}
            speed="slow"
        >
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center">
                Check out what people are saying about us
            </p>
            {/* <p className="text-base md:text-lg mt-4 font-normal  text-center ">
                We have a 5 star rating on TrustPilot and are the most trusted
                company in the industry.
            </p> */}
        </WavyBackground>
    )
}

export default WaveComponent
