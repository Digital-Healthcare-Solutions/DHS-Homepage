"use client"

import { useCallback, useState } from "react"
import slugify from "slugify"
import Link from "next/link"

const LINK_HEIGHT = 38
const INDICATOR_SIZE = 10
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2

interface ContentTypes {
    _key: string
    _type: string
    style: string
    children: [
        {
            _key: string
            _type: string
            marks: []
            text: string
        }
    ]
    markDefs: []
}

interface TableOfContentsFloatingProps {
    contents: ContentTypes[]
}

export function TableOfContentsFloating({
    contents
}: TableOfContentsFloatingProps) {
    const tableElems = contents.filter(
        (item) => item.style == "h1" || item.style == "h2" || item.style == "h3"
    )
    const [active, setActive] = useState(0)

    const handleScroll = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
            e.preventDefault()
            const href = e.currentTarget.getAttribute("href")
            if (href) {
                const targetId = href.replace("#", "")
                const elem = document.getElementById(targetId)
                if (elem) {
                    const rect = elem.getBoundingClientRect()
                    const absoluteTop = rect.top + window.pageYOffset
                    window.scrollTo({
                        top: absoluteTop - 60, // Scroll to 20px above the element
                        behavior: "smooth"
                    })
                }
            }
            setActive(index)
        },
        []
    )

    const items = tableElems.map((item, index) => (
        <div
            key={item._key}
            className={`block pl-4 text-sm h-[38px] leading-[38px] border-l-2 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-r-sm transition-colors duration-150 ease-in-out ${
                active === index
                    ? "font-medium text-blue-600 dark:text-blue-400"
                    : "text-black dark:text-white"
            }`}
        >
            {item.children.map((child) => (
                <Link
                    key={child._key}
                    onClick={(e) => handleScroll(e, index)}
                    href={`#${slugify(child.text, { lower: true })}`}
                    className="block w-full h-full"
                >
                    {child.text}
                </Link>
            ))}
        </div>
    ))

    return (
        <div>
            <div className="flex items-center mb-4">
                {/* If you want to add an icon, you can do so here */}
                <span className="text-lg">Table of contents</span>
            </div>
            <div className="relative">
                <div
                    className="absolute w-2.5 h-2.5 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-400 transition-transform duration-150 ease-in-out"
                    style={{
                        transform: `translateY(${
                            active * LINK_HEIGHT + INDICATOR_OFFSET
                        }px)`,
                        left: "-5px"
                    }}
                />
                {items}
            </div>
        </div>
    )
}
