import React from "react"

interface ImageActionBannerProps {
    title: React.ReactNode
    description: React.ReactNode
    image: string
    className?: string
    style?: React.CSSProperties
}

export function ImageActionBanner({
    title,
    description,
    image,
    className,
    style,
    ...others
}: ImageActionBannerProps) {
    return (
        <div
            className={`relative mb-8 h-52 md:h-96 bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-300 ease-in-out ${className}`}
            style={{
                backgroundImage: `url(${image})`,
                ...style
            }}
            {...others}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-800 to-gray-400 opacity-65 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col items-center md:justify-center z-10 p-4">
                <div className="max-w-[550px] md:max-w-[700px] p-5 md:p-12 rounded-lg bg-neutral-700 bg-opacity-40 dark:bg-neutral-400 dark:bg-opacity-30 shadow-sm shadow-black mx-5">
                    <h2 className="mb-2 text-xl md:text-2xl lg:text-2xl font-light dark:font-normal text-white dark:text-black">
                        {title}
                    </h2>
                    <div className="text-lg md:text-xl lg:text-2xl font-semibold mx-2 text-white dark:text-black">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}
