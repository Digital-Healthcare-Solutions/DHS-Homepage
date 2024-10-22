"use client"

import React, { useState } from "react"
import { useNoteElements } from "../ElementsContext"
import { ROSConfig, ROSElementType, TextOption } from "../noteTypes"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CircleHelp, Eye } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export const ReviewOfSystemsElement: React.FC<{
    element: ROSElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()
    const [rosDialogOpen, setROSDialogOpen] = useState(false)
    const [config, setConfig] = useState<ROSConfig>(element.rosConfig)

    const handleUpdate = <K extends keyof ROSElementType>(
        key: K,
        value: ROSElementType[K]
    ) => {
        updateElement<ROSElementType>(element.id, { [key]: value })
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
                                value as "paragraphs" | "bullets"
                            )
                        }}
                        type="single"
                        size="sm"
                        variant="outline"
                    >
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
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <Label className="font-normal text-base">
                            Review of Systems
                        </Label>
                        <HoverCard openDelay={200}>
                            <HoverCardTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-sm text-neutral-700 dark:text-neutral-150 hover:text-blue-600 h-7 w-7"
                                >
                                    <Eye size={16} />
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent
                                side="right"
                                className="flex flex-col sm:max-w-xl lg:max-w-4xl w-full dark:bg-neutral-900"
                            >
                                <h3 className="font-semibold text-lg underline underline-offset-4">
                                    Current Review of Systems Defaults
                                </h3>
                                <div className="text-sm">
                                    {Object.keys(config).map((system) => {
                                        const typedSystem =
                                            system as keyof ROSConfig

                                        return (
                                            <div
                                                key={typedSystem}
                                                className="flex flex-row items-center gap-1 py-1"
                                            >
                                                <h1
                                                    className={`capitalize ${
                                                        config[typedSystem]
                                                            .hidden
                                                            ? "text-muted-foreground"
                                                            : "font-semibold text-base"
                                                    }`}
                                                >
                                                    {element.formatOption ===
                                                        "bullets" && (
                                                        <span className="mr-1">
                                                            &bull;
                                                        </span>
                                                    )}
                                                    {typedSystem ===
                                                    "allergicImmunologic"
                                                        ? "Allergic & Immunologic"
                                                        : typedSystem ===
                                                          "hematologicLymphatic"
                                                        ? "Hematologic & Lymphatic"
                                                        : typedSystem}
                                                    :{" "}
                                                </h1>
                                                {config[typedSystem].hidden ? (
                                                    <div className=" text-muted-foreground">
                                                        (Hidden)
                                                    </div>
                                                ) : config[typedSystem]
                                                      .textOption ===
                                                  "default" ? (
                                                    <div className="text-sm text-neutral-700 dark:text-neutral-50 ">
                                                        {config[
                                                            typedSystem
                                                        ].defaultText.toString()}
                                                    </div>
                                                ) : config[typedSystem]
                                                      .textOption ===
                                                  "notReviewed" ? (
                                                    <div className="text-sm text-red-700 dark:text-red-50">
                                                        {config[
                                                            typedSystem
                                                        ].notReviewedText.toString()}
                                                    </div>
                                                ) : config[typedSystem]
                                                      .textOption ===
                                                  "custom" ? (
                                                    <div className="text-sm text-neutral-700 dark:text-neutral-50 ">
                                                        {config[
                                                            typedSystem
                                                        ]?.customText?.toString()}
                                                    </div>
                                                ) : null}
                                            </div>
                                        )
                                    })}
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <Dialog
                        open={rosDialogOpen}
                        onOpenChange={setROSDialogOpen}
                    >
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="text-sm hover:text-blue-600"
                            >
                                Customize Review of Systems
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px] lg:max-w-[1024px]">
                            <DialogHeader>
                                <DialogTitle>
                                    Customize Review of Systems
                                </DialogTitle>
                                <DialogDescription>
                                    Customize what the AI will output in each
                                    section of the review of systems if it is
                                    normal or not reviewed in the conversation.
                                </DialogDescription>
                            </DialogHeader>
                            <section className="p-2">
                                <ROSSettings
                                    initialConfig={element.rosConfig}
                                    config={config}
                                    setConfig={setConfig}
                                />
                            </section>
                            <DialogFooter>
                                <Button
                                    onClick={() => {
                                        handleUpdate("rosConfig", config)
                                        setROSDialogOpen(false)
                                    }}
                                    variant="outline"
                                >
                                    Save changes
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </BaseElement>
    )
}

