"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import React from "react"
import { NoteElementsProvider } from "./ElementsContext"
import NoteSettingsExample from "./NoteSettingsExample"

const InteractiveDragandDropDemo = () => {
    return (
        <div>
            <Accordion
                type="single"
                collapsible
                className="w-full container mx-auto max-w-6xl "
            >
                <AccordionItem variant="outlined" value="1">
                    <AccordionTrigger variant="outlined" className="">
                        Try building your own template with our drag-and-drop
                        interface
                    </AccordionTrigger>
                    <AccordionContent variant="outlined" className="">
                        <NoteElementsProvider>
                            <NoteSettingsExample />
                        </NoteElementsProvider>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default InteractiveDragandDropDemo
