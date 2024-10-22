"use client"

import React from "react"
import { ElementType } from "./noteTypes"
import { Draggable, Droppable } from "@hello-pangea/dnd"
import { ElementCard } from "./ElementCard"

const ElementList = ({
    title,
    elements,
    droppableId,
    toggleExpand
}: {
    title: string
    elements: ElementType[]
    droppableId: string
    toggleExpand: (id: string) => void
}) => (
    <div className="w-full">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="border dark:border-neutral-700 rounded-md">
            <Droppable droppableId={droppableId}>
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`p-2 space-y-2 min-h-full ${
                            snapshot.isDraggingOver
                                ? "bg-neutral-100 dark:bg-neutral-900/50"
                                : ""
                        }`}
                    >
                        {elements.length === 0 ? (
                            <div className="text-muted-foreground font-semibold p-4">
                                No elements available
                            </div>
                        ) : (
                            elements.map((element, index) => (
                                <Draggable
                                    key={element.id}
                                    draggableId={element.id}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <ElementCard
                                            element={element}
                                            provided={provided}
                                            snapshot={snapshot}
                                            toggleExpand={toggleExpand}
                                        />
                                    )}
                                </Draggable>
                            ))
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    </div>
)

export default ElementList
