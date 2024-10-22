"use client"

import { ElementType } from "./noteTypes"

type NoteType = "soap" | "sections" | "nurse"

function useUpdateElements(noteType: NoteType) {
    const updateElementsOrderAndStatus = (
        elements: ElementType[],
        isActive: boolean
    ): ElementType[] => {
        return elements.map((element, index) => ({
            ...element,
            order: index + 1,
            active: isActive
        }))
    }

    const updateElements = (
        elements: ElementType[],
        unusedElements: ElementType[],
        action: {
            type: "update" | "reorder" | "move"
            id?: string
            updates?: Partial<ElementType>
            sourceIndex?: number
            destinationIndex?: number
            destination?: "elements" | "unusedElements"
        }
    ): {
        updatedElements: ElementType[]
        updatedUnusedElements: ElementType[]
    } | null => {
        let newElements = [...elements]
        let newUnusedElements = [...unusedElements]

        switch (action.type) {
            case "update":
                if (!action.id || !action.updates) return null
                newElements = newElements.map((el) =>
                    el.id === action.id
                        ? ({ ...el, ...action.updates } as ElementType)
                        : el
                )
                newUnusedElements = newUnusedElements.map((el) =>
                    el.id === action.id
                        ? ({ ...el, ...action.updates } as ElementType)
                        : el
                )
                break
            case "reorder":
                if (
                    action.sourceIndex === undefined ||
                    action.destinationIndex === undefined
                )
                    return null
                const [reorderedItem] = newElements.splice(
                    action.sourceIndex,
                    1
                )
                newElements.splice(action.destinationIndex, 0, reorderedItem)
                newElements = updateElementsOrderAndStatus(newElements, true)
                break
            case "move":
                if (
                    action.sourceIndex === undefined ||
                    action.destinationIndex === undefined ||
                    !action.destination
                )
                    return null
                const sourceList =
                    action.destination === "elements"
                        ? newUnusedElements
                        : newElements
                const destList =
                    action.destination === "elements"
                        ? newElements
                        : newUnusedElements
                const [movedItem] = sourceList.splice(action.sourceIndex, 1)
                destList.splice(action.destinationIndex, 0, movedItem)
                if (action.destination === "elements") {
                    newElements = updateElementsOrderAndStatus(destList, true)
                    newUnusedElements = updateElementsOrderAndStatus(
                        sourceList,
                        false
                    )
                } else {
                    newUnusedElements = updateElementsOrderAndStatus(
                        destList,
                        false
                    )
                    newElements = updateElementsOrderAndStatus(sourceList, true)
                }
                break
        }

        return {
            updatedElements: newElements,
            updatedUnusedElements: newUnusedElements
        }
    }

    return updateElements
}

export default useUpdateElements
