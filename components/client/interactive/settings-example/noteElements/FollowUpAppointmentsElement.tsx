"use client"

import React, { useState } from "react"
import { useNoteElements } from "../ElementsContext"
import { FollowUpAppointmentElementType } from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const FollowUpAppointmentElement: React.FC<{
    element: FollowUpAppointmentElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()

    const handleUpdate = <K extends keyof FollowUpAppointmentElementType>(
        key: K,
        value: FollowUpAppointmentElementType[K]
    ) => {
        updateElement<FollowUpAppointmentElementType>(element.id, {
            [key]: value
        })
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
                                value as "bullets" | "numbered"
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
