import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean
    helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, helperText, ...props }, ref) => {
        return (
            <div className="w-full">
                <textarea
                    className={cn(
                        "flex min-h-[60px] w-full rounded-md border  bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        error ? "border-red-500" : "border-input",
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
Textarea.displayName = "Textarea"

export { Textarea }
