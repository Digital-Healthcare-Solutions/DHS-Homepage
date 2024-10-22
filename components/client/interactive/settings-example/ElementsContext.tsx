"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { ElementType } from "./noteTypes"
import useUpdateElements from "./useUpdateElements"

interface NoteElementsContextType {
    elements: ElementType[]
    setElements: React.Dispatch<React.SetStateAction<ElementType[]>>
    unusedElements: ElementType[]
    setUnusedElements: React.Dispatch<React.SetStateAction<ElementType[]>>
    updateElement: <T extends ElementType>(
        id: string,
        updates: Partial<T>
    ) => void
    toggleExpand: (id: string) => void
    moveElement: (
        sourceIndex: number,
        destinationIndex: number,
        destination: "elements" | "unusedElements"
    ) => void
    reorderElements: (sourceIndex: number, destinationIndex: number) => void
    isExpanded: boolean
    expandAll: () => void
    localNoteType: "soap" | "sections" | "nurse"
    setLocalNoteType: React.Dispatch<
        React.SetStateAction<"soap" | "sections" | "nurse">
    >
    collapseAll: () => void
}

const NoteElementsContext = createContext<NoteElementsContextType | undefined>(
    undefined
)

export const NoteElementsProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [elements, setElements] = useState<ElementType[]>([])
    const [unusedElements, setUnusedElements] = useState<ElementType[]>([])
    const [isExpanded, setIsExpanded] = useState(
        localStorage.getItem("isNoteSettingsExpandedDefault") === "true" ||
            false
    )
    const [localNoteType, setLocalNoteType] = useState<
        "soap" | "sections" | "nurse"
    >("sections")

    const updateElements = useUpdateElements(localNoteType)

    const updateElement = (id: string, updates: Partial<ElementType>) => {
        const result = updateElements(elements, unusedElements, {
            type: "update",
            id,
            updates
        })
        if (result) {
            setElements(result.updatedElements)
            setUnusedElements(result.updatedUnusedElements)
        }
    }

    const reorderElements = (sourceIndex: number, destinationIndex: number) => {
        const result = updateElements(elements, unusedElements, {
            type: "reorder",
            sourceIndex,
            destinationIndex
        })
        if (result) {
            setElements(result.updatedElements)
            setUnusedElements(result.updatedUnusedElements)
        }
    }

    const moveElement = (
        sourceIndex: number,
        destinationIndex: number,
        destination: "elements" | "unusedElements"
    ) => {
        const result = updateElements(elements, unusedElements, {
            type: "move",
            sourceIndex,
            destinationIndex,
            destination
        })
        if (result) {
            setElements(result.updatedElements)
            setUnusedElements(result.updatedUnusedElements)
        }
    }

    const toggleExpand = (id: string) => {
        setElements(
            (prevElements) =>
                prevElements?.map((element) =>
                    element.id === id
                        ? { ...element, isExpanded: !element.isExpanded }
                        : element
                ) || null
        )
        setUnusedElements((prevElements) =>
            prevElements.map((element) =>
                element.id === id
                    ? { ...element, isExpanded: !element.isExpanded }
                    : element
            )
        )
    }

    const expandAll = () => {
        setElements(
            (prevElements) =>
                prevElements?.map((element) => ({
                    ...element,
                    isExpanded: true
                })) || null
        )
        setUnusedElements((prevElements) =>
            prevElements.map((element) => ({ ...element, isExpanded: true }))
        )
        setIsExpanded(true)
    }

    const collapseAll = () => {
        setElements(
            (prevElements) =>
                prevElements?.map((element) => ({
                    ...element,
                    isExpanded: false
                })) || null
        )
        setUnusedElements((prevElements) =>
            prevElements.map((element) => ({ ...element, isExpanded: false }))
        )
        setIsExpanded(false)
        localStorage.setItem("isNoteSettingsExpandedDefault", "false")
    }

    return (
        <NoteElementsContext.Provider
            value={{
                elements,
                setElements,
                unusedElements,
                setUnusedElements,
                updateElement,
                toggleExpand,
                moveElement,
                reorderElements,
                isExpanded,
                expandAll,
                localNoteType,
                setLocalNoteType,
                collapseAll
            }}
        >
            {children}
        </NoteElementsContext.Provider>
    )
}

export const useNoteElements = () => {
    const context = useContext(NoteElementsContext)
    if (context === undefined) {
        throw new Error(
            "useNoteElements must be used within a NoteElementsProvider"
        )
    }
    return context
}
