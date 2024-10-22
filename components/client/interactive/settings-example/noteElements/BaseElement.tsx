"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdOutlineDragIndicator, MdExpandMore } from "react-icons/md"
import { Button } from "@/components/ui/button"
import { ElementType } from "../noteTypes"

export const BaseElement: React.FC<{
    element: ElementType
    toggleExpand: (id: string) => void
    children: React.ReactNode
}> = ({ element, toggleExpand, children }) => (
    <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
                <MdOutlineDragIndicator className="text-muted-foreground" />
                <div className="font-semibold text-lg">{element.name}</div>
            </div>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpand(element.id)}
                className="p-1 transition-transform duration-500"
            >
                <MdExpandMore
                    size={24}
                    className={`transition-all duration-300 ${
                        element.isExpanded ? "transform -rotate-180" : ""
                    }`}
                />
            </Button>
        </div>
        <AnimatePresence initial={false}>
            {element.isExpanded && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
)
