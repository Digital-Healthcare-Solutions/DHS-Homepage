import React, { useState } from "react"
import { useNoteElements } from "../ElementsContext"
import { ImmunizationsElementType } from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const ImmunizationsElement: React.FC<{
    element: ImmunizationsElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()

    const handleUpdate = <K extends keyof ImmunizationsElementType>(
        key: K,
        value: ImmunizationsElementType[K]
    ) => {
        updateElement<ImmunizationsElementType>(element.id, { [key]: value })
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
                                value as "bullets" | "numbered" | "table"
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
                        </ToggleGroupItem>
                        <ToggleGroupItem value="table" className="rounded-none">
                            Table
                        </ToggleGroupItem>
                        <ToggleGroupItem
                            value="numbered"
                            className="rounded-l-none"
                        >
                            Numbered List
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
        </BaseElement>
    )
}
