"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"

const CallMeForm = () => {
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Phone number submitted:", phone)
  }

  return (
    <Card className="max-w-md mx-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-blue-300 dark:border-transparent shadow-lg rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Experience Axon AI&apos;s Phone Agent in action
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <Input
          type="tel"
          placeholder="xxx-xxx-xxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent h-10"
        />
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg whitespace-nowrap"
        >
          Call me
        </Button>
      </form>
    </Card>
  )
}

export default CallMeForm
