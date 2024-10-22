"use client"

import React from "react"
import { useNoteElements } from "../ElementsContext"
import { ChiefComplaintElementType } from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const ChiefComplaintElement: React.FC<{
    element: ChiefComplaintElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()

    const handleUpdate = <K extends keyof ChiefComplaintElementType>(
        key: K,
        value: ChiefComplaintElementType[K]
    ) => {
        updateElement<ChiefComplaintElementType>(element.id, { [key]: value })
    }

    return (
        <BaseElement element={element} toggleExpand={toggleExpand}>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <Label className="font-normal text-base">
                        Detail Level
                    </Label>
                    <ToggleGroup
                        value={element.detailLevel}
                        onValueChange={(value) => {
                            if (!value) return
                            handleUpdate(
                                "detailLevel",
                                value as "normal" | "high"
                            )
                        }}
                        type="single"
                        size="sm"
                        variant="outline"
                    >
                        <ToggleGroupItem
                            value="normal"
                            className="rounded-r-none"
                        >
                            Normal
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="high"
                            className="rounded-l-none"
                        >
                            High
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
        </BaseElement>
    )
}
