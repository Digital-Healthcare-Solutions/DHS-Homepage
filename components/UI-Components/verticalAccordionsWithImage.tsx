"use client"

import React from "react"
import { Accordion, createStyles } from "@mantine/core"
import Image from "next/image"

type AccordionItem = {
    title: string
    image: string
    description: string
}

type VerticalAccordionsWithImageProps = {
    accordionItems: AccordionItem[]
    direction?: "left" | "right"
}

const VerticalAccordionsWithImage = ({
    accordionItems,
    direction
}: VerticalAccordionsWithImageProps) => {
    const useStyles = createStyles((theme) => ({
        root: {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            borderRadius: theme.radius.sm
        },

        item: {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            border: "1px solid transparent",
            position: "relative",
            zIndex: 0,
            transition: "transform 150ms ease",

            "&[data-active]": {
                transform: "scale(1.03)",
                backgroundColor:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[7]
                        : theme.white,
                boxShadow: theme.shadows.md,
                borderColor:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[4]
                        : theme.colors.gray[2],
                borderRadius: theme.radius.md,
                zIndex: 1,
                //on hover keep the control background color dark
                "&:hover": {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[7]
                            : theme.white
                }
            }
        },

        chevron: {
            "&[data-rotate]": {
                transform: "rotate(-90deg)"
            }
        }
    }))

    const { classes } = useStyles()

    const [selectedAccordion, setSelectedAccordion] = React.useState(
        accordionItems[0].title
    )

    return (
        <section
            className={`flex flex-col-reverse ${
                direction === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-around gap-12 md:gap-8 w-full pt-5 lg:py-0 lg:px-5`}
        >
            {/* //render large image here based on whatever accordion is selected */}
            <div className="">
                <Image
                    src={
                        accordionItems.find(
                            (item) => item.title === selectedAccordion
                        )?.image || ""
                    }
                    alt={selectedAccordion}
                    width={800}
                    height={500}
                    className="rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-110 bg-white"
                />
            </div>

            <Accordion
                sx={{ maxWidth: 420 }}
                // mx="auto"
                variant="contained"
                defaultValue={accordionItems[0].title}
                classNames={classes}
                className={classes.root}
                value={selectedAccordion}
                onChange={(value) => {
                    if (typeof value === "string") setSelectedAccordion(value)
                }}
            >
                {accordionItems.map((item, index) => (
                    <Accordion.Item value={item.title} key={index}>
                        <Accordion.Control>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="bg-white"
                                />
                                <span>{item.title}</span>
                            </div>
                        </Accordion.Control>
                        <Accordion.Panel>{item.description}</Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
            {/* <div>
                {accordionItems.map((item, index) => (
                    <Accordion.Item value={item.title} key={index}>
                        <Accordion.Control>
                            <div className="flex items-center gap-2">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                />
                                <span>{item.title}</span>
                            </div>
                        </Accordion.Control>
                        <Accordion.Panel>{item.description}</Accordion.Panel>
                    </Accordion.Item>
                ))}
            </div> */}
        </section>
    )
}

export default VerticalAccordionsWithImage
