"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"
import { ChevronUp, ChevronDown } from "lucide-react"

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
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    // Use internal state only if the component is uncontrolled
    const [internalValue, setInternalValue] = React.useState<string>(
      defaultValue?.toString() || ""
    )

    // Determine if the component is controlled
    const isControlled = value !== undefined
    // Use either controlled value or internal state
    const currentValue = isControlled ? value : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    const handleIncrement = () => {
      const currentNumericValue = parseInt(currentValue as string) || 0
      const newValue = (currentNumericValue + 1).toString()

      if (!isControlled) {
        setInternalValue(newValue)
      }

      onChange?.({
        target: { value: newValue }
      } as React.ChangeEvent<HTMLInputElement>)
    }

    const handleDecrement = () => {
      const currentNumericValue = parseInt(currentValue as string) || 0
      const newValue = (currentNumericValue - 1).toString()

      if (!isControlled) {
        setInternalValue(newValue)
      }

      onChange?.({
        target: { value: newValue }
      } as React.ChangeEvent<HTMLInputElement>)
    }

    // Sync internal state with external value when controlled
    React.useEffect(() => {
      if (isControlled) {
        setInternalValue(value as string)
      }
    }, [isControlled, value])

    return (
      <div className="w-full">
        <style jsx>{`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}</style>
        {Boolean(label) && (
          <Label className="text-sm">
            {label}
            {labelWithAsterisk && <span className="text-red-500"> *</span>}
          </Label>
        )}
        <div className="relative">
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
              error
                ? "border-red-500 text-red-900 focus-visible:ring-red-500"
                : "border-neutral-300 dark:border-[#373a40] text-foreground focus-visible:ring-ring",
              type === "number" ? "pr-12" : "",
              className
            )}
            value={currentValue}
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          {type === "number" && (
            <div
              className={cn(
                "absolute inset-y-0 right-0 flex flex-col border-l",
                error
                  ? "border-red-500"
                  : "border-neutral-300 dark:border-[#373a40]"
              )}
            >
              <button
                type="button"
                className={cn(
                  "flex-1 px-2 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-tr-lg border border-l-0 border-b active:bg-white dark:active:bg-neutral-800/70",
                  error ? "border-red-500" : "dark:border-[#373a40]"
                )}
                onClick={handleIncrement}
              >
                <ChevronUp className="h-3 w-3" />
              </button>
              <button
                type="button"
                className={cn(
                  "flex-1 px-2 flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-br-lg border border-l-0 border-t-0 active:bg-white dark:active:bg-neutral-800/70 ",
                  error ? "border-red-500" : "dark:border-[#373a40]"
                )}
                onClick={handleDecrement}
              >
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
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
