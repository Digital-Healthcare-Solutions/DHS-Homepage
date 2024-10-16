"use client"

import React from "react"
import Link from "next/link"

type ToolCardProps = {
    title: string
    description: string
    icon: React.ReactNode
    link?: string
    ai: boolean
    comingSoon?: boolean
}
const ToolCard = ({
    title,
    description,
    icon,
    link,
    ai = false,
    comingSoon = false
}: ToolCardProps) => {
    const content = (
        <>
            <div className="relative group">
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 opacity-40 group-hover:opacity-70 blur duration-500 transition-opacity" />
                <div className="rounded-lg relative p-4 flex items-center bg-white dark:bg-neutral-800">
                    <div className="w-1/4">
                        <div className="rounded-full overflow-hidden bg-[#f4f7fe] dark:bg-neutral-700 flex items-center justify-center xl:h-14 xl:w-14 w-12 h-12 mr-4">
                            <div className="text-[#422afb] dark:text-indigo-400">
                                {icon}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-lg font-medium text-[#422afb] dark:text-indigo-400">
                            {title}
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                            {description}
                        </p>
                    </div>
                    {ai && (
                        <p className="px-2 py-[1px] bg-neutral-200 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-800 rounded-md text-base font-rubik">
                            AI
                        </p>
                    )}
                </div>
                {comingSoon && (
                    <div className="flex justify-end">
                        <p className="fixed  text-red-700 font-rubik font-medium">
                            coming soon
                        </p>
                    </div>
                )}
            </div>
        </>
    )

    return link ? (
        <Link href={link} passHref>
            {content}
        </Link>
    ) : (
        content
    )
}

export default ToolCard
