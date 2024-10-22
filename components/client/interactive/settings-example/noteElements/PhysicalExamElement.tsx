"use client"

import React, { useState } from "react"
import { BaseElement } from "./BaseElement"
import { Label } from "@/components/ui/label"
import {
    ExamSystemConfig,
    NotAvailableTextOption,
    PhysicalExamConfig,
    PhysicalExamElementType
} from "../noteTypes"
import { useNoteElements } from "../ElementsContext"
import { Textarea } from "@/components/ui/textarea"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MdAdd } from "react-icons/md"
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CircleHelp, Eye } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger
} from "@/components/ui/hover-card"

export const PhysicalExamElement: React.FC<{
    element: PhysicalExamElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    const { updateElement } = useNoteElements()

    const [tempInstructions, setTempInstructions] = React.useState("")
    const [physicalExamDialogOpen, setPhysicalExamDialogOpen] =
        React.useState(false)
    const [config, setConfig] = useState<PhysicalExamConfig>(
        element.physicalExam
    )

    const handleUpdate = <K extends keyof PhysicalExamElementType>(
        key: K,
        value: PhysicalExamElementType[K]
    ) => {
        updateElement<PhysicalExamElementType>(element.id, { [key]: value })
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
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <Label className="font-normal text-base">
                            Physical Exam
                        </Label>
                        <HoverCard openDelay={200}>
                            <HoverCardTrigger>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() =>
                                        setPhysicalExamDialogOpen(true)
                                    }
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
                                    Current Physical Exam Defaults
                                </h3>
                                <div className="text-sm">
                                    {Object.keys(config).map((system) => {
                                        const typedSystem =
                                            system as keyof PhysicalExamConfig

                                        return (
                                            <div
                                                key={typedSystem}
                                                className="flex flex-row items-center gap-1 py-1"
                                            >
                                                {" "}
                                                {element.formatOption ===
                                                    "bullets" && (
                                                    <span className="mr-1">
                                                        &bull;
                                                    </span>
                                                )}
                                                <h1
                                                    className={`capitalize ${
                                                        config[typedSystem]
                                                            .hidden
                                                            ? "text-muted-foreground"
                                                            : "font-semibold text-base"
                                                    }`}
                                                >
                                                    {typedSystem}:{" "}
                                                </h1>
                                                {config[typedSystem].hidden ? (
                                                    <div className=" text-muted-foreground">
                                                        (Hidden)
                                                    </div>
                                                ) : config[typedSystem]
                                                      .notAvailableOption ===
                                                  "default" ? (
                                                    <div className="text-sm text-neutral-700 dark:text-neutral-50 ">
                                                        {
                                                            config[typedSystem]
                                                                .defaultText
                                                        }
                                                    </div>
                                                ) : config[typedSystem]
                                                      .notAvailableOption ===
                                                  "notAvailable" ? (
                                                    <div className="text-sm text-neutral-700 dark:text-neutral-50">
                                                        {
                                                            config[typedSystem]
                                                                .notAvailableText
                                                        }
                                                    </div>
                                                ) : config[typedSystem]
                                                      .notAvailableOption ===
                                                  "custom" ? (
                                                    <div className="text-sm text-neutral-700 dark:text-neutral-50 ">
                                                        {
                                                            config[typedSystem]
                                                                .customText
                                                        }
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
                        open={physicalExamDialogOpen}
                        onOpenChange={setPhysicalExamDialogOpen}
                    >
                        <DialogTrigger asChild>
                            <Button
                                variant="outline"
                                className="text-sm hover:text-blue-600"
                            >
                                Customize Physical Exam
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px] lg:max-w-[1024px]">
                            <DialogHeader>
                                <DialogTitle>
                                    Customize Physical Exam
                                </DialogTitle>
                                <DialogDescription>
                                    Customize what the AI will output in each
                                    section of the physical exam if it is normal
                                    or not present in the conversation.
                                </DialogDescription>
                            </DialogHeader>
                            <section className="p-2">
                                <PhysicalExamSettings
                                    initialConfig={element.physicalExam}
                                    config={config}
                                    setConfig={setConfig}
                                />
                            </section>
                            <DialogFooter>
                                <Button
                                    onClick={() => {
                                        handleUpdate("physicalExam", config)
                                        setPhysicalExamDialogOpen(false)
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

interface PhysicalExamSettingsProps {
    initialConfig: PhysicalExamConfig
    config: PhysicalExamConfig
    setConfig: React.Dispatch<React.SetStateAction<PhysicalExamConfig>>
}

export default function PhysicalExamSettings({
    initialConfig,
    config,
    setConfig
}: PhysicalExamSettingsProps) {
    const handleSystemChange = (
        system: keyof PhysicalExamConfig,
        value: NotAvailableTextOption
    ) => {
        setConfig((prev) => ({
            ...prev,
            [system]: { ...prev[system], notAvailableOption: value }
        }))
    }

    const handleTextChange = (
        system: keyof PhysicalExamConfig,
        field: keyof ExamSystemConfig,
        value: string
    ) => {
        setConfig((prev) => ({
            ...prev,
            [system]: { ...prev[system], [field]: value }
        }))
    }

    const renderExamSystem = (
        system: keyof PhysicalExamConfig,
        label: string
    ) => (
        <div key={system} className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center pb-2">
                <Label
                    className={`text-lg font-semibold ${
                        config[system].hidden &&
                        "text-neutral-300 dark:text-neutral-700"
                    }`}
                >
                    {label}{" "}
                </Label>
                <ToggleGroup
                    type="single"
                    value={
                        config[system].hidden
                            ? "hidden"
                            : config[system].notAvailableOption
                    }
                    onValueChange={(
                        value: "hidden" | "default" | "notAvailable" | "custom"
                    ) => {
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
                    variant={"outline"}
                >
                    <ToggleGroupItem
                        className="rounded-r-none"
                        value="default"
                        aria-label="Toggle default"
                    >
                        Default
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="notAvailable"
                        aria-label="Toggle not available"
                        className="rounded-l-none rounded-r-none"
                    >
                        Not Available
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
                        aria-label="Toggle custom"
                    >
                        Hidden
                    </ToggleGroupItem>
                </ToggleGroup>{" "}
            </div>
            {config[system].hidden ? null : config[system]
                  .notAvailableOption === "custom" ? (
                <Textarea
                    variant={"filled"}
                    value={config[system].customText || ""}
                    onChange={(e) =>
                        handleTextChange(system, "customText", e.target.value)
                    }
                    placeholder={`Enter custom physical exam for ${label}`}
                    className="mt-2"
                    rows={4}
                />
            ) : config[system].notAvailableOption === "default" ? (
                <div className="text-sm bg-neutral-100 dark:bg-neutral-800/75 w-fit p-2 rounded text-neutral-700 dark:text-neutral-50 my-1">
                    {config[system].defaultText}
                </div>
            ) : config[system].notAvailableOption === "notAvailable" ? (
                <div className="text-sm bg-red-100 dark:bg-red-800/75 w-fit p-2 rounded text-red-700 dark:text-red-50 my-1">
                    {config[system].notAvailableText}
                </div>
            ) : null}
        </div>
    )

    return (
        <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-6">
                {renderExamSystem("general", "General")}
                {renderExamSystem("HEENT", "HEENT")}
                {renderExamSystem("respiratory", "Respiratory")}
                {renderExamSystem("cardiovascular", "Cardiovascular")}
                {renderExamSystem("gastrointestinal", "Gastrointestinal")}
                {renderExamSystem("genitourinary", "Genitourinary")}
                {renderExamSystem("musculoskeletal", "Musculoskeletal")}
                {renderExamSystem("neurological", "Neurological")}
                {renderExamSystem("skin", "Skin")}
                {renderExamSystem("psychiatric", "Psychiatric")}

                {/* <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Custom Fields</h3>
            {config.customFields.map((field, index) => (
              <div key={index} className="mb-4">
                <input
                  type="text"
                  value={field.name}
                  onChange={(e) => {
                    const newCustomFields = [...config.customFields];
                    newCustomFields[index].name = e.target.value;
                    setConfig(prev => ({ ...prev, customFields: newCustomFields }));
                  }}
                  placeholder="Custom field name"
                  className="w-full p-2 border rounded mb-2"
                />
                {renderExamSystem(`customFields[${index}].config` as keyof PhysicalExamConfig, field.name || `Custom Field ${index + 1}`)}
              </div>
            ))}
            <Button onClick={() => {
              setConfig(prev => ({
                ...prev,
                customFields: [
                  ...prev.customFields,
                  { name: '', config: { notAvailableOption: 'default', hidden: false, defaultText: '', customText: '' } }
                ]
              }));
            }} variant="outline" className="mt-2">
              Add Custom Field
            </Button>
          </div>
           */}
            </div>
        </ScrollArea>
    )
}
