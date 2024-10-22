"use client"

import React, { useState } from "react"
import { useNoteElements } from "../ElementsContext"
import { HPIElementType } from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const HpiElement: React.FC<{
    element: HPIElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()

    const handleUpdate = <K extends keyof HPIElementType>(
        key: K,
        value: HPIElementType[K]
    ) => {
        updateElement<HPIElementType>(element.id, { [key]: value })
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
                                value as "paragraphs" | "bullets"
                            )
                        }}
                        type="single"
                        size="sm"
                        variant="outline"
                    >
                        {" "}
                        <ToggleGroupItem
                            value="paragraphs"
                            className="rounded-r-none "
                        >
                            Paragraphs
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="bullets"
                            className="rounded-l-none"
                        >
                            Bullet Points
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
        </BaseElement>
    )
}