interface ROSSettingsProps {
    initialConfig: ROSConfig
    config: ROSConfig
    setConfig: React.Dispatch<React.SetStateAction<ROSConfig>>
}

function ROSSettings({ initialConfig, config, setConfig }: ROSSettingsProps) {
    const handleSystemChange = (system: keyof ROSConfig, value: TextOption) => {
        setConfig((prev) => ({
            ...prev,
            [system]: { ...prev[system], textOption: value }
        }))
    }

    const handleTextChange = (
        system: keyof ROSConfig,
        field: keyof ROSConfig[keyof ROSConfig],
        value: string
    ) => {
        setConfig((prev) => ({
            ...prev,
            [system]: { ...prev[system], [field]: value }
        }))
    }

    const renderROSSystem = (system: keyof ROSConfig, label: string) => (
        <div key={system} className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center pb-2">
                <Label
                    className={`text-lg font-semibold ${
                        config[system].hidden &&
                        "text-neutral-300 dark:text-neutral-700"
                    }`}
                >
                    {label}
                </Label>
                <ToggleGroup
                    type="single"
                    value={
                        config[system].hidden
                            ? "hidden"
                            : (config[system].textOption as string)
                    }
                    onValueChange={(value: TextOption | "hidden") => {
                        if (!value) return
                        if (value === "hidden") {
                            setConfig((prev) => ({
                                ...prev,
                                [system]: { ...prev[system], hidden: true }
                            }))
                        } else {
                            handleSystemChange(system, value)
                            setConfig((prev) => ({
                                ...prev,
                                [system]: { ...prev[system], hidden: false }
                            }))
                        }
                    }}
                    className="justify-start"
                    variant="outline"
                >
                    <ToggleGroupItem
                        className="rounded-r-none"
                        value="default"
                        aria-label="Toggle default"
                    >
                        Default
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="notReviewed"
                        aria-label="Toggle not reviewed"
                        className="rounded-l-none rounded-r-none"
                    >
                        Not Reviewed
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        className="rounded-l-none rounded-r-none"
                        value="custom"
                        aria-label="Toggle custom"
                    >
                        Custom
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        className="rounded-l-none"
                        value="hidden"
                        aria-label="Toggle hidden"
                    >
                        Hidden
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
            {config[system].hidden ? null : config[system].textOption ===
              "custom" ? (
                <Textarea
                    variant="filled"
                    value={config[system]?.customText as string}
                    onChange={(e) =>
                        handleTextChange(system, "customText", e.target.value)
                    }
                    placeholder={`Enter custom review for ${label}`}
                    className="mt-2"
                    rows={4}
                />
            ) : config[system].textOption === "default" ? (
                <div className="text-sm bg-neutral-100 dark:bg-neutral-800/75 w-fit p-2 rounded text-neutral-700 dark:text-neutral-50 my-1">
                    {config[system].defaultText.toString()}
                </div>
            ) : config[system].textOption === "notReviewed" ? (
                <div className="text-sm bg-red-100 dark:bg-red-800/75 w-fit p-2 rounded text-red-700 dark:text-red-50 my-1">
                    {config[system].notReviewedText.toString()}
                </div>
            ) : null}
        </div>
    )

    return (
        <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6">
                {renderROSSystem("general", "General")}
                {renderROSSystem("skin", "Skin")}
                {renderROSSystem("HEENT", "HEENT")}
                {renderROSSystem("cardiovascular", "Cardiovascular")}
                {renderROSSystem("respiratory", "Respiratory")}
                {renderROSSystem("gastrointestinal", "Gastrointestinal")}
                {renderROSSystem("genitourinary", "Genitourinary")}
                {renderROSSystem("musculoskeletal", "Musculoskeletal")}
                {renderROSSystem("neurological", "Neurological")}
                {renderROSSystem("psychiatric", "Psychiatric")}
                {renderROSSystem("endocrine", "Endocrine")}
                {renderROSSystem(
                    "hematologicLymphatic",
                    "Hematologic & Lymphatic"
                )}
                {renderROSSystem(
                    "allergicImmunologic",
                    "Allergic & Immunologic"
                )}
                {/* Custom systems can be added here if needed */}
            </div>
        </ScrollArea>
    )
}
