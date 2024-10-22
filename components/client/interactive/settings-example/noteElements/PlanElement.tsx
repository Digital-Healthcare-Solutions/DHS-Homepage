"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useNoteElements } from "../ElementsContext"
import {
    AssessmentElementType,
    PlanElementType,
    SubjectiveElementType
} from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { MdAdd } from "react-icons/md"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Textarea } from "@/components/ui/textarea"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const PlanElement: React.FC<{
    element: PlanElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()
    const [tempInstructions, setTempInstructions] = useState("")
    const [sheetOpen, setSheetOpen] = useState(false)

    useEffect(() => {
        if (element.customInstructions && sheetOpen) {
            setTempInstructions(element.customInstructions)
        }
    }, [element.customInstructions, sheetOpen])

    const handleUpdate = <K extends keyof PlanElementType>(
        key: K,
        value: PlanElementType[K]
    ) => {
        updateElement<PlanElementType>(element.id, { [key]: value })
    }

    const defaultOptions = ["Include parts about...", "Don't include..."]

    return (
        <BaseElement element={element} toggleExpand={toggleExpand}>
            <div className="space-y-3">
                <div
                    className={`flex ${
                        element.customInstructions.length > 0
                            ? "flex-col items-start"
                            : "flex-row items-center justify-between"
                    } `}
                >
                    <Label className="font-normal text-base">
                        Custom Instructions
                    </Label>
                    {element.customInstructions ? (
                        <>
                            <Textarea
                                onFocus={() => setSheetOpen(true)}
                                variant={"filled"}
                                value={element.customInstructions}
                                className="w-full min-h-16"
                                placeholder="Enter custom instructions..."
                            />
                            <div className="flex w-full justify-between pt-1">
                                <p className="text-xs text-muted-foreground">
                                    {element.customInstructions.length}/250
                                    characters
                                </p>
                                <Badge
                                    variant="outline"
                                    onClick={() => {
                                        handleUpdate("customInstructions", "")
                                        setTempInstructions("")
                                    }}
                                    className="cursor-pointer rounded-md text-xs bg-neutral-150 hover:bg-neutral-150 dark:bg-neutral-900 hover:text-blue-500 "
                                >
                                    {" "}
                                    <div className="flex items-center gap-1 text-xs">
                                        Clear <X size={12} />
                                    </div>
                                </Badge>
                            </div>
                        </>
                    ) : (
                        <Button
                            onClick={() => setSheetOpen(true)}
                            variant="outline"
                            size="sm"
                            className="text-sm hover:text-blue-600"
                        >
                            Add <MdAdd className="ml-1" />
                        </Button>
                    )}

                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetContent className="z-[1001]">
                            <SheetHeader>
                                <SheetTitle>
                                    Custom Instructions for Plan Section
                                </SheetTitle>
                                <SheetDescription>
                                    Add custom instructions to tell the AI what
                                    to focus on when generating the plan.
                                </SheetDescription>
                            </SheetHeader>
                            <section className="py-4">
                                <div className="grid grid-cols-2 gap-2 py-5">
                                    {defaultOptions.map((item, i) => {
                                        return (
                                            <button
                                                key={i}
                                                className="w-full text-sm font-medium bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md px-3 py-2 transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none"
                                                onClick={() => {
                                                    setTempInstructions(
                                                        tempInstructions
                                                            ? `${tempInstructions}, ${item}`
                                                            : item
                                                    )
                                                }}
                                            >
                                                {item}
                                            </button>
                                        )
                                    })}
                                </div>
                                <div className="flex flex-col">
                                    <Textarea
                                        variant="filled"
                                        value={tempInstructions}
                                        onChange={(e) => {
                                            if (e.target.value.length > 250)
                                                return
                                            setTempInstructions(e.target.value)
                                        }}
                                        className="w-full"
                                        size={"lg"}
                                        placeholder="Enter custom instructions..."
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        {tempInstructions.length}/250 characters
                                    </p>
                                </div>
                                <Button
                                    variant="default"
                                    size="default"
                                    onClick={() => {
                                        handleUpdate(
                                            "customInstructions",
                                            tempInstructions
                                        )
                                        setTempInstructions("")
                                        setSheetOpen(false)
                                    }}
                                    className="mt-4"
                                >
                                    Save
                                </Button>
                            </section>
                        </SheetContent>
                    </Sheet>
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
                        <ToggleGroupItem
                            value="paragraphs"
                            className="rounded-r-none"
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
