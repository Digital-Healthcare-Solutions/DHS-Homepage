"use client"

import React, { useEffect, useState } from "react"
import { useNoteElements } from "./ElementsContext"
import {
    SoapElements,
    structuredSectionsElements,
    unusedSectionsElements,
    unusedSoapElements
} from "./Elements"
import { ElementType } from "./noteTypes"
import { DragDropContext, DropResult } from "@hello-pangea/dnd"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import PreviewCard from "./PreviewCard"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { EyeIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import ElementList from "./ElementList"

const NoteSettingsExample = () => {
    const [preiewSheetOpen, setPreviewSheetOpen] = useState(false)
    const {
        elements,
        setElements,
        unusedElements,
        setUnusedElements,
        moveElement,
        reorderElements,
        isExpanded,
        collapseAll,
        expandAll,
        localNoteType,
        setLocalNoteType,
        toggleExpand
    } = useNoteElements()

    const handleNoteTypeChange = (value: "soap" | "sections") => {
        setLocalNoteType(value)
        if (value === "soap") {
            setElements(
                Object.values(SoapElements)
                // .filter((element) => element.active)
                // .sort((a, b) => a.order - b.order)
            )
            setUnusedElements(Object.values(unusedSoapElements))
        } else if (value === "sections") {
            setElements(Object.values(structuredSectionsElements))
            setUnusedElements(Object.values(unusedSectionsElements))
        }
        if (isExpanded) {
            expandAll()
        } else {
            collapseAll()
        }
    }

    useEffect(() => {
        handleNoteTypeChange("soap")
    }, [])

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result

        // If there's no destination, return
        if (!destination) {
            return
        }

        // Helper function to reorder an array
        const reorder = (
            list: ElementType[],
            startIndex: number,
            endIndex: number
        ): ElementType[] => {
            const result = Array.from(list)
            const [removed] = result.splice(startIndex, 1)
            result.splice(endIndex, 0, removed)
            return result
        }

        // If the source and destination are the same, we're reordering within a list
        if (source.droppableId === destination.droppableId) {
            const isSelectedList = source.droppableId === "active-elements"
            const list = isSelectedList ? elements : unusedElements
            const reorderedList = reorder(list, source.index, destination.index)

            if (isSelectedList) {
                reorderElements(source.index, destination.index)
            } else {
                setUnusedElements(reorderedList)
            }
        } else {
            // We're moving an item between lists
            const sourceList =
                source.droppableId === "active-elements"
                    ? elements
                    : unusedElements
            const destList =
                destination.droppableId === "active-elements"
                    ? elements
                    : unusedElements

            const sourceClone = Array.from(sourceList)
            const destClone = Array.from(destList)
            const [removed] = sourceClone.splice(source.index, 1)

            destClone.splice(destination.index, 0, removed)

            moveElement(
                source.index,
                destination.index,
                destination.droppableId === "active-elements"
                    ? "elements"
                    : "unusedElements"
            )
        }
    }
    return (
        <div className="space-y-5">
            <Tabs value={localNoteType} onValueChange={handleNoteTypeChange}>
                <TabsList className="w-fit md:w-[400px] grid grid-cols-2 dark:bg-neutral-900/75 mb-4">
                    <TabsTrigger value="soap">SOAP</TabsTrigger>
                    <TabsTrigger value="sections">Sections</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="md:hidden flex items-center gap-6">
                <Label className="text-base font-rubik font-normal">
                    Note Format
                </Label>
                <Button
                    className="bg-neutral-100 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/75  hover:text-blue-600 rounded-lg"
                    variant={"secondary"}
                    endIcon={<EyeIcon size={16} />}
                    onClick={() => setPreviewSheetOpen(true)}
                >
                    Click to Preview
                </Button>
            </div>

            <div className="flex items-center gap-2">
                <Label className="text-base font-normal font-rubik">
                    Show Detailed Elements
                </Label>
                <Switch
                    className="dark:data-[state=unchecked]:bg-neutral-700/75"
                    checked={isExpanded}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            expandAll()
                        } else {
                            collapseAll()
                        }
                    }}
                />
            </div>
            <Sheet open={preiewSheetOpen} onOpenChange={setPreviewSheetOpen}>
                <SheetContent className="z-[1000] w-full lg:min-w-[750px]">
                    <SheetHeader>
                        <SheetTitle>
                            <span
                                className={
                                    localNoteType === "soap"
                                        ? "uppercase"
                                        : "capitalize"
                                }
                            >
                                {localNoteType}{" "}
                            </span>
                            Note Format
                        </SheetTitle>
                        <SheetDescription>
                            This is a preview of how the AI will generate your
                            note based on the format you specified.
                        </SheetDescription>
                    </SheetHeader>
                    <section className="p-4 overflow-y-auto h-[85vh] scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-neutral-400 dark:scrollbar-track-neutral-900 dark:scrollbar-thumb-neutral-700">
                        {elements.map((element, index) => (
                            <PreviewCard element={element} key={element.id} />
                        ))}
                    </section>
                </SheetContent>
            </Sheet>
            <DragDropContext onDragEnd={onDragEnd}>
                {localNoteType ? (
                    <section className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4 w-full">
                            <ElementList
                                title={`${
                                    localNoteType === "nurse"
                                        ? "Nurse / Subjective"
                                        : localNoteType === "soap"
                                        ? "SOAP"
                                        : "Sections"
                                } Note Elements`}
                                elements={elements || []}
                                droppableId="active-elements"
                                toggleExpand={toggleExpand}
                            />
                            <ElementList
                                title="Unused Elements"
                                elements={unusedElements}
                                droppableId="unused-elements"
                                toggleExpand={toggleExpand}
                            />
                        </div>
                        <div className="hidden md:block">
                            <h3 className="text-lg text-center font-semibold mb-2">
                                Note Preview
                            </h3>
                            <div className="border dark:border-neutral-700 rounded-md p-1">
                                {elements.map((element, index) => (
                                    <PreviewCard
                                        element={element}
                                        key={element.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="text-muted-foreground font-semibold p-8">
                        Select a note type to start customizing its format.
                    </div>
                )}
            </DragDropContext>
        </div>
    )
}

export default NoteSettingsExample
