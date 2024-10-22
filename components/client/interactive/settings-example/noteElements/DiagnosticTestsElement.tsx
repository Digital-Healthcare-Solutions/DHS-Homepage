"use client"

import React, { useState } from "react"
import { useNoteElements } from "../ElementsContext"
import { DiagnosticElementType } from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const DiagnosticTestsElement: React.FC<{
    element: DiagnosticElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()

    const handleUpdate = <K extends keyof DiagnosticElementType>(
        key: K,
        value: DiagnosticElementType[K]
    ) => {
        updateElement<DiagnosticElementType>(element.id, { [key]: value })
    }

    return (
        <BaseElement element={element} toggleExpand={toggleExpand}>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <Label className="font-normal text-base">
                        Element Style
                    </Label>
                    <ToggleGroup
                        value={element.formatOption}
                        onValueChange={(value) => {
                            if (!value) return
                            handleUpdate(
                                "formatOption",
                                value as "table" | "bullets"
                            )
                        }}
                        type="single"
                        size="sm"
                        variant="outline"
                    >
                        <ToggleGroupItem
                            value="bullets"
                            className="rounded-r-none "
                        >
                            Bullet Points
                        </ToggleGroupItem>{" "}
                        <ToggleGroupItem
                            value="table"
                            className="rounded-l-none"
                        >
                            Table
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
        </BaseElement>
    )
}
