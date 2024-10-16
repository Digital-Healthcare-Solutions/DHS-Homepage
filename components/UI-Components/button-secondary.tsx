"use client"

import React from "react"

const ButtonSecondary = ({ className, onClick, children, ...props }) => {
    return (
        <button
            onClick={onClick}
            {...props}
            className={`font-bold py-3 px-4 rounded-lg shadow-md font-sans flex items-center 
      ${className}`}
        >
            {children}
        </button>
    )
}

export default ButtonSecondary
