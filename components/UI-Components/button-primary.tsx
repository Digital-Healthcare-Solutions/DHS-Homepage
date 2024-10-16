"use client"

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface ButtonPrimaryProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    children,
    onClick,
    className,
    ...props
}) => {
    return (
        <button
            onClick={
                onClick
                    ? onClick
                    : () => {
                          console.log("")
                      }
            }
            {...props}
            className={`bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500
      ${className}`}
        >
            {children}
        </button>
    )
}

export default ButtonPrimary
