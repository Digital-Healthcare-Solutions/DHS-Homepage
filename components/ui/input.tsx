import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
    helperText?: string
    label?: string
    labelWithAsterisk?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            error,
            helperText,
            label,
            labelWithAsterisk,
            ...props
        },
        ref
    ) => {
        return (
            <div className="w-full">
                {Boolean(label) && (
                    <Label className="text-sm">
                        {label}
                        {labelWithAsterisk && (
                            <span className="text-red-500"> *</span>
                        )}
                    </Label>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 ",
                        error
                            ? "border-red-500 text-red-900 focus-visible:ring-red-500"
                            : "border-neutral-300 dark:border-[#373a40] 00 text-foreground focus-visible:ring-ring",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {helperText && (
                    <p
                        className={cn(
                            "mt-1 text-sm",
                            error ? "text-red-500" : "text-muted-foreground"
                        )}
                    >
                        {helperText}
                    </p>
                )}
            </div>
        )
    }
)

Input.displayName = "Input"

export { Input }
