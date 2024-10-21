"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const accordionItemVariants = cva("border-b", {
    variants: {
        variant: {
            default: "",
            filled: "bg-neutral-100 hover:bg-neutral-200/75 dark:bg-zinc-800 dark:hover:bg-neutral-800/80 rounded-lg mb-2",
            outlined: "border rounded-lg mb-2 dark:bg-neutral-800"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})

export interface AccordionItemProps
    extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
        VariantProps<typeof accordionItemVariants> {}

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    AccordionItemProps
>(({ className, variant, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(accordionItemVariants({ variant, className }))}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

const accordionTriggerVariants = cva(
    "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all [&[data-state=open]>svg]:rotate-180",
    {
        variants: {
            variant: {
                default: "hover:underline",
                filled: "px-4",
                outlined: "px-4"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface AccordionTriggerProps
    extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
        VariantProps<typeof accordionTriggerVariants> {}

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    AccordionTriggerProps
>(({ className, children, variant, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(accordionTriggerVariants({ variant, className }))}
            {...props}
        >
            {children}
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const accordionContentVariants = cva(
    "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    {
        variants: {
            variant: {
                default: "",
                filled: "px-4",
                outlined: "px-4"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface AccordionContentProps
    extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
        VariantProps<typeof accordionContentVariants> {}

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    AccordionContentProps
>(({ className, children, variant, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className={cn(accordionContentVariants({ variant, className }))}
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
