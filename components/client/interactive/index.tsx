import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import React from "react"

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
                        <div className="flex justify-center items-center p-10">
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5">
                                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default InteractiveDragandDropDemo
