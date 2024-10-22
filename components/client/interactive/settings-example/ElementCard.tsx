"use client"

import React from "react"
import { ElementFactory } from "./ElementFactory"
import { ElementType } from "./noteTypes"

export const ElementCard: React.FC<{
    element: ElementType
    provided: any
    snapshot: any
    toggleExpand: (id: string) => void
}> = ({ element, provided, snapshot, toggleExpand }) => (
    <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`flex flex-col gap-2 border rounded-md p-3 cursor-move transition-all duration-200 ${
            snapshot.isDragging
                ? "border-2 border-primary dark:border-neutral-700 bg-background dark:bg-neutral-900 shadow-lg"
                : "border-border bg-card dark:bg-neutral-900/75"
        }`}
    >
        <ElementFactory element={element} toggleExpand={toggleExpand} />
    </div>
)
