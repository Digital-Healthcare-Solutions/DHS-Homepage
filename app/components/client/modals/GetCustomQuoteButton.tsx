"use client"

import { Button } from "@mantine/core"
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface GetCustomQuoteButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    ref?: React.Ref<HTMLButtonElement>
}

const GetCustomQuoteButton: React.FC<GetCustomQuoteButtonProps> = ({
    ...props
}) => {
    return (
        <Button
            {...props}
            className="bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500"
        >
            Get Custom Quote
        </Button>
    )
}

export default GetCustomQuoteButton
