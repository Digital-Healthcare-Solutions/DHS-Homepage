"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"
import { toast } from "sonner"
import { initiateCall } from "@/app/actions/initiate-call"

const CallMeForm = () => {
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/[^\d]/g, "")

    // Don't format if empty
    if (!numbers) return ""

    // Format according to length
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
        6
      )}`
    }
    // Limit to 10 digits
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get cursor position before update
    const cursorPosition = e.target.selectionStart
    const previousValue = e.target.value
    const newValue = formatPhoneNumber(e.target.value)

    setPhone(newValue)

    // Wait for re-render then set cursor position
    setTimeout(() => {
      // Only adjust cursor if input is focused and cursor position is not null
      if (e.target === document.activeElement && cursorPosition !== null) {
        // Adjust cursor position based on added formatting characters
        const cursorOffset =
          newValue.length -
          previousValue.length +
          (cursorPosition === previousValue.length ? 1 : 0)

        e.target.setSelectionRange(
          cursorPosition + cursorOffset,
          cursorPosition + cursorOffset
        )
      }
    }, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const rawNumber = phone.replace(/[^\d]/g, "")

    if (rawNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number")
      return
    }

    setIsLoading(true)
    try {
      const result = await initiateCall(rawNumber)

      if (result.success) {
        toast.success(
          "Call initiated! You should receive a call from our agent shortly."
        )
        setPhone("") // Clear the form
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast.error("Failed to initiate call. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }
  const isValidPhone = phone.replace(/[^\d]/g, "").length === 10

  return (
    <Card className="max-w-md mx-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-blue-300 dark:border-transparent shadow-lg rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Try out our Phone Agent for yourself
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <Input
          type="tel"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={handlePhoneChange}
          className={`bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-lg 
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:focus:border-transparent h-10
            ${
              !phone || isValidPhone
                ? ""
                : "border-destructive dark:border-destructive"
            }`}
          // error={phone && !isValidPhone ? true : false}
          maxLength={14}
          aria-invalid={phone && !isValidPhone ? "true" : "false"}
        />
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg whitespace-nowrap"
          disabled={!isValidPhone}
          loading={isLoading}
        >
          Call me
        </Button>
      </form>
    </Card>
  )
}

export default CallMeForm
